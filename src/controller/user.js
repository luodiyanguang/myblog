const login = (username , password) => {
  //使用假数据进行模拟
  if(username === 'zhangsan' && password === '123') {
    return true
  } else {
    return false
  }
}

module.exports = { login } 