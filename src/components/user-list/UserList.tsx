import React from "react";
import { ListGroup, Container } from 'react-bootstrap'
import useAllUser from "@hooks/fetch-all-user/useAllUser";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { rootState } from "@redux/store";
import { allUser } from "@interfaces/allUser"


const UserList = () => {
    const { loadMore } = useAllUser()
    const loading: boolean = useSelector((state: rootState) => state.loading)
    const hasNextPage: boolean = useSelector((state: rootState) => state.hasNextPage)
    const error: Error | null = useSelector((state: rootState) => state.error)
    const list: allUser[] = useSelector((state: rootState) => state.list)
    const [sentryRef] = useInfiniteScroll({
        loading,
        hasNextPage,
        onLoadMore: loadMore,
        disabled: !!error,
        rootMargin: `0px 0px 200px 0px`
    })

    return (
        <Container>
            {
                list.map((item: allUser) => (
                    <ListGroup key={item.repoName}>
                        <ListGroup.Item action className="mb-2" as={Link} to={`/repo/${item.repoName}`} >
                            {item.starCount} {item.repoName}
                        </ListGroup.Item>
                    </ListGroup>
                ))
            }
            {hasNextPage && (
                <ListGroup ref={sentryRef}>
                    <ListGroup.Item variant="info">
                        Loading...
                    </ListGroup.Item>
                </ListGroup>
            )}

        </Container >

    )
}

export default UserList
