import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return(
    <article className="teacher-item">
          <header>
            <img src="https://pbs.twimg.com/media/EOBKc-3XUAMiAl-?format=jpg&name=small" alt="Caio Martins" />
            <div>
              <strong>Caio Martins</strong>
              <span>Química</span>
            </div>
          </header>
          <p>
            Officia aliquip id laboris est laborum adipisicing occaecat qui cupidatat proident elit.<br /><br/> Ad ullamco in sunt cupidatat duis. Commodo id labore id dolore. Sunt non ea labore amet esse eiusmod laboris. Non nulla aliquip pariatur esse anim id dolore do eu culpa velit proident voluptate occaecat.
              </p>

          <footer>
            <p>
              Preço/hora
              <strong>
                R$ 50,00
              </strong>
            </p>
            <button type="button">
              <img src={wppIcon} alt="wpp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;