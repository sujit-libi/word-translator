import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    textToTranslate:'',
    language:'en',
    translatedText:''
  }

  handleChange = (event) => {
    // console.log(event.target.name)
    if(event.target.name === 'word')
    this.setState({textToTranslate: event.target.value})
    if(event.target.name === 'language')
    this.setState({language: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    var textToTranslate = this.state.textToTranslate;
    var language = this.state.language;
    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180426T152303Z.4ddb6945c6cc830e.e6deca488146797918981537e7982e97efaf541a&lang=${language}&text=${textToTranslate}`)
    .then(response => response.json())
    .then(data => this.setState({translatedText: data.text[0]}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Word Translator Using ReactJS and Yandex API</h1>
        </header>
        <hr />
        <div>
          <form onSubmit={this.handleSubmit}>
          <input type="text" name="word" onChange={this.handleChange}/>
          <select name="language" value={this.state.value} onChange={this.handleChange} >
            <option value='es'>Spanish</option>
            <option value='ne'>Nepali</option>
            <option value='ru'>Russian</option>
          </select>
          <button>Translate</button>
          </form>
        </div>
        <hr />
        <div>{this.state.translatedText}</div>
      </div>
    );
  }
}

export default App;
