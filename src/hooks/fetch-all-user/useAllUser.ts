import { useState } from "react";
import { allUser } from "../../types/allUser";

const useAllUser = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [list, setList] = useState<allUser[]>([])
    const [hasNextPage, setHasNextPage] = useState<boolean>(true)
    const [error, setError] = useState<Error>()
    const [page, setPage] = useState<number>(1)

    const loadMore = async () => {
        setLoading(true)
        try {
            const data = await fetch(`https://api.github.com/users/leave3310/repos?per_page=10&sort=created&page=${page}`, {
                headers: new Headers({
                    'authorization': process.env.REACT_APP_AUTHORIZATION as string,
                })
            })
            const body = await data.json()
            const tmp = body.map((item: any) => {
                const tmp = {
                    name: item.name,
                    stargazers_count: item.stargazers_count
                }
                return tmp
            })
            if (tmp.length === 0) {
                setHasNextPage(false)
            } else {
                setList(current => [...current, ...tmp])
                setPage(page + 1)
                setHasNextPage(true)
            }
        } catch (err: any) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    return { loading, list, hasNextPage, error, loadMore }
}

export default useAllUser