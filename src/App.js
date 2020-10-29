import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/App.scss';
import Form from './components/form';
import NotesList from './components/notes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [{
        title: 'title',
        description: 'description',
        category: 'category',
      }],
    };

    this.addNote = this.addNote.bind(this);
  }

  addNote(title, description, category) {
    const newNote = {
      title,
      description,
      category,
    };
    const { notes } = this.state;
    const newNotesList = [...notes, newNote];
    this.setState({ notes: newNotesList });
  }

  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <div className="App-notes">
          <Form addNote={this.addNote} />
          <hr className="add-separator" />
          <NotesList notes={notes} />
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
