import React from 'react';
import './ShowInfo.css'

const ShowInfo = (props) => {
    const {name,salary,email,img} = props.user;
    return (
        <div className="show-info">
            <div>
               <img src={img} alt=""/>
            </div>
            <div className="only-info">
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
                <p>Salary: {salary}</p>
                <button
                onClick={()=>props.clickHandelar(props.user)}
                >Add</button>
            </div>
            
        </div>
    );
};

export default ShowInfo;