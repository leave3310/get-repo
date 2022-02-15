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

    const { oneRepo, error } = useFetchOneUser(repoName as string)

    return (
        <Container>
            <div>{oneRepo?.fullName}</div>
            <div>{isNull(oneRepo?.description)}</div>
            <div>{oneRepo?.starCount}</div>
        </Container>
    )
}

export default UserRepo