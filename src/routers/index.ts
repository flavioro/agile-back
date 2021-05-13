import { Router } from 'express'

import AuthenticateUserController from '../controllers/AuthenticateUserController'
import CreateUserController from '../controllers/CreateUserController'

import authValidator from '../authenticate/AuthenticateValidator'

const routes = Router()
routes.post('/v1/users/auth', AuthenticateUserController.Authenticate)
routes.post('/v1/users/create', CreateUserController.CreateUser)

export default routes
