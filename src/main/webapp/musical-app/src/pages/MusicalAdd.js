import React, { useState } from 'react';
import { Container, Button, Form, Col, Row, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

//let musicalCheckFlag = false;
let emptyFlag = true;

const FontStyle = styled.span`
	color : white;
	font-weight : 700;
	font-family : "Times New Roman"; 
	/* Georgia serif cursive sans-serif monospace fantasy  */
`;

const MusicalAdd = () => {
    const [musical, setMusical] = useState({
        title: "",
        startDate: "",
        endDatae: "",
        age: "",
        price: "",
        content: "",
        user: ""
    });
    /*
        const teamNameDuplicateCheck = (e) => {
            e.preventDefault();
    
            fetch(`http://localhost:8000/check/${team.name}`, {
                method: "GET",
                headers: {
                }
            }).then(res => res.text())
                .then(res => {
                    if (res === "ok") {
                        teamNameCheckFlag = true;
                        alert("사용 가능한 팀 이름  입니다");
                    } else {
                        alert("중복 팀 이름  입니다");
                    }
                });
        }
    */
    const inputHandle = (e) => {
        setMusical({
            ...musical,
            [e.target.name]: e.target.value,
        });
        console.log(musical);
    };

    const joinRequest = (e) => {
        e.preventDefault();
        let musicalInfo = {
            title: musical.title,
            startDate: musical.startDate,
            endDatae: musical.endDatae,
            age: musical.age,
            price: musical.price,
            content: musical.content,
            user: musical.user
        }
        /*
        //빈 값 없음이 이렇게 해도 되나?
        if (team.name === "" || team.explaintation === "") {
            emptyFlag = false;
        }
        */
        if (/*emptyFlag && teamNameCheckFlag*/true) {
            fetch("http://localhost:8000/musical/create", {
                method: "POST",
                body: JSON.stringify(musicalInfo),
                headers: {
                    'Content-Type': "application/json; charset=utf-8",
                    'Authorization': localStorage.getItem("Authorization")
                }
            }).then(res => {
                if (res.text = "ok") return "뮤지컬 등록에 성공하였습니다.";
                else return "뮤지컬 등록에 실패하였습니다.";
            }).then(res => {
                alert(res);
            });
        } else {/*
            if (!emptyFlag) {
                alert("빈 값 있음");
            }
            if (!teamNameCheckFlag) {
                alert("팀 이름 중복확인을 해 주세요");
            }*/
        }
    };

    return (
        /*<input
            type="text"
            name="title"
            placeholder="title"
            onChange={inputHandle}
            value={musical.title}
        />
        <br />
        <input
            type="text"
            name="content"
            placeholder="content"
            onChange={inputHandle}
            value={musical.content}
        />
        <br />
        <input
            type="text"
            name="age"
            placeholder="type location here"
            onChange={inputHandle}
            value={musical.age}
        />
        <Button onClick={joinRequest}>생성하기</Button>
*/
        <Container>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail" onChange={inputHandle} >
                    <Form.Label column sm={1}>
                        <FontStyle>TITLE</FontStyle>
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="email" placeholder="TITLE" name="title" value={musical.title} />
                    </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row} controlId="formHorizontalEmail" onChange={inputHandle} >
                    <Form.Label column sm={1}>
                        <FontStyle>CONTENT</FontStyle>
                    </Form.Label>
                    <Col sm={11}>
                        <Form.Control type="email" placeholder="CONTENT" name="content" value={musical.content} />
                    </Col>
                </Form.Group>
                <br />

                <Form.Group as={Row} controlId="formHorizontalEmail"  >
                    <Form.Label column sm={1}>
                        <FontStyle>AGE</FontStyle>
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control type="email" placeholder="AGE" name="age" value={musical.age} onChange={inputHandle} />
                    </Col>

                    <Form.Label column sm={1}>
                        <FontStyle>RUNTIME</FontStyle>
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control type="email" placeholder="RUNTIME" name="runtime" value={musical.runtime} onChange={inputHandle} />
                    </Col>
                </Form.Group>
                <br />


                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            <FontStyle>PRICE</FontStyle>
                        </Form.Label>
                        <Col sm={10}>
                            <FontStyle>
                                <Form.Check
                                    type="radio"
                                    label="VIP"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            </FontStyle>
                            <FontStyle>
                                <Form.Check
                                    type="radio"
                                    label="R"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            </FontStyle>
                            <FontStyle>
                                <Form.Check
                                    type="radio"
                                    label="S"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            </FontStyle>
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <FontStyle>
                            <Form.Check label="~" />
                        </FontStyle>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">등록하기</Button>
                    </Col>
                </Form.Group>
            </Form>

        </Container>
    );
};

export default MusicalAdd;