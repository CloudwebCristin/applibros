import React from 'react';
import Home from "./components/Header";


function App() {
  return (
    
     <Router>
     <div>
       <nav>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/register">Register</Link>
           </li>
           <li>
             <Link to="/login">Login</Link>
           </li>
         </ul>
       </nav>
       <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
