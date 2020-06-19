import React from "react";
//import ReactDOM from 'react-dom';
import {
  Navbar,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  HeroFooter,
  Hero,
  HeroBody,
  Container,
  Title
} from "bloomer";
//import './Menubar.css'

export default class Menubar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {

    return (
      <Hero isColor="info" isSize="1/4">
        <HeroBody>
          <Container hasTextAlign="left">
            <Title>Personal Website Testing.</Title>
          </Container>
        </HeroBody>
        <HeroFooter>
          <Navbar
            style={{
              marginLeft: "14%",
              marginRight: "14%"
            }}
          >
            <NavbarMenu isActive="true">
              <NavbarStart>
                <NavbarItem href="./">Home</NavbarItem>
                <NavbarItem href="resume">Resume</NavbarItem>
              </NavbarStart>
              <NavbarEnd>
                
              </NavbarEnd>
            </NavbarMenu>
          </Navbar>
        </HeroFooter>
      </Hero>
    );
  }

 
}
