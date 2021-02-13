const { exec } = require('../db/mysql')

const getList = (author , keyword) => {
  // //先返回假数据
  // return [
  //   {
  //     id: 1,
  //     author: 'zhangsan',
  //     title: '标题一',
  //     content: '内容一',
  //     createTime: 1611792326247
  //   },
  //   {
  //     id: 2,
  //     author: 'lisi',
  //     title: '标题二',
  //     content: '内容二',
  //     createTime: 1611792390981
  //   }
  // ]
  let sql = `select * from blogs where 1=1 `
  if(author) {
    sql += `and author='${author}' `
  }
  if(keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc`

  // exec(sql).then(a => {
  //   console.log(a)
  // })

  return exec(sql)
}

const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}';`
  return exec(sql).then(rows => {
      return rows[0]
  })
}

const newBlog = (data = {}) => {
  //data里面包含的是新建博客时传入的数据title, content,author等
  // console.log(data)
  // return {
  //   id: 3
  // }
  const title = data.title
  const content = data.content
  const author = data.author 
  const createTime = Date.now()

  const sql = `insert into blogs (title, content, createTime, author)
  values ('${title}', '${content}', '${createTime}', '${author}');`
  return exec(sql).then(insertData => {
    // console.log(insertData)
    return {
      id: insertData.insertId
    }
  })
}

const updataBlog = (id , data = {}) => {
  //data里面包含更新后的title,content等
  // console.log(id , data)
  const title = data.title
  const content = data.content

  let sql = `update blogs set title='${title}', content='${content}' where id='${id}'`
  return exec(sql).then(updataData => {
    console.log(updataData)
    if (updataData.affectedRows > 0) {
      return true
    }
    return false
  })
  
}

const delBlog = (id , author) => {
  //id是要删除博客的id
  let sql = `delete from blogs where id='${id}' and author='${author}';`
  return exec(sql).then(delData => {
    if(delData.affectedRows > 0) {
      return true
    }
    return false
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
}