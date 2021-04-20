import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';

const Register = () => {

	const [user, setUser] = useState({
        username: ""
	});

	const inputHandle = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

    let idCheckFlag = false;			// id 중복확인 플레그 true : 사용가능
    const idDuplicateCheck = (e) => {
		e.preventDefault();
		fetch(`http://localhost:8000/idCheck/${user.username}`, {
			method: "GET",
			headers: {
			}
		}).then(res => res.text())
			.then(res => {
				if (res === "ok") {
					idCheckFlag = true;
					alert("사용 가능한 아이디  입니다");
				} else {
					alert("중복 아이디 입니다");
				}
			});
	}
    
    return (
        <div>
            <Container>
            <h1>회원가입</h1>

            <form onSubmit={()=>alert(user.username)}>
                
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    placeholder="ID"
                    onChange={inputHandle}
                />
				<button onClick={idDuplicateCheck}>중복확인</button>{' '}
            </form>

			</Container>
        </div>
    );
};

export default Register;