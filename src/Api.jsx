// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => console.log(data));
// const loadData = async() =>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = res.json;
//     return data;
// }

import { use } from "react";


export default function Api({fetchUser}){
    const user = use(fetchUser);
    console.log(user);
    return(
        <div className="card">
            <h2>User: {user.length}</h2>
        </div>
    )
}