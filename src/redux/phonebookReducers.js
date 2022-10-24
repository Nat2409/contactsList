import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phonebookActions from './phonebookActions';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';

defaults.styling = 'material';
defaults.type = 'error';
defaults.delay = '3000';

const contactsDefault = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const addContact = (state, action) => {
  const ifNameAlreadyExist = state.find(
    contact => contact.name === action.payload.contact.name
  );
  if (ifNameAlreadyExist) {
    alert({
      text: `${action.payload.contact.name} is already in the contacts list.`,
    });
    return state;
  }

  return [...state, action.payload.contact];
};
const removeContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

// const filterContacts = (state, action) => action.payload;

const contacts = createReducer([...contactsDefault], {
  [phonebookActions.addContactAction]: addContact,
  [phonebookActions.removeContactAction]: removeContact,
});

const filter = createReducer('', {
  [phonebookActions.filterAction]: (state, action) => action.payload,
});

// const contacts = (state = [...contactsDefault], action) => {
//   switch (action.type) {
//     case 'action/addContact':
//       const ifNameAlreadyExist = state.find(
//         contact => contact.name === action.payload.contact.name
//       );
//       if (ifNameAlreadyExist) {
//         alert({
//           text: `${action.payload.contact.name} is already in the contacts list.`,
//         });
//         return state;
//       }

//       return [...state, action.payload.contact];
//     case 'action/removeContact':
//       return state.filter(contact => contact.id !== action.payload.id);
//     default:
//       return state;
//   }
// };
// const filter = (state = '', action) => {
//   switch (action.type) {
//     case 'action/filterContacts':
//       return action.payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  contacts,
  filter,
});
