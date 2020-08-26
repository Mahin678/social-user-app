import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css';
import UserSummary from '../UserSummary/UserSummary';

const User = (props) => {
    const check = props.user;
   // console.log(check)
    return (
        <div className="userContainer"  >
            <div className="userWrappers" >
                <div className="headerDetails" >
                    <h2>Respond to {check.length}  Users</h2>
                    <p>Click to view more users</p>
                </div>
                {
                    check.map((item , i)=>        
                    <div className="bodyDetails" >
                    <div className="usersImg" >
                        <img src={item.picture.large} alt="Blank_img"/>
                    </div>
                    <div className="usersInfo" >
                    <h4>Users names : { item.name.title + " " +item.name.first+ " " +item.name.last } </h4>
                    <p>Age { item.dob.age }</p>
                    <p>Gender : {item.gender}</p>
                    <p>Email : {item.email}</p>
                    <p>Phon no : {item.phone}</p>
                <p>Salary : {props.check}Usd </p>
                    <button onClick={() => props.handlePerson(item)} ><FontAwesomeIcon icon={faPlus} /> Add User </button>
                    </div>
                </div> 
                    )
             }
            </div>
   
        </div>
    );
};

export default User;