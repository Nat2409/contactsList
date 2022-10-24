import { bindActionCreators } from 'redux';
import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContactAction = createAction(
  'action/addContact',
  ({ name, number }) => ({
    payload: {
      contact: {
        id: nanoid(),
        name: name,
        number: number,
      },
    },
  })
);
const removeContactAction = createAction('action/removeContact');
const filterAction = createAction('action/filterContacts');

// const addContactAction = ({ name, number }) => ({
//   type: 'action/addContact',
//   payload: {
//     contact: {
//       id: nanoid(),
//       name: name,
//       number: number,
//     },
//   },
// });
// const removeContactAction = id => ({
//   type: 'action/removeContact',
//   payload: { id },
// });
// const filterAction = text => ({
//   type: 'action/filterContacts',
//   payload: text,
// });

export default {
  addContactAction,
  removeContactAction,
  filterAction,
};
