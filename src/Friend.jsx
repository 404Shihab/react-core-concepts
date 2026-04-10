export default function Friend({friend}){
    return(
        <div className="friend">
            <h4>Name: {friend.name} </h4>
            <p>Email: {friend.email}</p>
            <p>Website: {friend.website}</p>
            <p>City: {friend.address.city}</p>
        </div>
    )
}