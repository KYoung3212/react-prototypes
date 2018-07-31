import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const userObj = {
    name: 'Kevin',
    luckyNumber: luckyNumber()
}

function luckyNumber(){ 
    var randomNumber = Math.floor(Math.random() * 1000) + 1;
    return randomNumber;
}

function greeting(userObj){
    return <div className = "container">
                <h1>Welcome {userObj.name}</h1>
                <h2 className = "text-muted">The user's lucky number is {userObj.luckyNumber}</h2>
            </div>
}

ReactDOM.render(
    // <h1 className="container">React Prototypes!</h1>,
    // greeting(userObj),
    <App/>,
    document.getElementById('root')
);

