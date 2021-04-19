import React from 'react';
import './add-item.css'

export default class AddItem extends React.Component {
   constructor() {
      super();

      this.state = {
         label: ''
      };
      this.onLabelChange = (e) => {
         this.setState({
            label: e.target.value
         })
      }
      this.onSubmit = (e) => {
         e.preventDefault();
         this.props.onAdded(this.state.label);
         this.setState({
            label: ''
         })
      }
   }
   render() {
      return (
         <form className="add-item-form d-flex"
            onSubmit={this.onSubmit}>
            <input type="text"
               className="add-input form-control"
               onChange={this.onLabelChange}
               placeholder="What to do ?"
               value={this.state.label}
            />
            <button className="btn btn-outline-secondary">
               Add
            </button>
         </form>         
      )
   }
   
}