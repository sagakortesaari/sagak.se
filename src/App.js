import styled from "styled-components";
import profilepic from "./me.png";
import { Icon } from "@iconify/react";

import "./App.css";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  user-select: none;
  background-color: ${(props) => (props.darkmode ? "#2c2c2c" : "fff")};
  color: ${(props) => (props.darkmode ? "#fff" : "000")};
  display: flex;
  font-family: "Outfit", sans-serif;
  display: flex;
  justify-content: center;
  text-align: center;
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
  margin-bottom: 40px;

  & img {
    width: 300px;
    height: 300px;
    border-radius: 150px;
  }
`;

const ThemeToggler = styled.div`
  cursor: pointer;
  font-size: 25px;
`;

const Button = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
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
    width: 35px;
    height: 35px;
    fill: ${(props) => (props.darkmode ? "#fff" : "000")};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [darkmode, setDarkmode] = useState(true);
  console.log(darkmode);
  return (
    <>
      <Wrapper darkmode={darkmode}>
        <ContentWrapper>
          <PhotoDiv>
            <img src={profilepic} alt="me" />
          </PhotoDiv>
          <NameDiv>
            {" "}
            <b> Hi there, I'm Saga! 🌟 </b>{" "}
          </NameDiv>
          <DescDiv>
            M.Sc student in Computer Science at Chalmers University of Technology <br />
            Interested in security & programming 
          </DescDiv>
          <ButtonWrapper>
            <Button>
              <ThemeToggler onClick={() => setDarkmode(!darkmode)}>
                {" "}
                {darkmode ? "☀️" : "🌙"}{" "}
              </ThemeToggler>
            </Button>
            <SocialMediaWrapper darkmode={darkmode}>
              <Button>
                <a target="_blank" href="https://github.com/sagakortesaari">
                  <Icon icon="akar-icons:github-fill" />
                </a>
              </Button>
              <Button>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/saga-kortesaari/"
                >
                  <Icon icon="akar-icons:linkedin-fill" />
                </a>
              </Button>
              <Button>
                <a target="_blank" href="mailto:saga@sagak.se">
                  <Icon icon="fluent:mail-16-filled" />
                </a>
              </Button>
            </SocialMediaWrapper>
          </ButtonWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default App;
