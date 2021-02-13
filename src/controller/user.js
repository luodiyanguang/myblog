const { exec } = require('../db/mysql')


const login = (username , password) => {
  // //使用假数据进行模拟
  // if(username === 'zhangsan' && password === '123') {
  //   return true
  // } else {
  //   return false
  // }

  let sql = `select username, realname from users where username='${username}' and password='${password}';`
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}

module.exports = { login } 