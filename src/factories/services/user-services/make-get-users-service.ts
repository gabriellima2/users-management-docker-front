import { GetUsersService } from '../../../services/user-services/get-users-service'
import { makeUserApiBaseUrl } from '../../api/make-user-api-base-url'

export const makeGetUsersService = () => new GetUsersService(makeUserApiBaseUrl())
