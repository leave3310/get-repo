import { useState } from "react";
import { allUser } from "../../types/allUser";

const useAllUser = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [list, setList] = useState<allUser[]>([])
    const [hasNextPage, setHasNextPage] = useState<boolean>(true)
    const [error, setError] = useState<Error>()

    const loadMore = async () => {
        setLoading(true)
        try {
            const data = await fetch('https://api.github.com/users/leave3310/repos')
            const body = await data.json()
            const tmp = body.map((item: any) => {
                const tmp = {
                    name: item.name,
                    stargazers_count: item.stargazers_count
                }
                return tmp
            })
            setList(current => [...current, ...tmp])
            setHasNextPage(true)
        } catch (err: any) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    return { loading, list, hasNextPage, error, loadMore }
}

export default useAllUser