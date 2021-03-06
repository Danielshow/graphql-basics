import jwt from 'jsonwebtoken'

const getUserId = (request, requireAuth=true) => {
  const headers = request.request ? request.request.headers.authorization : request.connecttion.context.Authorization
  if (headers) {
    const token = headers.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET) 
    return decoded.userId
  }
  if (requireAuth) {
    throw new Error("Authentication Required")
  }

  return null
}

export default getUserId;
