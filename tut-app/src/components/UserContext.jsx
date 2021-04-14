import React from 'react';

const UserContext = React.createContext("Mr. Twinkle Sharma");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;


export {UserProvider, UserConsumer};
