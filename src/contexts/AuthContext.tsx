import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Router from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { api } from "../services/apiClient";

interface UserInfo {
  email: string;
  password: string;
}

interface SignInResponse {
  token: string;
  refreshToken: string;
  roles: string[];
  permissions: string[];
}

interface User {
  email: string;
  permissions: string[];
  roles: string[];
}

interface AuthContextData {
  signIn: (userInfo: UserInfo) => Promise<void>;
  signOut: () => void;
  user: User;
  isAuthenticated: boolean;
  isAuthLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function signOut() {
  destroyCookie(undefined, "@auth:token");
  destroyCookie(undefined, "@auth:refreshToken");

  authChannel.postMessage("signOut");

  Router.push("/");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");

    authChannel.onmessage = (message) => {
      if (message.data === "signOut") {
        signOut();
      }
    };
  }, []);

  useEffect(() => {
    const { "@auth:token": token } = parseCookies();

    if (token) {
      api
        .get("/me")
        .then((response) => setUser(response.data))
        .catch(() => {
          signOut();
        });
    }
  }, []);

  const [isAuthLoading, setIsAuthLoading] = useState(false);

  async function signIn(userInfo: UserInfo) {
    setIsAuthLoading(true);

    try {
      const { data } = await api.post<SignInResponse>("/sessions", userInfo);

      const { token, refreshToken, permissions, roles } = data;

      setCookie(undefined, "@auth:token", token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      setCookie(undefined, "@auth:refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      setUser({
        email: userInfo.email,
        permissions,
        roles,
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      Router.push("/home");
    } catch (err) {
      console.log(err);
    } finally {
      setIsAuthLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user, isAuthenticated, isAuthLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
