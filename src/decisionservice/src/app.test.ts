import * as request from 'supertest'
import app from './app'
import {decisionMakers} from './controller'

describe('Test app', () => {
  describe('call last decision route', () => {
    test('Should return 200 and response', () => request(app)
        .get('/decision/last-decision')
        .expect(200)
      //TODO fix comparison date
      //  .expect(lastDecision)
    )
  })
  describe('call decision makers route', () => {
    test('Should return 200 and response', () => request(app)
      .get('/decision/decision-makers')
      .expect(200)
      .expect(decisionMakers))
  })
  describe('Post on decision route', () => {
    test('Should return 201', () => request(app)
      .post('/decision')
      .send({
        decisionMakerName: 'Jérémy',
        authority: 'RECOMMANDATION',
        value: 'ACCEPTED',
        date: new Date()
      })
      .expect(201))
  })
})
