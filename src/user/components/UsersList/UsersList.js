import React from 'react';

import './UsersList.css';
import Card from '../../../shared/components/UIElements/Card/Card';
import UserItem from '../UserItem/UserItem';


const UsersList = (props) => {
    if (props.items.length === 0) {
        return <Card className="center">No users found</Card>
    };

    return <ul className="users-list">
        {props.items.map(user => {
            return <UserItem
                key={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places}
            />
        })}
    </ul>
}

export default UsersList;