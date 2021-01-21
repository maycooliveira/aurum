export function updateUser(user: {}) {
  return {
    type: '@user/UPDATE_USER',
    payload: { user },
  };
}
