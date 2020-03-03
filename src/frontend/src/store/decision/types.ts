import DecisionMaker from "../../models/DecisionMaker";
import { DecisionAuthority, DecisionValue } from "../../models/Decision";

interface ChooseDecisionMakerAction {
  type: 'CHOOSE_DECISION_MAKER'
  payload?: DecisionMaker
}

interface ChooseDecisionAuthorityAction {
  type: 'CHOOSE_DECISION_AUTHORITY'
  payload: DecisionAuthority
}

interface ChooseDecisionValueAction {
  type: 'CHOOSE_DECISION_VALUE'
  payload: DecisionValue
}

interface PushDecisionAction {
  type: 'PUSH_DECISION'
}

export interface DecisionState {
  errorMessage?: string
  success: boolean,
  decisionMaker?: DecisionMaker
  decisionAuthority: DecisionAuthority
  decisionValue: DecisionValue
}

export type DecisionActionType = ChooseDecisionMakerAction | ChooseDecisionAuthorityAction | ChooseDecisionValueAction | PushDecisionAction
