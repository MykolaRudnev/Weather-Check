import React from 'react';


const From = props =>(
    <form onSubmit={props.weatherMethod}>
        <input type="text" name = "city" placeholder = "City"/>
        <button>Get Weather</button>
    </form>
);

export default From;