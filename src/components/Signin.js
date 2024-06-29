import { useState } from "react";

const Signin=()=>{
    const submitForm = (e) => {
        e.preventDefault()
        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        fetch("http://localhost:5000/user/login",{
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then((data)=>{
            if(data.userFound) {
                alert("Login Success")
            }
            else{
                alert("Login Failed")
            }
        })
    }
    // const registeredUser = (e) => {
    //     console.log(e.target);
    //     e.preventDefault()
    //     const user = {
    //         username: e.target.username.value,
    //         password:e.target.password.value
    //     }
        
    //     fetch("http://localhost:5000/user/login",{
    //         method: "POST",
    //         headers: {
    //             "Accept" : "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     .then((res)  => res.json())
    //     .then((data) =>{
    //       console.log(data)
    //       if(data.userfound){
    //         console.log("sucsses")
    //         alert("Success")
    //       }else{
    //         console.log("Failed")
    //         alert("Failed")
    //       }
    //     })
    // }
    return(
        <>
            <form method="POST" onSubmit={(e)=>{submitForm(e)}}>
            <input type="text" name="username" placeholder="Username" /><br />
            <input type="password" name="password" placeholder="Password" /><br />
            <input type="submit" value="Submit" />
            </form>
        </>
    )
}
export default Signin