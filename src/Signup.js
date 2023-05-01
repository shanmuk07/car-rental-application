import { useState } from 'react';
import './Signup.css'
// import { blur } from './images';
export default function Signup() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};


const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
    };

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '' || confirmPassword === '' || password !== confirmPassword) {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>User {name} successfully registered!!</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div className="error" style={{ display: error ? '' : 'none' }}>
{password !== confirmPassword ? <h1>Passwords do not match</h1> : <h1>Please enter all the fields</h1>}
</div>
);
};

return (
    <div className='body1'>
<div className="form" >
<div>
<center><h1 style={{color:'red'}}>User Registration</h1></center>
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}
<label className="label">Name</label>
<input onChange={handleName} className="input"
value={name} type="text" />

<label className="label">Email</label>
<input onChange={handleEmail} className="input"
value={email} type="email" />

<label className="label">Password</label>
<input onChange={handlePassword} className="input"
value={password} type="password" />
<label className="label">Confirm Password</label>
    <input onChange={handleConfirmPassword} className="input" value={confirmPassword} type="password" />


<button onClick={handleSubmit} className="btn" type="submit">
Submit
</button>
</form>
</div>
</div>
);
}