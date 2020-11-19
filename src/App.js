import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Profile from './component/Profile/Profile';
import Dialogs from './component/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';




const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
             dispatch={props.dispatch}
             />} />
          <Route path='/dialogs' render={() => <Dialogs store={props.store}  />} />
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
