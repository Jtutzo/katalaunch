import axios from 'axios'
import {Decision} from '../models/Decision'

export class DecisionResource {

  readonly domain: string

  constructor(domain: string) {
    this.domain = domain
  }

  public async getLastDecision(): Promise<Decision> {
    try {
      const response = await axios.get(`${this.domain}/last-decision`)
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  public async getDecisionMakers() {
    try {
      const response = await axios.get(`${this.domain}/decision-makers`)
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }
}

const decisionResource = new DecisionResource('/decision')
export default decisionResource
