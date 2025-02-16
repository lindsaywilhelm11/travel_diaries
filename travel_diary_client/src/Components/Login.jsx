import {useState, useEffect} from 'react';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

  }
  
  return (
    <div>
      <h1>Login</h1>
      <p>Please enter your login information</p>
      <form>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder='Password'/>
        <button>Submit</button>
      </form>
    </div>
    
  )
}

export default Login;