import React, { useState } from 'react';
import { Container, Row, } from 'reactstrap';
import '../css/tictactoe.css';

const initialArray = ['', '', '', '', '', '', '', '', '']

function TicTacToe() {

    const [state, setstate] = useState(initialArray)

    const setIcon = (index) => {
        let temp1;
        let temp;
        if (state[index] === '') {
            switch (index) {
                case 0:
                    temp = state.slice(1, 9);
                    setstate(['X', ...temp])
                    break
                case 1:
                    temp = state[0];
                    temp1 = state.slice(2, 9);
                    setstate([temp, 'X', ...temp1])
                    break
                case 2:
                    temp = state.slice(0, 2);
                    temp1 = state.slice(3, 9);
                    setstate([...temp, 'X', ...temp1])
                    break
                case 3:
                    temp = state.slice(0, 3);
                    temp1 = state.slice(4, 9);
                    setstate([...temp, 'X', ...temp1])
                    break
                case 4:
                    temp = state.slice(0, 4);
                    temp1 = state.slice(5, 9);
                    setstate([...temp, 'X', ...temp1])
                    break
                case 5:
                    temp = state.slice(0, 5);
                    temp1 = state.slice(6, 9);
                    setstate([...temp, 'X', ...temp1])
                    break
                case 6:
                    temp = state.slice(0, 6);
                    temp1 = state.slice(7, 9);
                    setstate([...temp, 'X', ...temp1])
                    break
                case 7:
                    temp = state.slice(0, 7);
                    temp1 = state.slice(8, 9);
                    setstate([...temp, 'X', ...temp1])
                    break
                case 8:
                    temp = state.slice(0, 8);
                    setstate([...temp, 'X'])
                    break
                default:
                    setstate(state)
                    break
            }
        }
    }

    return (
        <Container className="mt-3" style={{ width: '450px' }}>
            <Row>
                <button className="customButton" onClick={() => setIcon(0)}>{state[0]}</button>
                <button className="customButton" onClick={() => setIcon(1)}>{state[1]}</button>
                <button className="customButton" onClick={() => setIcon(2)}>{state[2]}</button>
            </Row>
            <Row>
                <button className="customButton" onClick={() => setIcon(3)}>{state[3]}</button>
                <button className="customButton" onClick={() => setIcon(4)}>{state[4]}</button>
                <button className="customButton" onClick={() => setIcon(5)}>{state[5]}</button>
            </Row>
            <Row>
                <button className="customButton" onClick={() => setIcon(6)}>{state[6]}</button>
                <button className="customButton" onClick={() => setIcon(7)}>{state[7]}</button>
                <button className="customButton" onClick={() => setIcon(8)}>{state[8]}</button>
            </Row>
        </Container>
    )
}

export default TicTacToe
