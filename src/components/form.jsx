import React, { Component } from 'react';
import '../assets/form.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.title = '';
    this.description = '';
    this.category = '';

    this.properties = this.props;
  }

  handleTitleChange(event) {
    this.title = event.target.value;
  }

  handleDescriptionChange(event) {
    this.description = event.target.value;
  }

  handleCategoryChange(event) {
    this.category = event.target.value;
  }

  addNote(event) {
    event.preventDefault();
    this.properties.addNote(this.title, this.description, this.category);
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={this.addNote.bind(this)}
      >
        <input type="text" placeholder="Título" onChange={this.handleTitleChange.bind(this)} />
        <textarea placeholder="Escreva sua nota..." rows={10} onChange={this.handleDescriptionChange.bind(this)} />
        <input type="text" placeholder="Digite uma categoria" onChange={this.handleCategoryChange.bind(this)} />
        <button type="submit">Criar nota</button>
      </form>
    );
  }
}
