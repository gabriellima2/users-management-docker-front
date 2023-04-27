import type { UserEntity } from '../../entities/user-entity'

export class GetUsersService {
  constructor(private readonly baseUrl: string) {}

  async execute(): Promise<UserEntity[]> {
    if (!this.baseUrl) throw new Error(`Base URL is required`)
    const response = await fetch(this.baseUrl, { method: 'GET' })
    if (!response.ok) throw new Error(`Server responded with ${response.status}`)
    const data: UserEntity[] = await response.json()
    return data
  }
}