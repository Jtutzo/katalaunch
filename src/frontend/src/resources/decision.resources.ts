import axios from 'axios'
import {Decision} from '../models/Decision'
import DecisionMaker from '../models/DecisionMaker'

export class DecisionResource {

  readonly domain: string

  constructor(domain: string) {
    this.domain = domain
  }

  public getLastDecision(): Promise<Decision> {
    return axios.get(`${this.domain}/last-decision`)
  }

  public getDecisionMakers(): Promise<DecisionMaker[]> {
    return axios.get(`${this.domain}/decision-makers`)
  }
}

const decisionResource = new DecisionResource('http://decisionservice:3000')
export default decisionResource
