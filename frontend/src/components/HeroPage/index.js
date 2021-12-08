import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "./HeroPage.css"

function HeroPage() {

    return(
        <div className="hero-page">
            <h2>Hero's Title</h2>
                <span>Hero's Motto</span>
                <p>Hero's City</p>
                <p>Hero's Powers</p>
                <a>Edit</a>
                <a href={``}>Delete</a>
        </div>
    )

}

export default HeroPage;
