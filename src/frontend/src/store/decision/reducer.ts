import { DecisionState, DecisionActionType } from './types'

const initialState: DecisionState = {
  decisionAuthority: "RECOMMANDATION",
  decisionValue: "ACCEPTED",
  success: false
}

const decisionReducer = (state = initialState, action: DecisionActionType): DecisionState => {
  switch (action.type) {
    case 'CHOOSE_DECISION_MAKER':
      return {
        ...initialState,
        decisionMaker: action.payload
      }
    case 'CHOOSE_DECISION_AUTHORITY':
      return {
        ...state,
        success: false,
        errorMessage: undefined,
        decisionAuthority: action.payload
      }

    case 'CHOOSE_DECISION_VALUE':
      return {
        ...state,
        success: false,
        errorMessage: undefined,
        decisionValue: action.payload
      }
    case 'PUSH_DECISION':
      return {
        ...state,
        errorMessage: state.decisionMaker ? undefined : "You must choose a decision maker !",
        success: !!state.decisionMaker
      }
    default:
      return state
  }
}

export default decisionReducer
