import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
  constructor() {
    super();

    this.state = {
      showDoneItems: true,
      showActiveItems: true,
   }

    this.onToggleFilter = (done, active) => {
      this.setState(({ showActiveItems: active, showDoneItems: done }));
      this.props.onToggleFilter(done, active);
    }
    
  }
  
  render() {
    const { showActiveItems, showDoneItems } = this.state;
    let allClasses = 'btn btn-info';
    let doneClasses = 'btn btn-outline-secondary'
    let activeClasses = 'btn btn-outline-secondary'
    if (showActiveItems && showDoneItems) {
      allClasses = 'btn btn-info';
      doneClasses = 'btn btn-outline-secondary';
      activeClasses = 'btn btn-outline-secondary';      
    } else {
      if (showActiveItems) {
        allClasses = 'btn btn-outline-secondary';
        doneClasses = 'btn btn-outline-secondary';
        activeClasses = 'btn btn-info';
      } else {
        allClasses = 'btn btn-outline-secondary';
        doneClasses = 'btn btn-info';
        activeClasses = 'btn btn-outline-secondary';
      }
    }
    return (
      <div className="btn-group">
        <button type="button"
          className={allClasses}
          onClick={() => this.onToggleFilter(true, true)}
        >
          All
        </button>
        <button type="button"
          className={activeClasses}
          onClick={() => this.onToggleFilter(false, true)}
        >
          Active
        </button>
        <button type="button"
          className={doneClasses}
          onClick={() => this.onToggleFilter(true, false)}
        >
          Done
        </button>
      </div>
    );
  }
}