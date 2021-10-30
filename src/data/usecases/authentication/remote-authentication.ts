import { HttpPostClient } from 'data/protocols/http/http-post-client'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpPostClient) { }

  async auth (): Promise<void> {
    await this.httpClient.post(this.url)
    return await Promise.resolve()
  }
}
