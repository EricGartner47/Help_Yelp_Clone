import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import './SplashPage.css'

const SplashPage = () => {
    const user = useSelector(state => state.session.user)

    if(user) {
        return (
            <Redirect to='/app' />
        )
    }

    return (
        <>
            <div>
                <div>
                    <h1>Welcome to Help!</h1>
                    <h2>A place to create reviews of your favorite heroes</h2>
                </div>
            </div>
            <div>
                <div id='about-section'>
                    <div id="about-wrapper">
                        <div id='arrange'>
                            <div id='column-one'>
                                <div id='name'>
                                    Eric Gartner
                                </div>
                                <ul id='about-section-list'>
                                    <li>
                                        <a className="gitHub-link-footer-link" href="https://github.com/EricGartner47">Github</a>
                                    </li>
                                    <li>
                                        <a className="linkedIn-link-footer-link"href="https://www.linkedin.com/in/eric-gartner-731907a0/">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SplashPage;
