import logo from "./logo.svg";
import styled from "styled-components";
import profilepic from "./me.png";
import { Icon } from "@iconify/react";

import "./App.css";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  background-color: ${(props) => (props.darkmode ? "#2c2c2c" : "fff")};
  color: ${(props) => (props.darkmode ? "#fff" : "000")};
`;

const CenterDiv = styled.div`
  width: 800px;
`;

const NameDiv = styled.div`
  margin-bottom: 15px;
  font-size: 1.5em;
`;

const DescDiv = styled.div`
  margin-bottom: 15px;
  font-size: 1em;
`;

const PhotoDiv = styled.div`
  & img {
    width: 200px;
    height: 200px;
    border-radius: 100px;
  }
`;

const ThemeToggler = styled.div`
  cursor: pointer;
  font-size: 25px;
  margin-left: 20px;
`;

const Button = styled.div`
  width: 30px;
  height: 30px;
`;

const SocialMediaWrapper = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  & a {
    color: inherit;
  }
  & svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => (props.darkmode ? "#fff" : "000")};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [darkmode, setDarkmode] = useState(false);
  console.log(darkmode);
  return (
    <>
      <Wrapper darkmode={darkmode}>
        <PhotoDiv>
          <img src={profilepic} alt="me" />
        </PhotoDiv>
        <ButtonWrapper>
          <SocialMediaWrapper darkmode={darkmode}>
            <Button>
              <a href="https://github.com/sagakortesaari">
                <Icon icon="akar-icons:github-fill" />
              </a>
            </Button>
            <Button>
              <a href="https://www.linkedin.com/in/saga-kortesaari/">
                <Icon icon="akar-icons:linkedin-fill" />
              </a>
            </Button>
            <Button>
              <a href="mailto:saga@sagak.se">
                <Icon icon="fluent:mail-16-filled" />
              </a>
            </Button>
          </SocialMediaWrapper>
          <Button>
            <ThemeToggler onClick={() => setDarkmode(!darkmode)}>
              {" "}
              {darkmode ? "☀️" : "🌙"}{" "}
            </ThemeToggler>
          </Button>
        </ButtonWrapper>
        <CenterDiv>
          <NameDiv>
            {" "}
            <b> Hi there, I'm Saga! ✨ </b>{" "}
          </NameDiv>
          <DescDiv>
            Future software engineer & M.Sc student in Computer Science at
            Chalmers University of Technology.
          </DescDiv>
        </CenterDiv>
      </Wrapper>
    </>
  );
}

export default App;
