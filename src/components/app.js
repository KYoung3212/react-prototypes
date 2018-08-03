import React from 'react';
import { ENETUNREACH } from 'constants';
import ContactList from './contact_list';


export default () => {
    return (
    <div className="container">
        <h1 className="text-center my-3">Address Book</h1>
        <ContactList/>
    </div>
    )
}
