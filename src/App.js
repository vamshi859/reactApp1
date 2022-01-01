import React from "react";
import Show from "./list";
import {Route} from "react-router-dom";
import Add from './add'
import Blog from "./blog";
import Delete from './delete'
const App = () =>
{
  return (
    <div className="container">

        <Route path='/' exact component={Show} />
        <Route path='/add' exact component={Add} />
        <Route path='/post/:postid' exact component={Blog} />
         {/* <Route path='/edit' exact component={} /> */}
        <Route path='/delete/:title' exact component={Delete} />
      

    </div>
  )
}

export default App;
