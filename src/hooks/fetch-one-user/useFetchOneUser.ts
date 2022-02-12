import { useEffect, useState } from "react"

interface repo {
    fullName: string
    description: string | null
    starCount: number
}

const useFetchOneUser = (RepoName: string) => {
    const [error, setError] = useState<Error>()
    const [oneRepo, setOneRepo] = useState<repo>()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(`https://api.github.com/repos/leave3310/${RepoName}`)
                const body = await data.json()
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
    }, [])

    return { oneRepo, error }
}

export default useFetchOneUser