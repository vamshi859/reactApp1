import React,{useRef} from 'react'
import './styles.css'
import {useHistory} from 'react-router-dom';

var blogs = localStorage.getItem('blogs');
if(blogs)
{
  blogs = JSON.parse(localStorage.getItem('blogs'));
}
else
{
  blogs = [];
}
const Add = () =>
{
  const history=useHistory();
  const title=useRef();
  const author=useRef();
  const description=useRef();
  const onSub = (e) =>
  {
    e.preventDefault();
    var blog = {
      title : title.current.value,
      author : author.current.value,
      description : description.current.value,
      date : new Date().toDateString()
    }
    blogs.push(blog);
    localStorage.setItem('blogs',JSON.stringify(blogs));
    console.log(blogs);
    console.log(blog);
    history.push('/posts');
    

  }
  return (
    <div className='container form'>
      <form onSubmit={onSub}>
        <div className='from-group titleAuth'>
          <input type="text" placeholder='Title' id="title" ref={title} />
          <input type="text" placeholder='Author' id="author" ref={author} />
        </div>
        <div className="form-group mt-3">
          <textarea className="form-control" id="" rows="3" ref={description} placeholder='Content'></textarea>
        </div>
        <div className='form-group'>
          <button className='btn btn-primary'>Save post</button>
        </div>
      </form>
    </div>
  )
}

export default Add;