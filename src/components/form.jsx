import React from 'react';
import '../assets/form.scss';

export const Form = () => (
  <div className="add">
    <form className="add-form">
      <input type="text" placeholder="Título" />
      <textarea placeholder="Escreva sua nota..." />
      <input type="text" placeholder="Digite uma categoria" />
      <button type="submit">Criar nota</button>
    </form>
    <hr className="add-separator" />
  </div>
);

export default Form;
