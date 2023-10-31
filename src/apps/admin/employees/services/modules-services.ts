import endpoint from "shared/endpoint";

export function getModules() {
  return endpoint.get("/company/employees/modules");
}
