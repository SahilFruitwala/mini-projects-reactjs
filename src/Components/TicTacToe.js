import React, { useState, useEffect } from 'react';
import { Container, Row, Label, Modal, ModalBody, ModalFooter, Button, ModalHeader, } from 'reactstrap';
import '../css/tictactoe.css';

const initialArray = ['', '', '', '', '', '', '', '', '']

function TicTacToe() {

    const [state, setstate] = useState(initialArray)
    const [turn, setTurn] = useState("Player-1")
    const [modal, setModal] = useState(false);
    const [winnerData, setWinner] = useState('');

    const toggle = () => setModal(!modal);

    useEffect(() => {
        console.log('IN EFFECt')
        if (myCounter(state)) {
            winner(state)
        }
    }, [state])

    function myCounter(tempArray) {
        console.log('IN counter')
        let counter = 0;
        tempArray.forEach(element => {
            if (element !== '') {
                counter++;
            }
        });
        if (counter >= 5) {
            return true
        }
        return false
    }

    function winner(tempArray) {
        let flag = '';
        console.log('IN winner')
        if (tempArray[0] === 'X' && tempArray[4] === 'X' && tempArray[8] === 'X') {
            flag = 1
        }
        else if (tempArray[2] === 'X' && tempArray[4] === 'X' && tempArray[6] === 'X') {
            flag = 1
        }
        else if (tempArray[0] === 'X' && tempArray[1] === 'X' && tempArray[2] === 'X') {
            flag = 1
        }
        else if (tempArray[3] === 'X' && tempArray[4] === 'X' && tempArray[5] === 'X') {
            flag = 1
        }
        else if (tempArray[6] === 'X' && tempArray[7] === 'X' && tempArray[8] === 'X') {
            flag = 1
        }
        else if (tempArray[0] === 'X' && tempArray[3] === 'X' && tempArray[6] === 'X') {
            flag = 1
        }
        else if (tempArray[1] === 'X' && tempArray[4] === 'X' && tempArray[7] === 'X') {
            flag = 1
        }
        else if (tempArray[2] === 'X' && tempArray[5] === 'X' && tempArray[8] === 'X') {
            flag = 1
        }
        else if (tempArray[0] === 'O' && tempArray[4] === 'O' && tempArray[8] === 'O') {
            flag = 2
        }
        else if (tempArray[2] === 'O' && tempArray[4] === 'O' && tempArray[6] === 'O') {
            flag = 2
        }
        else if (tempArray[0] === 'O' && tempArray[1] === 'O' && tempArray[2] === 'O') {
            flag = 2
        }
        else if (tempArray[3] === 'O' && tempArray[4] === 'O' && tempArray[5] === 'O') {
            flag = 2
        }
        else if (tempArray[6] === 'O' && tempArray[7] === 'O' && tempArray[8] === 'O') {
            flag = 2
        }
        else if (tempArray[0] === 'O' && tempArray[3] === 'O' && tempArray[6] === 'O') {
            flag = 2
        }
        else if (tempArray[1] === 'O' && tempArray[4] === 'O' && tempArray[7] === 'O') {
            flag = 2
        }
        else if (tempArray[2] === 'O' && tempArray[5] === 'O' && tempArray[8] === 'O') {
            flag = 2
        }
        if (flag === 1) {
            toggle()
            setWinner('Player 1 won the game!')
        }
        else if (flag === 2) {
            toggle()
            setWinner('Player 2 won the game!')
        }
    }

    const setIcon = (index) => {
        let temp1;
        let temp;
        if (state[index] === '') {
            if (turn === 'Player-1') {
                setTurn('Player-2')
            }
            else {
                setTurn('Player-1')
            }
            switch (index) {
                case 0:
                    temp = state.slice(1, 9);
                    setstate([turn === 'Player-1' ? 'X' : 'O', ...temp])
                    if (myCounter(state)) {
                        winner(state);
                    }
                    break
                case 1:
                    temp = state[0];
                    temp1 = state.slice(2, 9);
                    setstate([temp, turn === 'Player-1' ? 'X' : 'O', ...temp1])
                    if (myCounter(state)) {
                        winner(state);
                    }
                    break
                case 2:
                    temp = state.slice(0, 2);
                    temp1 = state.slice(3, 9);
                    setstate([...temp, turn === 'Player-1' ? 'X' : 'O', ...temp1])
                    if (myCounter(state)) {
                        winner(state);
                    }
                    break
                case 3:
                    temp = state.slice(0, 3);
                    temp1 = state.slice(4, 9);
                    setstate([...temp, turn === 'Player-1' ? 'X' : 'O', ...temp1])
                    if (myCounter(state)) {
                        winner(state);
                    }
                    break
                case 4:
                    temp = state.slice(0, 4);
                    temp1 = state.slice(5, 9);
                    setstate([...temp, turn === 'Player-1' ? 'X' : 'O', ...temp1])
                    if (myCounter(state)) {
                        winner(state);
                    }
                    break
                case 5:
                    temp = state.slice(0, 5);
                    temp1 = state.slice(6, 9);
                    setstate([...temp, turn === 'Player-1' ? 'X' : 'O', ...temp1])
                    if (myCounter(state)) {
                        winner(state);
                    }
                    break
                case 6:
                    temp = state.slice(0, 6);
                    temp1 = state.slice(7, 9);
                    setstate([...temp, turn === 'Player-1' ? 'X' : 'O', ...temp1])
                    if (myCounter(state)) {
                        winner(state);
                    }
                    break
                case 7:
                    temp = state.slice(0, 7);
                    temp1 = state.slice(8, 9);
                    setstate([...temp, turn === 'Player-1' ? 'X' : 'O', ...temp1])
                    if (myCounter(state)) {
                        winner(state);
                    }
                    break
                case 8:
                    temp = state.slice(0, 8);
                    setstate([...temp, turn === 'Player-1' ? 'X' : 'O'])
                    if (myCounter(state)) {
                        winner(state);
                    }
                    break
                default:
                    setstate(state)
                    break
            }
        }
    }

    const resetGame = () => {
        toggle()
        setstate(initialArray)
        setTurn('Player-1')
    }

    return (
        <Container className="mt-3" style={{ width: '450px' }}>
            <Label className="customLabel">Turn: {turn}</Label>
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
            <Modal isOpen={modal} toggle={toggle} backdrop={'static'}>
                <ModalHeader>Winner</ModalHeader>
                <ModalBody>
                    {winnerData}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={resetGame}>Restart</Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}

export default TicTacToe
