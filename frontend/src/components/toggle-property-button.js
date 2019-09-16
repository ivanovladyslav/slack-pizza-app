import React from 'react';

export default function TogglePropertyButton ({property, togglePropertyFunction, buttonText, toggleMessage}) {
    if(!property) {
        return (
            <button className = "btn btn-secondary" onClick={togglePropertyFunction}> {buttonText}</button>
        )
    } else {
        return (
            <span> {toggleMessage}</span>
        )
    }
}