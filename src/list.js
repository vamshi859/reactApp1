import React from "react";
import './styles.css'
import Item from './item'
import { Link } from "react-router-dom";

const Show = () =>
{
  return (
    <div>
      <div className="blogs">
        <h3 className="text-center heading">Blogs</h3>
        <Link to='/add'><button className="btn btn-primary m-3">Add</button></Link>
      </div>
      <Item />
    </div>
  )
}

export default Show;