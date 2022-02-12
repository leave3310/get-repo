import React from "react";
import { ListGroup } from 'react-bootstrap'
import useAllUser from "@hooks/fetch-all-user/useAllUser";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Link } from "react-router-dom";

const UserList = () => {
    const { loading, list, hasNextPage, error, loadMore } = useAllUser()
    const [sentryRef] = useInfiniteScroll({
        loading,
        hasNextPage,
        onLoadMore: loadMore,
        disabled: !!error,
        rootMargin: `0px 0px 200px 0px`
    })

    return (
        <section>
            {list.map((item: any) => (
                <ListGroup key={item.name}>
                    <ListGroup.Item action className="mb-2" as={Link} to="/">
                        {item.name} {item.stargazers_count}
                    </ListGroup.Item>
                </ListGroup>
            ))}
            {(loading || hasNextPage) && (
                <ListGroup ref={sentryRef}>
                    <ListGroup.Item variant="info">
                        Loading...
                    </ListGroup.Item>
                </ListGroup>
            )}
        </section>
    )
}

export default UserList
