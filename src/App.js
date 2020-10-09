import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import SocialCard from './Social-Card/Social-Card';

class App extends Component {
    state = { 
      person: [{"name": "Akhilesh", "age": 29},
               {"name": "Arushi", "age": 29},
               {"name": "Nikhil", "age": 25}]
    };
    nameChangeHandler = (newName) => {
      this.setState({
        person: [{"name": newName, "age": 29},
                {"name": newName, "age": 29},
                {"name": newName, "age": 25}]
      });
    }
    nameChangedFn = (event) => {
      this.setState({
        person: [{"name": "Akhil", "age": 29},
                {"name": event.target.value, "age": 29},
                {"name": "Nikhil", "age": 25}]
      });      
    }
    render() {
      const style = {
        border: '1px solid blue'
      }
      return(
        <div className="App">
          <SocialCard></SocialCard>
        </div>
      )
    }

}

export default App;