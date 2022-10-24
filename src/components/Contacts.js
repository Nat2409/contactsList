import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Contacts.css';
import phonebookActions from '../redux/phonebookActions';
import { connect } from 'react-redux';

function Contacts({ contacts, deleteContact }) {
  return (
    <TransitionGroup component="ul" className="Contacts">
      {contacts.map(({ name, id, number }) => (
        <CSSTransition key={id} timeout={250} classNames="Contacts-item">
          <li className="Contacts-item" key={id}>
            <span className="Contacts-name"> {name}</span> {number}
            <button
              className="Contacts-button"
              type="button"
              onClick={() => deleteContact(id)}
            ></button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

const mapStateToProps = state => {
  const { contacts, filter } = state;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return { contacts: visibleContacts };
};
const mapDispatchToProps = {
  deleteContact: phonebookActions.removeContactAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
