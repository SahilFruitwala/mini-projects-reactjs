import React, { useEffect, useRef, useState } from 'react'

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

    useEffect(() => {
        inputRef2.current.focus()
    }, [])  // right now of no use

    const setDigit = (digit) => {  // use to append and insert digit into number object 
        if (number.flag) {
            // check if flag is true than set numberTwo of number object
            setNumber({ ...number, numberTwo: number.numberTwo + digit.trim() })
        }
        else {
            // check if flag is false than set numberTwo of number object
            if( number.operation !== '' ) {
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
                        alert('Can not divide by 0!')
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
        <div>
            <input type='text'
                value={number.flag ? number.numberOne : '0'}
                ref={inputRef1} disabled />
            <input type='text'
                value={number.flag ? (number.numberTwo === '' ? '0' : number.numberTwo) : (number.numberOne === '' ? '0' : number.numberOne)}
                ref={inputRef2} disabled />
            <div>
                <button onClick={() => setDigit('1')}>1</button>
                <button onClick={() => setDigit('2')}>2</button>
                <button onClick={() => setDigit('3')}>3</button>
                <button onClick={() => setDigit('4')}>4</button>
                <button onClick={() => setDigit('5')}>5</button>
                <button onClick={() => setDigit('6')}>6</button>
                <button onClick={() => setDigit('7')}>7</button>
                <button onClick={() => setDigit('8')}>8</button>
                <button onClick={() => setDigit('9')}>9</button>
                <button onClick={() => setDigit('0')}>0</button>
                <button onClick={() => operation('ADD')}>+</button>
                <button onClick={() => operation('SUB')}>-</button>
                <button onClick={() => operation('MUL')}>x</button>
                <button onClick={() => operation('DIV')}>/</button>
                <button onClick={() => operation('ANS')}>=</button>
            </div>

        </div>
    )
}

export default Calculator
