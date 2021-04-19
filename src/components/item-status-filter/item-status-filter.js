import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
  
  constructor() {
    super();
    this.buttons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'done', label: 'Done' }
    ];
  }
  
  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = name === filter;
      const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');
      return (
        <button
          type="button"
          key={name}
          onClick={() => onFilterChange(name)}
          className={classNames}>{label}</button>
      )
    })
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}