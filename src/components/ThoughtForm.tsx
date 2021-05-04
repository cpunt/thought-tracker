import React, { Component } from 'react';
import { db } from '../firebase';
import { UserContext } from '../providers/UserProvider';
import '../css/thoughtForm.css';

class ThoughtForm extends Component <{}, { value: string }> {
  // Properties
  static contextType = UserContext

  // Lifecycle methods
  constructor(props: any) {
     super(props);
     this.state = {
       value: ''
     };

     this.handleChange = this.handleChange.bind(this);
     this.handleCreate = this.handleCreate.bind(this);
     this.handleClear = this.handleClear.bind(this);
   }

   // HTML
   render() {
     return (
       <form className='thoughtForm'>
         <textarea className='thoughtTextarea' value={this.state.value} onChange={this.handleChange} placeholder='Enter Thought' />
         <div>
          <button className='thoughtBtn' onClick={this.handleClear}>Clear</button>
          <button className='thoughtBtn' type='button' onClick={this.handleCreate}>Create</button>
        </div>
       </form>
     );
   }

   // Methods
   handleChange (event: any) {
     this.setState({value: event.target.value});
   }

   handleCreate (event: any) {
     const email = 'christopherpunt5@gmail.com';
     db.collection('users').doc(email).collection('thoughts').add({
       'thought': this.state.value
     }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

    this.handleClear(event);
    event.preventDefault();
   }

   handleClear (event: any) {
     this.setState({value: ''});
     event.preventDefault();
   }
}

export default ThoughtForm;
