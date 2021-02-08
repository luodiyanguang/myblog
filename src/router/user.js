const { login } = require('../controller/user')
const {SuccessModel , ErrorModel } = require('../model/resModel')

const handerUserRouter = (req , res) => {
  const method = req.method

  //登陆
  if(method === 'POST' && req.path === '/api/user/login') {
    const {username , password} = req.body
    const result = login(username , password)

    if(result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('登陆失败!')
    }
  }
}

module.exports = handerUserRouter