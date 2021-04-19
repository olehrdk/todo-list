import React from 'react';
import './search-panel.css'

export default class SearchPanel extends React.Component {
   constructor() {
      super();

      this.state = {
         term: '',
      }

      this.onSearchPanelChange = (e) => {
         const term = e.target.value;
         this.setState({ term });
         this.props.onSearchPanelChange(term);
      }
   }
   render() {
      return (
         <input
            type="text"
            className="form-control search-input"
            placeholder="search"
            onChange={this.onSearchPanelChange}
            value={this.state.term}
         />
      )
   }   
}
 