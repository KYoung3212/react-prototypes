import React from 'react';
import React, { Component } from 'react';

export default props => {
    
    return <h1>Full Name: {props.firstName} {props.lastName}</h1>
}

class ContactList extends Component {
    render(){
        return <h1>Contact List</h1>
    }
}

export default ContactList;
