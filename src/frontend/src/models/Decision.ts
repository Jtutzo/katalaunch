export type DecisionAuthority = 'RECOMMANDATION' | 'SIGNING' | 'CREDIT'

export type DecisionValue = 'ACCEPTED' | 'REFUSED'

export interface Decision {
  decisionMakerName: string
  authority: DecisionAuthority
  value: DecisionValue
  date: Date
}