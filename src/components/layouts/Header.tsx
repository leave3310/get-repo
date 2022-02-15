import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "@redux/store";
import { changeName } from "@redux/actions/name";



const Header = () => {
    const name: string = useSelector((state: rootState) => state.name)
    const dispatch = useDispatch()
    const [inputName, setInputName] = useState(name)

    return (
        <Navbar expand="lg" bg="light" className="mb-3">
            <Container>
                <Navbar.Brand as={Link} to="/" className="me-auto">{name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex ms-auto">
                        <FormControl
                            type="search"
                            placeholder="Search Name"
                            className="me-2"
                            aria-label="Search Name"
                            onChange={(e) => setInputName(e.target.value)}
                        />
                        <Button variant="outline-success" type="button" onClick={() => dispatch(changeName(inputName))}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header