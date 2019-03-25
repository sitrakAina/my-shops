import React, { useState } from 'react';
//import logo from './logo.svg';
import Forme from './Components/Forme'
import Affichage from './Components/Affichage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

var App = () => {
  const usersData = []
  

const [users, setUsers] = useState(usersData)
 const [count, setCount] = useState(0)

  const addUser = user => {
	 	user.id = count
  setUsers([ ...users, user ])
    
   
  }
  
  
  

  return (
    <div className="container body">
      
      <div className="flex-row">
        <div className="flex-large">
          
          <Forme addUser={addUser} setCount={setCount} count={count}/>
        </div>
        <div className="flex-large">
        <Affichage users={users} />
        </div>
      </div>
    </div>
  )
}

export default App