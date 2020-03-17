import {Controller} from './controller'

export class Routes {
  public nodesController: Controller = new Controller();

  public routes(app): void {
    app.route("/decision/last-decision").get(this.nodesController.getLastDecision);
    app.route("/decision/decision-makers").get(this.nodesController.getDecisionMakers);
    app.route("/decision/").post(this.nodesController.postDecision)
  }
}
