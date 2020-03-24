import React from 'react';

import UsersList from '../components/UsersList/UsersList';

const Users = () => {
    const USERS = [{ id:123,name: 'mai', image: 'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/10410849_398798120259050_1790647759316023270_n.jpg?_nc_cat=105&_nc_sid=7aed08&_nc_ohc=StThOCzfo6AAX81CskR&_nc_ht=scontent.fsdv3-1.fna&oh=2906e248967d26acf2abc404c0e2cca3&oe=5EA0CFD0', places: 1 }];

    return <UsersList users={USERS} />
}

export default Users;