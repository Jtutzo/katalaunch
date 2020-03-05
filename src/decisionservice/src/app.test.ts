import * as request from 'supertest'
import app from './app'
import {decisionMakers} from './controller'

describe('Test app', () => {
  describe('call last decision route', () => {
    test('Should return 200 and response', () => request(app)
        .get('/last-decision')
        .expect(200)
      //TODO error comparison date
      //  .expect(lastDecision)
    )
  })
  describe('call decision makers route', () => {
    test('Should return 200 and response', () => request(app)
      .get('/decision-makers')
      .expect(200)
      .expect(decisionMakers))
  })
})
