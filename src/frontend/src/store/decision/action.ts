import DecisionMaker from '../../models/DecisionMaker'
import { DecisionActionType } from './types'
import { DecisionAuthority, DecisionValue } from '../../models/Decision'

export const chooseDecisionMaker = (decisionMaker?: DecisionMaker): DecisionActionType => ({
  type: 'CHOOSE_DECISION_MAKER',
  payload: decisionMaker
})

export const chooseDecisionAuthority = (decisionAuthority: DecisionAuthority): DecisionActionType => ({
  type: "CHOOSE_DECISION_AUTHORITY",
  payload: decisionAuthority
})

export const chooseDecisionValue = (decisionValue: DecisionValue): DecisionActionType => ({
  type: "CHOOSE_DECISION_VALUE",
  payload: decisionValue
})

export const pushDecision = (): DecisionActionType => ({
  type: 'PUSH_DECISION'
})