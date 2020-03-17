import {DecisionActionType} from './types'
import decisionResource from '../../resources/decision.resources'
import {pushDecisionErrorResponse, pushDecisionSuccessResponse} from './action'

const middleware = (store: any) => (next: (action: DecisionActionType) => void) => (action: DecisionActionType) => {
  switch (action.type) {
    case 'PUSH_DECISION':
      next(action)
      const {errorMessage, decisionMaker, decisionAuthority, decisionValue} = store.getState()
      if (!errorMessage) {
        decisionResource.postDecision({
          decisionMakerName: decisionMaker.name,
          value: decisionValue,
          authority: decisionAuthority,
          date: new Date()
        }).then(() => store.dispatch(pushDecisionSuccessResponse()))
          .catch(error => store.dispatch(pushDecisionErrorResponse(error)))
      }
      break
    default:
      next(action)
  }
}

export default middleware
