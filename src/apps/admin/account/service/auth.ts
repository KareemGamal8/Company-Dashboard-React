import endpoint from "shared/endpoint";

export function getGuestToken() {
  return endpoint.post("/auth/login/guests");
}
export function login(data: any) {
  return endpoint.post("/auth/login", data);
}
export function forgetPassword(data: any) {
  return endpoint.post("/auth/password-resets", data);
}

export function resetPassword(data: any) {
  return endpoint.post("/auth/password-resets/reset", data);
}

export function updateProfile(data: any) {
  return endpoint.put("/auth/update-profile", data);
}

export function changePassword(data: any) {
  return endpoint.post("/auth/change-password", data);
}
/**
 * Verify forget password code
 */
export function verifyForgetPassword(data: any) {
  return endpoint.post("/auth/forget-password/verify-code", data);
}
