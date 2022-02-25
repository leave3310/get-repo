import React from "react";
import { useParams } from "react-router-dom";
import useFetchOneUser from "@hooks/fetch-one-user/useFetchOneUser";
import { Container } from "react-bootstrap";

const isNull = (input: any) => {
    return (!input && typeof (input) !== 'undefined' && input !== 0) ? '沒有描述' : input
}

const UserRepo = () => {
    const { repoName } = useParams() as {
        repoName: string
    }

    const { oneRepo, error, loading } = useFetchOneUser(repoName as string)

    return (
        <Container className="h1">
            {loading && (<div className="text-center bg-info py-5">Loading</div>)}
            {
                !!error ? (<div>{error.message}</div>) :
                    (!loading && (
                        <div className="h2">
                            <div className="mb-3">FullName: {oneRepo?.fullName}</div>
                            <div className="mb-3">Description: {isNull(oneRepo?.description)}</div>
                            <div className="mb-3">StarCount: {oneRepo?.starCount}</div>
                        </div>
                    ))
            }


        </Container>
    )
}

export default UserRepo