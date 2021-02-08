
const querystring = require('querystring')

const handerBlogRouter = require('./src/router/blog')
const handerUserRouter = require('./src/router/user')

//处理post data
const getPostData = (req) => {
  const promise = new Promise((resolve , reject) => {
    if(req.method !== "POST") {
      resolve({})
      return 
    }  

    if(req.headers['content-type'] !== 'application/json') {
      resolve({})
      return 
    }

    let postData = ''
    req.on('data' , chunk => {
      postData += chunk
    })

    req.on('end' , () => {
       if(!postData) {
         resolve({})
         return 
       }
       resolve(
         JSON.parse(postData)
       )
    })
  }) 

  return promise
}

const serverHander = (req , res) => {
  //设置返回格式JSON
  res.setHeader('Content-type', 'application/json')

  //获取path
  const url = req.url
  req.path = url.split('?')[0]

  //获取query
  req.query = querystring.parse(url.split('?')[1])

  //处理pst data
  getPostData(req).then(postData => {
    req.body = postData
     
    //处理blog路由
    const blogData = handerBlogRouter(req , res)
    if(blogData) {
       res.end(
         JSON.stringify(blogData)
       )
       return
    }

    //处理user路由
    const userData = handerUserRouter(req , res)
    if(userData) {
      res.end(
        JSON.stringify(userData)
      )
      return
    }

    //处理未命中路由，返回404
    res.writeHead(404,  {"Content-type": "text/plain"})
    res.write("404 Not Found\n")
    res.end()
  })
  
  }

module.exports = serverHander