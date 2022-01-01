import React from 'react'
import './styles.css';
import { useParams,Link } from 'react-router-dom';

// onShow = (term) =>
// {
//   console.log(term);
// }

const Blog = () =>
{
  const params=useParams();
  console.log(params.postid);
  var saved = localStorage.getItem('blogs')
  var val = JSON.parse(saved)
  console.log(val[params.postid]);
  var index = params.postid;
  return (
    <div className='container border border-secondary mt-4'>
      <div className="details" key={index}>
        <h3>{val[index].title}</h3>
        <p>{val[index].author}&nbsp;&nbsp;&nbsp;{val[index].date}<br/></p>
      </div>
      <div className='details'>
        <p>{val[index].description}</p>   
        <Link to={'/delete/'+val[index].title}><button className='btn btn-danger'>Delete</button></Link>
      </div>
    </div>
  )
}
export default Blog