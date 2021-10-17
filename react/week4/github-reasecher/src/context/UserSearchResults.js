import React from "react";
import { searchContext } from './createContext'

const UserName = (props) => {
    return (
        <div>
            {props.username}
        </div>)
}

const UserSearchResults = () => {
    const gitUserNames = React.useContext(searchContext)
    return (
        <div>
            {gitUserNames.users.map(user => <UserName key={user.id ? user.id : 1} username={user.login ? user.login : user} />)}
        </div>)
}

export default UserSearchResults