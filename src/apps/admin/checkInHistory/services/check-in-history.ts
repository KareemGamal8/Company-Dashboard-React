import { RestfulEndpoint } from "@mongez/http";

class CheckInHistoryService extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */

  public route = "/company/check-in-history";
}

const checkInHistoryService = new CheckInHistoryService();

export default checkInHistoryService;
