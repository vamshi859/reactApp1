import React from "react";
import { useParams,useHistory } from "react-router-dom";

const Delete = () =>
{
  const history = useHistory();
 const params = useParams();
 var saved = localStorage.getItem('blogs');
 var val = JSON.parse(saved).filter(ele => {
   return ele.title !== params.title
 });
 console.log(val);
 localStorage.setItem('blogs',JSON.stringify(val))
 history.push('/posts');

}

export default Delete;
