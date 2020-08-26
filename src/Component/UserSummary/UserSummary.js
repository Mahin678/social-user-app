import React from 'react';
import './UserSummary.css'
const UserSummary = (props) => {
    const test = props.cart;
      
    return (
        <div className="summeryContainer" >
            <h1>Users  Summery:</h1>
            <p>Users :{test.length}</p>
           <p>
           { test.map((element ,i) => 
                  <div className="addUser" >
                    <p> { element.name.title + " " +element.name.first+ " " +element.name.last }</p> 
                    <small> User number : {i+1}</small>
                  </div>
              )}
           </p>
        </div>
    );
};

export default UserSummary;