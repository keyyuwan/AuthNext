interface User {
  permissions: string[];
  roles: string[];
}

interface ValidateUserPermissionsParams {
  user: User;
  permissions?: string[];
  roles?: string[];
}

export function validateUserPermissions({
  user,
  permissions,
  roles,
}: ValidateUserPermissionsParams) {
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
