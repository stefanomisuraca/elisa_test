import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

function GetButton (props) {

    async function getRequest(url) {
        let response = await axios.get(url)
        props.dispatch({
            type: "GET_USERS",
            payload: response.data
          });
    }

    return (
        <div className="getButton">
            <button type="button" onClick={() => getRequest(props.url)}>{props.buttonName}</button>
        </div>
    )
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(GetButton)