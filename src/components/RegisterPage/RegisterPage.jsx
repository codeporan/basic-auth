import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Container,FormButton,FormContent,FormH1,FormInput,FormLabel,Icon,FormWrap, Form,Text} from "./index"

import { userActions } from '../../actions';

function RegisterPage() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {

        setSubmitted(true);
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }
    let { username,password,firstName,lastName} = user;
    return (
<Container>
            <FormWrap>
                <FormContent>
                    <Form>
                        <FormH1>Register</FormH1>
                        <FormLabel htmlFor="for" > UserName</FormLabel>
                        <FormInput type="text" name="username" value={username} onChange={handleChange} />
                        <FormLabel htmlFor="for" > FirstName</FormLabel>
                        <FormInput type="text" name="firstName" value={firstName} onChange={handleChange} />     
                        <FormLabel htmlFor="for" > LastName</FormLabel>

                        <FormInput type="text" name="lastName" value={lastName} onChange={handleChange} />
                        <FormLabel htmlFor="for" > Password</FormLabel>
                        <FormInput type="password" name="password" value={password} onChange={handleChange} />
                        <FormButton bg={true} bottom={true} onClick={() => handleSubmit()}>Submit</FormButton>
                        <FormButton  onClick={()=>history.push("/login")}>Login</FormButton>

                    </Form>
                </FormContent>
               
            </FormWrap>
        </Container>

    );
}

export { RegisterPage };