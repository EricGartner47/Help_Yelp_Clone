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
            <div id='splash-super-content-container'>
                <div id='splash-page-content-container'>
                    <h1 id='splash-page-header'>
                        Recently rescued?
                        <br></br>
                        Leave your review on Help!
                    </h1>
                    <p id='splash-page-copy'>
                        Help is the fastest and easiest way to search for your favorite heroes. Log in or Sign Up now to get started.
                    </p>
                    <ul id='features-container'>
                        <li>
                            Write reviews
                        </li>
                        <li>
                            Read reviews
                        </li>
                        <li>
                            View average rating
                        </li>
                    </ul>
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
