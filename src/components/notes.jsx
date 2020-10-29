import React, { Component } from 'react';
import '../assets/notes.scss';

export default class NotesList extends Component {
  render() {
    this.properties = this.props;
    return (
      <ul className="notes">
        { this.properties.notes.map((nota, index) => (
          <li className="notes-card" key={index.toString()}>
            <span className="notes-card-title">{nota.title}</span>
            <span className="notes-card-description">{nota.description}</span>
            <span className="notes-card-category">{nota.category}</span>
          </li>
        ))}
      </ul>
    );
  }
}
