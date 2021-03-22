import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import StateProvider from "./context";
import "./app.css";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

const darkTheme = {
  background: "#121212",
  box: "#282828",
  color: "white",
};

const lightTheme = {
  background: "#FFFFFF",
  box: "#D6D6F4",
  color:"#121212"
};

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

const themeEnum = {
  light: "light",
  dark: "dark",
};

const StyledApp = styled.div`
  padding:0;
  margin:0;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.background};
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Div=styled.div`
display:flex;
    align-items:center;
    flex-direction:column;
    min-height:50vh;
    max-height:auto;
    width:50vw;
    overflow:hidden;
    background-color:${props=>props.theme.box};
    padding-top:5%;
    color:${props=>props.theme.color};
    border-radius:30px;
    @media (max-width: 768px) {
      height:80vh;
      width:90vw;
      margin-left:3vw;
      margin-top:10vh;
      padding-top:10%;
    }
`
const App = () => {
  const [theme, setTheme] = useState(themeEnum.dark);
  return (
    <ThemeProvider theme={themes[theme]}>
      <StyledApp>
      <label class="switch">
          <input type="checkbox" onClick={() =>
            setTheme(
              theme === themeEnum.dark ? themeEnum.light : themeEnum.dark
            )
          }/>
          <span class="slider round"></span>
        </label>
        <StateProvider>
          <Div>
            <TodoInput />
            <TodoList />
          </Div>
        </StateProvider>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;

// purple 155 99 246
//black 18 18 18
// light 40 40 40
//0 196 181
