import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "@redux/store";
import { setName, setHasNextPage, setPage, setList } from "@redux/actions/name"

const Header = () => {
    const name: string = useSelector((state: rootState) => state.name)
    const dispatch = useDispatch()
    const [inputName, setInputName] = useState<string>(name)

    const nameIsValid: boolean = inputName.trim() !== ""

    const handleChange = (event: FormEvent) => {
        event.preventDefault()
        if (!nameIsValid) return
        dispatch(setName(inputName))
        dispatch(setPage(1))
        dispatch(setList([]))
        dispatch(setHasNextPage(true))
    }

    return (
        <Navbar expand="lg" bg="light" className="mb-3">
            <Container>
                <Navbar.Brand as={Link} to="/" className="me-auto">{name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex ms-auto" onSubmit={handleChange}>
                        <FormControl
                            type="search"
                            placeholder="Search Name"
                            className="me-2"
                            aria-label="Search Name"
                            onChange={(e) => setInputName(e.target.value)}
                        />
                        <Button variant="outline-success" type="submit" disabled={!nameIsValid}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header