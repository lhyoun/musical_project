import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const LoginPage = () => {
    return (
        <div>
            <Container>
                <h1>로그인</h1>
                <Link to="/Register">회원가입</Link>
            </Container>
        </div>
    );
};

export default LoginPage;