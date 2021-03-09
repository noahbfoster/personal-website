import React from "react";
//import ReactDOM from 'react-dom';
import {
  Navbar,
  NavbarItem,
  NavbarMenu,
  NavbarBrand,
  NavbarBurger,
  NavbarStart,
  NavbarEnd,
  Icon,
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
      <Hero isColor="dark" isSize="1/4">
        <HeroBody>
          <Container hasTextAlign="center">
            <Title>Noah Foster</Title>
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
                
                <NavbarItem href="https://github.com/noahbfoster" target="_blank">
                  My GitHub
                </NavbarItem>
              </NavbarEnd>
            </NavbarMenu>
          </Navbar>
        </HeroFooter>
      </Hero>
    );
  }

 
}
