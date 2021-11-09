import { Authentication, AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'

export class AuthenticationSpy implements Authentication {
  params: AuthenticationParams
  account = mockAccountModel()
  callsCount = 0

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    this.params = params
    this.callsCount += 1
    return await Promise.resolve(this.account)
  }
}
