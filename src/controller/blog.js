const getList = (author , keyword) => {
  //先返回假数据
  return [
    {
      id: 1,
      author: 'zhangsan',
      title: '标题一',
      content: '内容一',
      createTime: 1611792326247
    },
    {
      id: 2,
      author: 'lisi',
      title: '标题二',
      content: '内容二',
      createTime: 1611792390981
    }
  ]
}

const getDetail = (id) => {
  return {
    id: 1,
    author: 'zhangsan',
    title: '标题一',
    content: '内容一',
    createTime: 1611792326247
  }
}

const newBlog = (data = {}) => {
  //data里面包含的是新建博客时传入的数据title, content等
  // console.log(data)
  return {
    id: 3
  }
}

const updataBlog = (id , data) => {
  //data里面包含更新后的title,content等
  // console.log(id , data)
  return true
}

const delBlog = (id) => {
  //id是要删除博客的id
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
}