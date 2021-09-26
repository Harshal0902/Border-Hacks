import React from "react"
import "./Home.css"
import { Container, Row, Col } from "react-bootstrap";
import HomeImage from "../assets/homeImg.png"

export default function Home() {
    return (
        <div>
            <Container className="Intro">
                <Row>
                    <Col md={8} className="about-description">
                        <h1>Traffic check</h1>
                        <p>Scheduling a trip based on either when you'd like to leave for, or arrive to a desired location, so we came up with an idea of a feature that helps you avoid traffic hell.<br />
                            We are given a public dataset which is useful to get timestamps and traffic rate for that time, our app basically gives the shortest path which will take least average time frame among other routes, to arrive at destination.
                        </p>
                    </Col>

                    <Col md={4} className="img_traffic">
                        <img src={HomeImage} className="img-fluid" alt="Me" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
