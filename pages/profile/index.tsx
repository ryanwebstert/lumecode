
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";



function Profile() {

    const { user, signOut } = useContext(AuthContext);

    useEffect(() => {
        console.log(user)
    })
    return (
        <main>
            <h1>
            Profile
            </h1>
            <h1>
                {user?.email}
            </h1>
            <button onClick={() => {
                signOut()
            }}>
            deslogar
            </button>
        </main>
        
    )
}

export default Profile;