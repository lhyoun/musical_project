import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import styled from "styled-components";

const LoginPage = () => {
    // vscode-styled-components 스타일 컴포넌트 자동완성 플러그인

    const LoginStyle = styled.h2` // 젤 로그인 글씨 
        text-align:center;   
    `;

    const InputStyle = styled.input` // 아이디, 비밀번호 입력창
        border-bottom: 1px solid #000;
        border-top: 0px;
        border-right: 0px;
        border-left: 0px;
        width:100%; 
    `;

    const DivStyle1 = styled.div` // 파란 테두리
        background-color: #55ffff;
        text-align:center;   
        padding-top:10px;
        height:50px;
        border-radius:10px;
        width:100%; 
    `;

    const DivStyle2 = styled.div` // 아이디, 비밀번호 찾기, 회원가입 글씨
        text-align:center;
        color:black;
    `;

    const DivStyle3 = styled.div` // 파란 테투리 안에 글씨
        text-align:center;
        color:black;
    `;

    const ButtonStyle = styled.button` // 카카오 로그인 버튼
        width:100%;
        border-bottom: 0px;
        border-top: 0px;
        border-right: 0px;
        border-left: 0px;
        opacity: 1;
        background-color:white;
    `;

    const [user, setUser] = useState({
        loginid: "",
        password: "",
    });

    const inputHandle = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

    const loginRequest = () => {
		let person = {
			loginid: user.loginid,
			password: user.password
		}

		fetch("http://localhost:8000/login", {
			method: "POST",
			body: JSON.stringify(person),
			headers: {
				'Content-Type': "application/json; charset=utf-8"
			}
		}).then(res => {
			for (let header of res.headers.entries()) {
				if (header[0] === "authorization") {
					let data = header[1];
					//data = data.substring(7);
					localStorage.setItem("Authorization", data);
					//setToken();
				}
			}
			return res.text();
		}).then(
			res => {
				alert(res);
				//if (res === "ok") handleClose();
			});
	}

    return (
        <div>
            <Container>
                <Row>
                    <LoginStyle>로그인</LoginStyle>
                    <Col md={12}><br/></Col>

                    <Col md={6}><br/>
                        <DivStyle1>
                            <Row>
                                <Col md={4}><DivStyle3>회원</DivStyle3></Col>
                                <Col md={4}><DivStyle3>비회원</DivStyle3></Col>
                                <Col md={4}><DivStyle3>판매자</DivStyle3></Col>
                            </Row>
                        </DivStyle1>
                    </Col>
                    <Col md={6}></Col>
                    
                    <Col md={1}></Col>
                    <Col md={4}>
                        <InputStyle 
                                    name="loginid" 
                                    placeholder="아이디" 
                                    onChange={inputHandle}
									value={user.loginid}></InputStyle>
                    </Col>
                    <Col md={7}></Col>

                    <Col md={1}></Col>
                    <Col md={4}>
                        <InputStyle 
									name="password"
									placeholder="비밀번호"
									onChange={inputHandle}
									value={user.password}></InputStyle>
                    </Col>
                    <Col md={7}></Col>

                    <Col md={1}></Col>
                    <Col md={4}>
                        <input type="checkbox" /> 아이디저장
                    </Col>
                    <Col md={7}></Col>

                    <Col md={6}>
                        <DivStyle1><DivStyle3 onClick={loginRequest}>로그인</DivStyle3></DivStyle1>
                    </Col>
                    <Col md={6}></Col>
                    
                    <Col md={2}>
                        <Link to="/"><DivStyle2>아이디찾기</DivStyle2></Link>
                    </Col>
                    <Col md={2}>
                        <Link to="/"><DivStyle2>비밀번호찾기</DivStyle2></Link>
                    </Col>
                    <Col md={2}>
                        <Link to="/Register"><DivStyle2>회원가입</DivStyle2></Link>
                    </Col>
                    <Col md={6}></Col>

                    <Col md={6}>
                        <ButtonStyle type="button"><img src="kakao.png" alt=""/></ButtonStyle>
                    </Col>
                    <Col md={6}></Col>

                    <Col md={6}>
                        <ButtonStyle type="button"><img src="google.png" alt=""/></ButtonStyle>
                    </Col>
                    <Col md={6}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;