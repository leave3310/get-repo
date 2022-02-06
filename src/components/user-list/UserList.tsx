import React from "react";
import { allUser } from '@interfaces/allUser'

async function fetchAPI(): Promise<any> {
    try {
        const res = await fetch('https://api.github.com/users/leave3310/repos')
        // aaabcccddd not found
        return res.json()
    } catch (err) {
        return err
    }


}
const UserList = () => {
    return (<div>
        AA <br />
    </div>)
}

export default UserList
