import React from 'react';

export const Form = () => (
  <form>
    <input type="text" placeholder="Título" />
    <textarea placeholder="Escreva sua nota..." />
    <input type="text" placeholder="Digite uma categoria" />
    <button type="submit">Criar nota</button>
  </form>
);

export default Form;
