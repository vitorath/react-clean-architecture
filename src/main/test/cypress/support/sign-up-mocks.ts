import * as Helper from './http-mocks'
import faker from 'faker'

export const mockEmailInUseError = (): void => Helper.mockEmailInUseError(/sign-up/)

export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/sign-up/, 'POST')

export const mockInvalidData = (): void => Helper.mockOk(/sign-up/, 'POST', {
  invalid: faker.datatype.uuid()
})
