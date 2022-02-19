import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { rootState } from "@redux/store";

interface repo {
    fullName: string
    description: string | null
    starCount: number
}

const useFetchOneUser = (RepoName: string) => {
    const [error, setError] = useState<Error>()
    const [oneRepo, setOneRepo] = useState<repo>()
    const name: string = useSelector((state: rootState) => state.name)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(`https://api.github.com/repos/${name}/${RepoName}`, {
                    headers: new Headers({
                        'authorization': process.env.REACT_APP_AUTHORIZATION as string,
                    })
                })
                const body = await data.json()
                if (!data.ok) {
                    throw new Error(body.message)
                }
                setOneRepo({
                    fullName: body.full_name,
                    description: body.description,
                    starCount: body.stargazers_count
                })
            } catch (err: any) {
                setError(err)
            }
        }
        fetchData()
    }, [name, RepoName])

    return { oneRepo, error }
}

export default useFetchOneUser