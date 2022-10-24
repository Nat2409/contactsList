import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './form.css';
import { connect } from 'react-redux';
import phonebookReducers from '../redux/phonebookReducers';
import phonebookActions from '../redux/phonebookActions';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  inputHandler = e => {
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className="form">
        <label>
          Name <br />
          <input
            className="form-input"
            onChange={this.inputHandler}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <br />
          <input
            className="form-input"
            onChange={this.inputHandler}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button
          className="form-input form-input--bg-color"
          type="submit"
          onClick={this.submitHandler}
        >
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddContact: phonebookActions.addContactAction,
};
export default connect(null, mapDispatchToProps)(Form);
