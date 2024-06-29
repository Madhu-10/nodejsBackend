// import { useState } from "react";

const Signup=()=>{
    const registerUser = (e) => {
        console.log(e.target);
        e.preventDefault()
        // const[username, setUsername] = useState(null)
        // const[email, setEmail] = useState(null)
        // const[contact, setContact] = useState(null)
        // const[password, setPassword] = useState(null)
        // const[confirmpassword, setConfirmPassword] = useState(null)
        const user = {
            username: e.target.username.value,
            email : e.target.email.value,
            contact:e.target.contact.value,
            password:e.target.password.value
        }
        if(e.target.password.value === e.target.confirmpassword.value){
            fetch("http://localhost:5000/user/insert",{
                method: "POST",
                headers: {
                    "Accept" : "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            // .then(res => res.json())
            // .then((data)=>{
            //     console.log(data);
            // })
        }
        else{
            alert("Password doesn't matching")
        }
        
        
    }
    return(
        <>
            <form method="POST" onSubmit={(e)=>{registerUser(e)}}>
            <input type="text" name="username" placeholder="Username" /><br />
            {/* onInput={(e)=>{setUsername(e.target.value)}} */}
            <input type="email" name="email" placeholder="email@gmail.com" /><br />
            <input type="text" name="contact" placeholder="9876543210" /><br />
            <input type="password" name="password" placeholder="Password" /><br />
            <input type="password" name="confirmpassword" placeholder="Confirm Password" /><br />
            <input type="submit" value="Submit" />
            {/* <button onClick={registerUser} /> */}
            </form>
        </>
    )
}

export default Signup