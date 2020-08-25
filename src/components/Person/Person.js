import React, { useState } from 'react';
import './Person.css';
import FakePerson from '../../FakePerson';
import ShowInfo from '../ShowInfo/ShowInfo';
import Cart from '../Cart/Cart';

const Person = () => {
  
    const [users, setUsers]= useState(FakePerson);
    const [cart, setCart] = useState([])
    //console.log(users);
    
    const clickHandelar = (user)=>{
       const Newcart =[...cart,user];
       //console.log(Newcart)
       setCart(Newcart);
    }

    return (
        <div className="person">
            
            <div className="person-info">
                
                {
                    users.map(ur=> 
                    <ShowInfo clickHandelar ={clickHandelar} user={ur}></ShowInfo>)
                }   
            </div>

            <div className="cart">
            <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Person;