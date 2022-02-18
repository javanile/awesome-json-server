
import * as React from "react";
import { AsyncValue } from 'async-kit';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

//const listParams = new GetListParams;
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const Test1 = async () => (
    const list = await AsyncValue(['a', 'b'])
    <div>A</div>
);

const App = () => {
    /*
    const listUsers = await dataProvider.getList('users', {
        pagination: {
            page: 1,
            perPage: 2
        },
        sort: {
            field: ''
        }
    });*/
    return (
        <div>
            <Admin dataProvider={dataProvider}>
                <Resource name="users" list={ListGuesser} />
            </Admin>
            <Test1 />
            {/*listUsers.data.map(user => (<div>{user.name}</div>))*/}
        </div>
    );
};

export default App;
