import { useEffect, useState } from "react"

const Users=()=>{
    const [users, setUSers]=useState(null)
    const deleteUser = (id)=>{
        fetch("http://localhost:5000/user/delete/" + id, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then((data)=>{
            console.log(data);
        })
    }
    useEffect(()=>{
        fetch("http://localhost:5000/user/list")
        .then(
            res => res.json()
        )
        .then((data)=>{
            setUSers(data)
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <>
            <h1>Users List</h1>
            {
                users &&
                <table border='1'>
                    {
                        users.map((e)=>{
                            return <tr>
                                <td style={{padding: "5px"}}>{e.username}</td>
                                <td style={{padding: "5px"}}>{e.email}</td>
                                <td style={{padding: "5px"}}>{e.contact}</td>
                                <td style={{padding: "5px"}}>{e.password}</td>
                                <td style={{padding: "5px"}}><input type="button" value="Delete" onClick={(event)=>{deleteUser(e._id)}} /></td>
                            </tr>
                        })
                    }
                </table>
            }
        </>
    )
}
export default Users