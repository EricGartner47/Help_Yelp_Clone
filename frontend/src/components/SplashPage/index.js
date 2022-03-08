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
                <div>
                    <div>
                        Eric Gartner
                    </div>
                    <div>
                        <a className="gitHub-link-footer-link" href="https://github.com/EricGartner47">Github</a>
                    </div>
                    <div>
                        <a className="linkedIn-link-footer-link"href="https://www.linkedin.com/in/eric-gartner-731907a0/">LinkedIn</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SplashPage;
