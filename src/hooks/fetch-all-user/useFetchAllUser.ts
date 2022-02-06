import { useState } from "react";
import { allUser } from "../../types/allUser";

function fetchAPI<T>(): Promise<T> {
    return fetch('https://api.github.com/users/leave3310/repos')
        .then(function (response) {
            return response.json()
        }).catch(function (err) {
            return err
        });
}

const useFetchAllUser = (): allUser[] => {
    const [users, setUsers] = useState([])
    const data = fetchAPI()
    return users
}
export { }