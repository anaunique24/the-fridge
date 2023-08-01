import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import CalendarCard from "../components/calendarCard";
import Bulletin from "../components/Bulletin";
import Sidebar from "../components/Sidebar";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import Notepad from "../components/Notepad";
import UrgentPosts from "../components/UrgentPosts";
// import Container from 'react-bootstrap/Container';

import { Container, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    // <section id="homeSection">
      // <Container>
      <>
      <Row>
        <NavbarComponent />
      </Row>
        <Row >

        {/* Column 1 */}
          <Col className="col-12 col-lg-2"  
          // style={{ width: "10%", height: "100%" }}
          >
            <Sidebar />
          </Col>

          {/* Column 2 */}
          <Col className="col-12 col-lg-8"
          // xs={8}
          >
            <Row>
              <Col>
                <CalendarCard />
              </Col>
              <Col>
                <Bulletin />
              </Col>
            </Row>
            <Row>
              <Col>
                <Notepad />
              </Col>
              <Col>
                <UrgentPosts />
              </Col>
            </Row>
          </Col>

          {/* Column 3 */}
          <Col className="col-12 col-lg-2"
          ></Col>
        </Row>
        </>
      // </Container>
    // </section>
  );
};

export default Home;
