import { useSelector, useDispatch } from "react-redux";
import { rootState } from "@redux/store";
import { setLoading, setList, setHasNextPage, setPage, setError } from "@redux/actions/name";
import { allUser } from "@interfaces/allUser";

const useAllUser = () => {
    const page: number = useSelector((state: rootState) => state.page)
    const name: string = useSelector((state: rootState) => state.name)
    const list: allUser[] = useSelector((state: rootState) => state.list)
    const dispatch = useDispatch()

    const loadMore = async () => {
        dispatch(setLoading(true))
        try {
            const data = await fetch(`https://api.github.com/users/${name}/repos?sort=created&per_page=10&page=${page}`, {
                headers: new Headers({
                    'authorization': process.env.REACT_APP_AUTHORIZATION as string,
                })
            })
            const body = await data.json()
            const tmp = body.map((item: any) => {
                const tmp: allUser = {
                    repoName: item.name,
                    starCount: item.stargazers_count
                }
                return tmp
            })

            if (tmp.length === 0) {
                dispatch(setHasNextPage(false))
            } else {
                dispatch(setList([...list,...tmp]))
                const newPage = page+1
                dispatch(setPage(newPage))
            }
        } catch (err: any) {
            dispatch(setError(err))

        } finally {
            dispatch(setLoading(false))
        }
    }

    return { loadMore }
}

export default useAllUser