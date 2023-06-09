import logo from "./logo.svg";
import "./App.css";
import useWebSocket from "react-use-websocket";

const socketUrl = "wss://back.localhost/ws";

function App() {
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => sendMessage("Hello Server!")}>
          Send Message
        </button>
      </header>
    </div>
  );
}

export default App;
