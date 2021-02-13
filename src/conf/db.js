const env = process.env.NODE_ENV //环境参数

//配置

let MYSQL_CONF

if(env === "dev") {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "15605227659wl",
    port: 3306,
    database: "myblog"
  }
}

if(env === "prd") {
  MYSQL_CONF = {
    host: "127.0.0.1",
    user: "root",
    password: "15605227659wl",
    port: 3306,
    database: "myblog"
  }
}

module.exports = {
  MYSQL_CONF
}