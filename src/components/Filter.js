import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Filter.css';

import { connect } from 'react-redux';
import phonebookReducers from '../redux/phonebookReducers';
import phonebookActions from '../redux/phonebookActions';

function Filter({ value, searchContact }) {
  return (
    <div className="Filter">
      <label>
        Find contact by name <br />
        <input
          className="Filter-input"
          type="text"
          value={value}
          onChange={e => searchContact(e.target.value)}
        />
      </label>
    </div>
  );
}
const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = {
  searchContact: phonebookActions.filterAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
