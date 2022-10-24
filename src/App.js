import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import Section from './components/Section';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import { CSSTransition } from 'react-transition-group';

import './components/Tittle.css';
import './components/Filter.css';

const App = () => {
  // const visibleContacts = this.showContacts();
  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        timeout={300}
        classNames="LogoTittle"
        unmountOnExit
      >
        <h2 className="logoTittle">Phonebook</h2>
      </CSSTransition>
      <Section children={<Form />} />
      <Section
        children={
          <>
            {/* {this.state.contacts.length > 1 && ( */}
            <CSSTransition
              // in={this.state.contacts.length > 1}
              in={true}
              timeout={300}
              classNames="Filter"
              unmountOnExit
            >
              <Filter />
            </CSSTransition>
            <Contacts />
          </>
        }
      />
    </>
  );
};

export default App;
