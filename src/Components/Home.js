import React from 'react'
import { Container, Media, Fade } from 'reactstrap'
import '../css/home.css'
import calculator from '../assets/images/calculator.png'
import tictactoe from '../assets/images/tictactoe.png'

function Home() {
    return (
        <React.Fragment>
            <Container className='firstDiv' fluid={true}>
                <Media>
                    <Media left >
                        <Fade out={true}>
                            <img src={calculator} alt="Generic placeholder" height="250" width="250" />
                        </Fade>
                    </Media>
                    <Media body className="customText1">
                        <Media heading>
                            Calculator
                        </Media>
                            This calcluator has some basic arithmetic operations. It is created for learning purpose only. Learning ReactJs and reactstrap was main purpose of this project. Toast, Button, Input components of reactstrap were used in this application.
                    </Media>
                </Media>
            </Container>
            <Container className='secondDiv' fluid={true}>
                <Media>
                    <Media body className="customText2">
                        <Media heading>
                            Tic-Tac-Toe
                        </Media>
                            Tic-Tac-Toe was also made for learning purpose as calculator. Many components of reactstrap such as Modal, Row, Col, container wasused in this application.
                    </Media>
                    <Media right >
                        <Fade out={true}>
                            <img src={tictactoe} alt="Generic placeholder" height="250" width="250" />
                        </Fade>
                    </Media>
                </Media>
            </Container>
        </React.Fragment>
    )
}

export default Home
