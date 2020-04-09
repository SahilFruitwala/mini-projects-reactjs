import React, { useEffect, useRef, useState } from 'react'

const initialState = {
    numberOne: '',
    numberTwo: '',
    flag: false,
    operation: ''
}

function Calculator() {

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)

    const [number, setNumber] = useState(initialState)

    useEffect(() => {
        inputRef2.current.focus()
    }, [])

    const operation = (type) => {
        if (!number.flag && type !== 'ANS') {
            setNumber({ numberOne: number.numberOne, numberTwo: '', flag: true, operation: type })
        }
        else if (number.flag && type === 'ANS') {
            console.log('HERE', number.operation)
            switch (number.operation) {
                case 'ADD':
                    console.log('HERE TOO')
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

    const setDigit = (digit) => {
        if (number.flag) {
            setNumber({ ...number, numberTwo: number.numberTwo + digit.trim() })
        }
        else {
            if( number.operation !== '' ) {
                setNumber({ ...number, numberOne: digit.trim(), operation: '' })
            }
            else {
                setNumber({ ...number, numberOne: number.numberOne + digit.trim() })
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
