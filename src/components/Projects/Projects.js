import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BlogWeb from '../../Assets/Projects/blogWeb.png'
import Palindrome from '../../Assets/Projects/palindrome.png'
import spreadSheet from "../../Assets/Projects/spreadSheet.png";
import cashRegister from '../../Assets/Projects/cashRegister.png'
import shoppingCart from '../../Assets/Projects/shoppingCart.png'
import telePhoneNumberValidator from '../../Assets/Projects/telePhoneNumberValidator.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BlogWeb}
              isBlog={false}
              title="BlogWebApp"
              description="A platform for creating, sharing, and exploring engaging blog content."
              ghLink="https://github.com/Zia-Ur-Rehman087/Blog/tree/master"
              demoLink="https://blogforzia.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Palindrome}
              isBlog={false}
              title="Palindroome Checker"
              description="A Palindrome Checker is a tool that verifies whether a given word, phrase, or sequence of characters reads the same forwards and backwards."
              ghLink="https://github.com/Zia-Ur-Rehman087/Palindrome-checker"
              demoLink="https://palindromechecker-lilac.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spreadSheet}
              isBlog={false}
              title="Spreadsheet"
              description="A spreadsheet is a digital tool used for organizing and manipulating data in a tabular format, commonly used for calculations, analysis, and data management."
              ghLink="https://github.com/Zia-Ur-Rehman087/spreadSheet/tree/master"
              demoLink="spreadsheetsprof.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingCart}
              isBlog={false}
              title="shoppingCart"
              description="A shopping cart is a virtual tool used in online shopping websites to collect selected items for purchase before proceeding to checkout."
              ghLink="https://github.com/Zia-Ur-Rehman087/shoppingCart"
              demoLink="cartport.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cashRegister}
              isBlog={false}
              title="Cash Register"
              description="A cash register is used in retail stores to record sales transactions, calculate totals, and store cash securely."
              ghLink="https://github.com/Zia-Ur-Rehman087/cashRegister"
              demoLink="cashregisterproj.vercel.app" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={telePhoneNumberValidator}
              isBlog={false}
              title="US Telephone Number Validator"
              description="A US Telephone Number Validator is a tool or function that verifies whether a given input conforms to the format and structure of a valid US telephone number."
              ghLink="https://github.com/Zia-Ur-Rehman087/US-telephone-number-validator"
              demoLink="telvalidator.vercel.app"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
