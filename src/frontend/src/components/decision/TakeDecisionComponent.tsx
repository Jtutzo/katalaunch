import React from 'react'
import LastDecisionComponent from './LastDecisionComponent'
import { Decision } from '../../models/Decision'
import ChooseDecisionMakerComponent from './ChooseDecisionMakerComponent'
import DecisionMaker from '../../models/DecisionMaker'
import ChooseDecisionAuthorityComponent from './ChooseDecisionAuthorityComponent'
import ChooseDecisionValueComponent from './ChooseDecsionValueComponent'
import SubmitDecisionComponent from './SubmitDecisionComponent'
import Card from 'react-bootstrap/Card'
import DisplayDecisionErrorComponent from './DisplayDecisionErrorComponent'
import DisplayDecisionSuccessComponent from './DisplayDecisionSuccessComponent'

const idName = "decision-component"

class TakeDecisionComponent extends React.Component {

  private lastDecision: Decision
  private decisionMakers: DecisionMaker[]

  constructor(props: {}) {
    super(props)
    this.lastDecision = this.getLastDecision()
    this.decisionMakers = this.getDecisionMakers()
  }

  getLastDecision = (): Decision => ({
    decisionMakerName: 'Jérémy',
    authority: "RECOMMANDATION",
    value: "ACCEPTED",
    date: new Date()
  })

  getDecisionMakers = (): DecisionMaker[] => ([{
    name: 'Antoine',
    hasSigningAuthority: true,
    hasCreditAuthority: true
  }, {
    name: 'Marcel',
    hasSigningAuthority: true,
    hasCreditAuthority: false
  }])

  render() {
    return (
      <section id={idName} className="container">
        <DisplayDecisionSuccessComponent/>
        <DisplayDecisionErrorComponent/>
        <LastDecisionComponent decision={this.lastDecision} />
        {this.decisionMakers.length > 0 &&
          <Card>
            <Card.Body>
              <Card.Title>Take your decision</Card.Title>
              <Card.Body>
                <ChooseDecisionMakerComponent decisionMakers={this.decisionMakers} />
                <ChooseDecisionAuthorityComponent />
                <ChooseDecisionValueComponent />
                <SubmitDecisionComponent />
              </Card.Body>
            </Card.Body>
          </Card>}
      </section>
    )
  }
}

export default TakeDecisionComponent
