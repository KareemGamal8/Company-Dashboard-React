import endpoint from "shared/endpoint";

export function getHome() {
  return endpoint.get("/company/dashboard");
}

export function getTopTenEmployees() {
  return endpoint.get("/company/dashboard/top-ten-employees");
}

export function getActiveEmployees() {
  return endpoint.get("/company/dashboard/active-employees");
}

export function getActiveEmployeesByMonth() {
  return endpoint.get("/company/dashboard/active-employees?month=2023-10");
}

export function getUserGym() {
  return endpoint.get("/company/my-places");
}
