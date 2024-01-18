import { Router } from 'express'
import {apiUserLogged} from '../../middleware/authorization.js'
import {appendJwtAsCookie, removeJwtFromCookies} from '../../middleware/authentication.js'
import passport from 'passport'
import { sessionController } from '../../controllers/session.controller.js'

export const sessionRouter = Router()


sessionRouter.post('/login',
  passport.authenticate('login', {
    failWithError: true,
    session:false
  }),
  appendJwtAsCookie,
  sessionController.login
)

sessionRouter.get('/current', 
passport.authenticate('jwt',{
  failWithError: true,
  session:false
}),
apiUserLogged,
sessionController.current
)

sessionRouter.delete('/logout', 
  removeJwtFromCookies,
  sessionController.delete
  )