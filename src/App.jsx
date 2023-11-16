/* eslint-disable jsx-a11y/img-redundant-alt */
import './App.css';
import Profile from './component/Profile';
import AdminPanel from './component/AdminPanel';
import LoginForm from './component/LoginForm';
import { useState } from 'react';
import ListItems from './component/ListItems';
import ButtonCount from './component/ButtonCount';
import Game from './component/Game';
import ProductTableApp from './component/thinking-in-react/ProductTable';
import YourFirstComponent from './component/YourFirstComponent';
import AddingInteractivity from './component/AddingInteractivity';
import RespondingToEvents from './component/RespondingToEvents';
import ComponentsMemory from './component/ComponentMemory';
import RenderAndCommit from './component/RenderAndCommit';
import StateAsASnapshot from './component/StateAsASnapshot';
import QueueingASeriesOfStateUpdates from './component/QueueingASeriesOfStateUpdates';
import UpdatingObjectsinState from './component/UpdatingObjectsinState';


const Button = () => {

  const handleClick = () => {
    alert('Document Submitted Successfully')
  };

  return (
    <>
      <button type='submit' onClick={handleClick}>Submit</button>
    </>
  )
}


const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <p>Hello there.<br /> How do yo do?</p>
    </>
  )
}



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <h1>Welcome To Paisea</h1>
      <Button />
      <hr />
      <AboutPage />
      <hr />
      <img className="avatar" src="logo192.png" alt="Image Not Found" />
      <hr />
      <Profile />
      <hr />
      <h1>Conditional Rendering</h1>
      {isLoggedIn ? (
        <AdminPanel setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
      <hr />
      <h1>Rendering lists</h1>
      <ListItems />
      <hr />
      <h1>Updating the screen</h1>
      <ButtonCount />
      <ButtonCount />
      <hr />
      <h1>Tic-Tac-Toe</h1>
      <Game />
      <hr />
      <h1>Thinking in React</h1>
      <ProductTableApp />
      <hr />
      <h1>Your First Component</h1>
      <YourFirstComponent />
      <hr />
      <AddingInteractivity />
      <hr />
      <RespondingToEvents />
      <hr />
      <ComponentsMemory />
      <hr />
      <RenderAndCommit />
      <hr />
      <h1>State As a Snapshot</h1>
      <StateAsASnapshot />
      <hr />
      <QueueingASeriesOfStateUpdates />
      <hr />
      <UpdatingObjectsinState />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
