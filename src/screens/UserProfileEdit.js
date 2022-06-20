import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonShare from "../components/MaterialButtonShare";
import { Link } from "react-router-dom";

function UserProfileEdit(props) {
  return (
    <Container>
      <Navbar1Stack>
        <Navbar1>
          <BackIcon1Stack>
            <MaterialButtonShare
              iconName="share-variant"
              style={{
                height: 56,
                width: 56,
                position: "absolute",
                left: 0,
                top: 0,
                shadowRadius: 0,
                boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
              }}
              icon="arrow-collapse-left"
            ></MaterialButtonShare>
            <Link to="/UserProfile">
              <BackButton1>
                <ButtonOverlay></ButtonOverlay>
              </BackButton1>
            </Link>
          </BackIcon1Stack>
        </Navbar1>
        <Logo1 src={require("../assets/images/two_aces.png")}></Logo1>
      </Navbar1Stack>
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
const Navbar1 = styled.div`
  top: 5px;
  left: 0px;
  width: 1366px;
  height: 68px;
  position: absolute;
  background-color: rgba(143,66,183,1);
  flex-direction: column;
  display: flex;
`;

const BackButton1 = styled.div`
  top: 0px;
  left: 0px;
  width: 56px;
  height: 56px;
  position: absolute;
  border: none;
`;

const BackIcon1Stack = styled.div`
  width: 56px;
  height: 56px;
  margin-top: 7px;
  margin-left: 22px;
  position: relative;
`;

const Logo1 = styled.img`
  top: 0px;
  left: 640px;
  width: 87px;
  height: 79px;
  position: absolute;
  object-fit: contain;
`;

const Navbar1Stack = styled.div`
  width: 1366px;
  height: 79px;
  margin-top: -5px;
  position: relative;
`;

export default UserProfileEdit;
