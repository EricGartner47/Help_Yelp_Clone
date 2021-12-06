import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <div className="home-page">
                <div>
                    <h1 className="home-page-logo">Help!</h1>
                </div>
                <form>
                    <input placeholder="Here to help"/>
                    <button className="fas fa-mask" type="submit"/>
                </form>
            </div>
            <div className="footer">
                <ul className="created-by"> Created by Eric Gartner
                    <li>
                        <a href="https://github.com/EricGartner47">Github</a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default HomePage;
