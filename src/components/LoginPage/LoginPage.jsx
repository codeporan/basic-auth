import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Container,FormButton,FormContent,FormH1,FormInput,FormLabel,Icon,FormWrap, Form,Text} from "./index"
import { userActions } from '../../actions';

function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit() {

        setSubmitted(true);
        if (username && password) 
        {            const { from } = location.state || { from: { pathname: "/" } };
            dispatch(userActions.login(username, password, from));
        }
    }
    let history= useHistory()

    return (
        <Container>
            <FormWrap>
                <FormContent>
                    <Form>
                        <FormH1>Sign In</FormH1>
                        <FormLabel htmlFor="for" > Email</FormLabel>
                        <FormInput type="text" name="username" value={username} onChange={handleChange} />
                        <FormLabel htmlFor="for" > Password</FormLabel>
                        <FormInput type="password" name="password" value={password} onChange={handleChange} />
                        <FormButton bg={true} bottom={true} onClick={()=>handleSubmit()}>Submit</FormButton>
                        <FormButton bg={false} onClick={()=>history.push("/register")}>Register</FormButton>
                    </Form>
                </FormContent>
               
            </FormWrap>
        </Container>
    );
}

export { LoginPage };