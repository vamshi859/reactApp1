import React from "react";
import {Link} from 'react-router-dom'
import './styles.css'
// import Blog from "./blog";
const Item = () =>
{
  
  const saved = localStorage.getItem('blogs')
  const val = JSON.parse(saved);
  console.log("dnsfe")
  
  var m=val.map((ele,ind)=>
    {
      // const showBlog = () => 
      // {
      //   alert(ind);
      console.log('Hello');
        
      // }
      return (
        <div>
          <div className="details" key={ind}>
            <h3>{ele.title}</h3>
            <p>{ele.author}&nbsp;&nbsp;&nbsp;{ele.date}<br/><Link to={'/post/'+ind}>More</Link></p>
          </div>
          <p>{ele.description}</p>
        </div>

      )

    });
    return m;
  
}

export default Item;