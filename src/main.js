import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home"
import Destination from './pages/Destination';
import Chatbot from "./components/Chatbot/Chatbot"
import fire from "./fire"

const handleLogout = () => {
  fire.auth().signOut();
}

function App() {

  return (
    <Router>
      <Chatbot />
      <Navbar handleLogout={handleLogout} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/destination' exact component={Destination} />
        <Redirect to="/" />
      </Switch>
      <Chatbot />
    </Router>
  );
}

export default App;
