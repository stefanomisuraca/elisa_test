import React from 'react';
import GetButton from '../RequestButton/GetButton';
import { connect } from 'react-redux';


function UsersPage (props) {

    let users = props.users || [];
    console.log(users);

    return (

        <div className="UsersPageDiv">
            <GetButton buttonName="Get Users" url="/users"/>
            {users.map((value, index) => {
                return <p key={index}>{value.name}, {value.surname}, {value.age}</p>
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps)(UsersPage);