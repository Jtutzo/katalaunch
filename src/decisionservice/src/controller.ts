import {Request, Response} from 'express'
import {Decision, DecisionMaker} from './model'

export let lastDecision: Decision = {
  decisionMakerName: 'Jérémy',
  authority: 'RECOMMANDATION',
  value: 'ACCEPTED',
  date: new Date()
}

export const decisionMakers: DecisionMaker[] = [{
  name: 'Antoine',
  hasSigningAuthority: true,
  hasCreditAuthority: true
}, {
  name: 'Marcel',
  hasSigningAuthority: true,
  hasCreditAuthority: false
}]

export class Controller {
  public getLastDecision(req: Request, res: Response) {
    res.json(lastDecision)
  }

  public getDecisionMakers(req: Request, res: Response) {
    res.json(decisionMakers)
  }

  public postDecision(req: Request, res: Response) {
    lastDecision = req.body as Decision
    res.sendStatus(201)
  }

}
