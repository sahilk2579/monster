import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import {CardList}  from './components/card-list/card-list-component'

import {SearchBox}  from './components/search-box/search-box.component'


  
 



class App extends Component {

  constructor(){

    super();

      this.state={
        monsters: [],
        searchfield : []
      }

    }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users').
    then(response => response.json()).
    then(jsonres =>  this.setState({ monsters:jsonres }))
     
  }

  handlechange = (e) =>  {
    this.setState({ searchfield:e.target.value} )
  } 


  render() {

 // destructing  //
  const { monsters , searchfield  } = this.state;

  const filteredmonst = monsters.filter (monsternew => 
    monsternew.name.toLowerCase().includes(searchfield.toString().toLowerCase()))


  return (
    <div className="App">
    <br/><br/><br/>
      
        <br/><br/><br/>
        { /*<CardList monsters={this.state.monsters}/> */} 


        <SearchBox placeholder="Search monster"
        handlechange={this.handlechange} />
 
        <CardList monsters={filteredmonst}/>
 
        
    </div>
  );

  }
}

export default App;
