import { AddAccount } from '@/domain/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { RemoteAddAccount } from '@/data/usecases/add-account/remote-add-account'

export const makeRemoteAddAccount = (): AddAccount => {
  return new RemoteAddAccount(makeApiUrl('/sign-up'), makeAxiosHttpClient())
}
