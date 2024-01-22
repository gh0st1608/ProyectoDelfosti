import createError from 'http-errors'
import {
  NextFunction as Next,
  Request as Req,
  Response as Res
} from 'express'

export const authorizationMiddleware = (req: Req, res: Res, next: Next): void => {
  const authorizationHeader: string | undefined = req.headers.authorization
  const error: string = 'Acceso no autorizado'
  const expToken: RegExp = /^pk_test_[A-Za-z0-9]{16}$/
  console.log(authorizationHeader)

  if (authorizationHeader === undefined) {
    req.body.error = createError.Unauthorized(error)
    console.log('error',req.body.error)
    res.json({
      message: 'pk no definido'
    })
    return next('route')
  }


  if (!expToken.test(authorizationHeader)) {
    req.body.error = createError.Unauthorized(error)
    res.json({
      message: 'pk no establecido dentro de los parametros permitidos'
    })
    return next('route')
  }

   /* req.body.token = authorizationHeader */
   /* console.log('req.body.token',req.body.token) */
  next()
}