import {useState, useEffect} from 'react';
import Navigation from './Navigation';

const Register = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
 
   const handleLogin = (e) => {
     e.preventDefault();
   }
   
   return (
     <div>
      <Navigation />
       <h1>Register</h1>
       <p>Please enter a valid email and password</p>
       <form>
         <input type="email" placeholder="Email Address" />
         <input type="password" placeholder='Password'/>
         <input type='password' placeholder='Please Confirm Your Password'/>
         <button>Submit</button>
       </form>
     </div>
     
   )
 }

export default Register