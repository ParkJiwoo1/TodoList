import "./App.css";
import Template from "./Template";
import Head from "./Head";
import List from "./component/List";
import Add from "./component/Add";
import { createGlobalStyle } from "styled-components";
import { TodoProvider } from "./component/Context";

const GlobalStyle = createGlobalStyle`
 body{
  background: #e9ecef;

 }`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Template>
        <Head />
        <List />
        <Add />
      </Template>
    </TodoProvider>
  );
}

export default App;
