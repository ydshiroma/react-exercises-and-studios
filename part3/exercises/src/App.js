import logo from './logo.svg';
import './App.css';
import HobbyIntroduction from "./components/Introduction";
import Openings from "./components/Openings";

function App() {
  return (
    <div>
      <h1>My Hobby: Chess</h1>
      <HobbyIntroduction />
      <Openings />
    </div>
  );
}

export default App;
