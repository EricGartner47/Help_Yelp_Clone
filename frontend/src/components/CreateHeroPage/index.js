import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function CreateHeroPage() {
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return (
        <Redirect to="/login" />
    );

    return (
        <div>
            
        </div>
    )

}

export default CreateHeroPage;
