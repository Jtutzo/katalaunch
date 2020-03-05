import {Controller} from './controller'

export class Routes {
  public nodesController: Controller = new Controller();

  public routes(app): void {
    app.route("/last-decision").get(this.nodesController.getLastDecision);
    app.route("/decision-makers").get(this.nodesController.getDecisionMakers);
  }
}
