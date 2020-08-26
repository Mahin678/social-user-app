import React, { useEffect ,useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import User from './Component/UserSection/User';
import UserSummary from './Component/UserSummary/UserSummary';


function App() {

  const [user, setUser]=useState([])
    const [cart ,setCart] = useState([])
    const handlePerson = (info) => {
      const newCart = [...cart , info]
      setCart(newCart)
    };
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUser(data.results))
    .catch(error => console.log(error))
  },[])
  const check =  (Math.random()*5000).toFixed(0);
  return (
    <div className="App">
      <Header></Header>
      <div style={{display:"flex"}} >
      <User check={check} user={user} handlePerson={handlePerson} ></User>
      <UserSummary  cart={cart}  ></UserSummary>
   
      </div>
    </div>
  );
}

export default App;
