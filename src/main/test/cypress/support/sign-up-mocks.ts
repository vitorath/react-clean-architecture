import * as Helper from './http-mocks'

export const mockEmailInUseError = (): void => Helper.mockEmailInUseError(/sign-up/)

export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/sign-up/, 'POST')
