import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import { Link } from "react-router-dom";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import MaterialCard12 from "../components/MaterialCard12";
import MaterialCard121 from "../components/MaterialCard121";
import MaterialCard122 from "../components/MaterialCard122";
import MaterialCard123 from "../components/MaterialCard123";
import MaterialCard124 from "../components/MaterialCard124";
import MaterialCard125 from "../components/MaterialCard125";

function HomePageLogout(props) {
  return (
    <Container>
      <NavbarStack>
        <Navbar>
          <SearchBarRow>
            <MaterialSearchBar
              style={{
                height: 56,
                width: 709,
                borderRadius: 25
              }}
            ></MaterialSearchBar>
            <LoginIconStack>
              <MaterialButtonViolet
                style={{
                  height: 36,
                  width: 100,
                  position: "absolute",
                  left: 0,
                  top: 0,
                  borderRadius: 20,
                  shadowRadius: 0,
                  boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
                }}
              ></MaterialButtonViolet>
              <Link to="/LoginScreen">
                <ButtonLoginScreen>
                  <ButtonOverlay></ButtonOverlay>
                </ButtonLoginScreen>
              </Link>
            </LoginIconStack>
            <RegisterIconStack>
              <MaterialButtonViolet1
                style={{
                  height: 36,
                  width: 100,
                  position: "absolute",
                  left: 0,
                  top: 0,
                  shadowRadius: 0,
                  borderRadius: 20,
                  boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
                }}
              ></MaterialButtonViolet1>
              <RegisterButton>
                <ButtonOverlay></ButtonOverlay>
              </RegisterButton>
            </RegisterIconStack>
          </SearchBarRow>
        </Navbar>
        <Logo>
          <Link to="/HomePageLogout">
            <ButtonHome>
              <ButtonOverlay></ButtonOverlay>
            </ButtonHome>
          </Link>
        </Logo>
        <PageName>Aces Clothing Store</PageName>
      </NavbarStack>
      <Product1Row>
        <MaterialCard12
          style={{
            height: 206,
            width: 359,
            borderRadius: 25
          }}
        ></MaterialCard12>
        <MaterialCard121
          style={{
            height: 206,
            width: 359,
            borderRadius: 25,
            marginLeft: 46
          }}
        ></MaterialCard121>
        <MaterialCard122
          style={{
            height: 206,
            width: 359,
            borderRadius: 25,
            marginLeft: 53
          }}
        ></MaterialCard122>
      </Product1Row>
      <Product4Row>
        <MaterialCard123
          style={{
            height: 206,
            width: 359,
            borderRadius: 25
          }}
        ></MaterialCard123>
        <MaterialCard124
          style={{
            height: 206,
            width: 359,
            borderRadius: 25,
            marginLeft: 46
          }}
        ></MaterialCard124>
        <MaterialCard125
          style={{
            height: 206,
            width: 359,
            borderRadius: 25,
            marginLeft: 53
          }}
        ></MaterialCard125>
      </Product4Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(176,159,184,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Navbar = styled.div`
  top: 5px;
  left: 0px;
  width: 1366px;
  height: 68px;
  position: absolute;
  background-color: rgba(143,66,183,1);
  flex-direction: row;
  display: flex;
`;

const ButtonLoginScreen = styled.div`
  top: 0px;
  left: 0px;
  width: 100px;
  height: 36px;
  position: absolute;
  border: none;
`;

const LoginIconStack = styled.div`
  width: 100px;
  height: 36px;
  margin-left: 21px;
  margin-top: 10px;
  position: relative;
`;

const RegisterButton = styled.div`
  top: 0px;
  left: 0px;
  width: 100px;
  height: 36px;
  position: absolute;
  border: none;
`;

const RegisterIconStack = styled.div`
  width: 100px;
  height: 36px;
  margin-left: 17px;
  margin-top: 10px;
  position: relative;
`;

const SearchBarRow = styled.div`
  height: 56px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 17px;
  margin-left: 402px;
  margin-top: 6px;
`;

const Logo = styled.div`
  top: 0px;
  left: 12px;
  width: 87px;
  height: 79px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/two_aces.png")});
  background-size: cover;
`;

const ButtonHome = styled.div`
  width: 55px;
  height: 56px;
  margin-top: 10px;
  margin-left: 14px;
  border: none;
`;

const PageName = styled.span`
  font-family: Clicker Script;
  top: 10px;
  left: 99px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 68px;
  width: 369px;
  font-size: 40px;
`;

const NavbarStack = styled.div`
  width: 1366px;
  height: 79px;
  margin-top: -5px;
  position: relative;
`;

const Product1Row = styled.div`
  height: 206px;
  flex-direction: row;
  display: flex;
  margin-top: 40px;
  margin-left: 99px;
  margin-right: 91px;
`;

const Product4Row = styled.div`
  height: 206px;
  flex-direction: row;
  display: flex;
  margin-top: 64px;
  margin-left: 99px;
  margin-right: 91px;
`;

export default HomePageLogout;
