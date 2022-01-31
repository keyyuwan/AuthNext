import { ReactNode } from "react";
import { usePermissions } from "../../hooks/usePermissions";

interface PermissionProps {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
}

export function Permission({ children, permissions, roles }: PermissionProps) {
  const userCanSeeComponent = usePermissions({ permissions, roles });

  return userCanSeeComponent ? <>{children}</> : null;
}
