import React from 'react';
import axios from 'axios';

function GetButton (props) {

    async function getRequest(url) {
        let response = await axios.get(url)
        console.log(response)
    }

    return (
        <div className="getButton">
            <button type="button" onClick={() => getRequest(props.url)}>{props.buttonName}</button>
        </div>
    )
}


export default GetButton