import {Controller, decisionMakers, lastDecision} from './controller'
import {Request, Response} from 'express'

describe('Test controller', () => {

  const mockResponse = () => {
    const res: Response = {} as Response;
    res.send = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    res.sendStatus = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
  }

  const controller = new Controller()

  describe('test getLastDecision', () => {
    test('Should call response request', () => {
      const response = mockResponse()
      controller.getLastDecision({} as Request, response)

      expect(response.json).toBeCalledTimes(1)
      expect(response.json).toBeCalledWith(lastDecision)
    })
  })

  describe('test getDecisionMakers', () => {
    test('Should call response request', () => {
      const response = mockResponse()
      controller.getDecisionMakers({} as Request, response)

      expect(response.json).toBeCalledTimes(1)
      expect(response.json).toBeCalledWith(decisionMakers)
    })
  })

  describe('test postDecision', () => {
    test('Should return 201 status', () => {
      const response = mockResponse()
      controller.postDecision({} as Request, response)

      expect(response.sendStatus).toBeCalledTimes(1)
      expect(response.sendStatus).toBeCalledWith(201)
    })
  })
})
