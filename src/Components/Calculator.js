import React, { useEffect, useRef, useState } from 'react';
import { Container, Toast, ToastBody, ToastHeader, Row, Col, Button, Input } from 'reactstrap';
// import { ListGroup, ListGroupItem     } from 'reactstrap';
import '../css/calculator.css';

const initialState = {

    // number object initialization

    numberOne: '', // number of 1st text input
    numberTwo: '', // number of 2nd text input
    flag: false, // Set to true if any oprator is clicked
    operation: '' // get data of operation
}

function Calculator() {

    const inputRef1 = useRef(null) // ref to 1st input
    const inputRef2 = useRef(null) // ref to 2nd input

    const [number, setNumber] = useState(initialState) // state to change number object
    const [show, setShow] = useState(false) // to display toast

    useEffect(() => {
        inputRef2.current.focus()
    }, [])  // right now of no use

    const toggle = () => setShow(!show);

    const setDigit = (digit) => {  // use to append and insert digit into number object 
        if (number.flag) {
            // check if flag is true than set numberTwo of number object
            setNumber({ ...number, numberTwo: number.numberTwo + digit.trim() })
        }
        else {
            // check if flag is false than set numberTwo of number object
            if (number.operation !== '') {
                // if operator is empty then assign as new into numberOne of number object
                setNumber({ ...number, numberOne: digit.trim(), operation: '' })
            }
            else {
                // if operator is not empty then append it into numberOne of number object
                setNumber({ ...number, numberOne: number.numberOne + digit.trim() })
            }
        }
    }

    const operation = (type) => {
        // Do calculation or assign operator
        if (!number.flag && type !== 'ANS') {
            // assign all digit to numberOne, empty numberTwo, set flag to true and finally set operator
            setNumber({ numberOne: number.numberOne, numberTwo: '', flag: true, operation: type })
        }
        else if (number.flag && type === 'ANS') {
            // assign all digit to numberOne, empty numberTwo, set flag to true and finally set operator
            switch (number.operation) {
                case 'ADD':
                    setNumber({ numberOne: parseFloat(number.numberOne) + parseFloat(number.numberTwo), numberTwo: '', flag: false })
                    break
                case 'SUB':
                    setNumber({ numberOne: parseFloat(number.numberOne) - parseFloat(number.numberTwo), numberTwo: '', flag: false })
                    break
                case 'MUL':
                    setNumber({ numberOne: parseFloat(number.numberOne) * parseFloat(number.numberTwo), numberTwo: '', flag: false })
                    break
                case 'DIV':
                    if (parseFloat(number.numberTwo) === 0) {
                        setShow(!show);
                        break
                    }
                    setNumber({ numberOne: parseFloat(number.numberOne) / parseFloat(number.numberTwo), numberTwo: '', flag: false })
                    break
                default:
                    setNumber(number)
                    break
            }
        }
    }

    return (
        <Container className="myContainer mt-3 p-3" fluid="sm">
            <Input type="text"
                value={number.flag ? number.numberOne : '0'}
                ref={inputRef1}
                style={{ textAlign: "right" }}
                disabled />
            <Input type="text"
                value={number.flag ? (number.numberTwo === '' ? '0' : number.numberTwo) : (number.numberOne === '' ? '0' : number.numberOne)}
                ref={inputRef2}
                style={{ textAlign: "right" }}
                disabled />

            <Toast isOpen={show}>
                <ToastHeader icon="danger" toggle={toggle}> Error </ToastHeader>
                <ToastBody> Division by zero not possible! </ToastBody>
            </Toast>

            <Row xs="4" className="mt-3">
                <Col><Button onClick={() => setDigit('1')} color="primary" className={"btn-block"}>1</Button></Col>
                <Col><Button onClick={() => setDigit('2')} color="primary" className={"btn-block"} >2</Button></Col>
                <Col><Button onClick={() => setDigit('3')} color="primary" className={"btn-block"} >3</Button></Col>
                <Col><Button onClick={() => operation('ADD')} color="warning" className={"btn-block"} >+</Button></Col>
            </Row>
            <Row xs="4" className="mt-3">
                <Col><Button onClick={() => setDigit('4')} color="primary" className={"btn-block"} >4</Button></Col>
                <Col><Button onClick={() => setDigit('5')} color="primary" className={"btn-block"} >5</Button></Col>
                <Col><Button onClick={() => setDigit('6')} color="primary" className={"btn-block"} >6</Button></Col>
                <Col><Button onClick={() => operation('SUB')} color="warning" className={"btn-block"} >-</Button></Col>
            </Row>
            <Row xs="4" className="mt-3">
                <Col><Button onClick={() => setDigit('7')} color="primary" className={"btn-block"} >7</Button></Col>
                <Col><Button onClick={() => setDigit('8')} color="primary" className={"btn-block"} >8</Button></Col>
                <Col><Button onClick={() => setDigit('9')} color="primary" className={"btn-block"} >9</Button></Col>
                <Col><Button onClick={() => operation('MUL')} color="warning" className={"btn-block"} >x</Button></Col>
            </Row>
            <Row xs="4" className="mt-3">
                <Col><Button onClick={() => setDigit('.')} color="primary" className={"btn-block"}>.</Button></Col>
                <Col><Button onClick={() => setDigit('0')} color="primary" className={"btn-block"} >0</Button></Col>
                <Col><Button onClick={() => operation('ANS')} color="success" className={"btn-block"}>=</Button></Col>
                <Col><Button onClick={() => operation('DIV')} color="warning" className={"btn-block"}>/</Button></Col>
            </Row>
            {/* <ListGroup>
                <ListGroupItem>
                    <ListGroup horizontal>
                        <ListGroupItem><Button onClick={() => setDigit('1')}>1</Button></ListGroupItem>
                        <ListGroupItem><Button onClick={() => setDigit('2')}>2</Button></ListGroupItem>
                        <ListGroupItem><Button onClick={() => setDigit('3')}>3</Button></ListGroupItem>
                        <ListGroupItem><Button onClick={() => operation('ADD')}>+</Button></ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroup horizontal>
                        <ListGroupItem><Button onClick={() => setDigit('4')}>4</Button></ListGroupItem>
                        <ListGroupItem><Button onClick={() => setDigit('5')}>5</Button></ListGroupItem>
                        <ListGroupItem><Button onClick={() => setDigit('6')}>6</Button></ListGroupItem>
                        <ListGroupItem><Button onClick={() => operation('SUB')}>-</Button></ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroup horizontal>
                        <ListGroupItem><Button onClick={() => setDigit('7')}>7</Button></ListGroupItem>
                        <ListGroupItem><Button onClick={() => setDigit('8')}>8</Button></ListGroupItem>
                        <ListGroupItem><Button onClick={() => setDigit('9')}>9</Button></ListGroupItem>
                        <ListGroupItem><Button onClick={() => operation('MUL')}>x</Button></ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroup horizontal>
                        <ListGroupItem><Button onClick={() => setDigit('.')}>.</Button></ListGroupItem>
                        <ListGroupItem><Button onClick={() => setDigit('0')}>0</Button></ListGroupItem>
                        <ListGroupItem><Button onClick={() => operation('ANS')}>=</Button></ListGroupItem>
                        <ListGroupItem><Button onClick={() => operation('DIV')}>/</Button></ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
            </ListGroup> */}
        </Container>
    )
}

export default Calculator
