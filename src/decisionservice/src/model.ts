export type DecisionAuthority = 'RECOMMANDATION' | 'SIGNING' | 'CREDIT'

export type DecisionValue = 'ACCEPTED' | 'REFUSED'

export interface Decision {
  decisionMakerName: string
  authority: DecisionAuthority
  value: DecisionValue
  date: Date
}

export interface DecisionMaker {
  name: string
  hasSigningAuthority: boolean
  hasCreditAuthority: boolean
}
