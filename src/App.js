import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './route';
import { Link } from 'react-router-dom';
import Search from './component/Search/Search';
import axios from 'axios';


class App extends Component {

  componentDidMount(){
    axios.get('/api/user-data')
  }
  render() {
    return (
     <div>
       <Search />
          { router }
     </div>
    );
  }
}

export default App;
