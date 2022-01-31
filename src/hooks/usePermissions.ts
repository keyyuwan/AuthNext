import { useAuth } from "../contexts/AuthContext";

interface UsePermissionsParams {
  permissions?: string[];
  roles?: string[];
}

export function usePermissions({ permissions, roles }: UsePermissionsParams) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return false;
  }

  if (permissions?.length > 0) {
    const userHasAllPermissions = permissions.every((permission) =>
      user.permissions.includes(permission)
    );

    if (!userHasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const userHasAtLeastOneRole = roles.some((role) =>
      user.roles.includes(role)
    );

    if (!userHasAtLeastOneRole) {
      return false;
    }
  }

  return true;
}
