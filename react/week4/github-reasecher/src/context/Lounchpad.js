import React, { useState } from 'react';
import {  SearchContextProvider } from './createContext';
import Header from './Header'
import SearchInput from './SearchInput';
import UserSearchResults from './UserSearchResults';

const Lounchpad = () => {

  const [users, setUsers] = useState([])
  const [error, setError] = React.useState();
  const [loading, setLoading] = useState(false)
  const [textValue, setTextValue] = React.useState('');

  React.useEffect(() => {
    if (textValue !== "") {
      setLoading(false);
      fetch(`https://api.github.com/search/users?q=${textValue}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response.status);
          }
        })
        .then((data) => {
          setUsers(data.items.slice(0, 30))
        })
        .catch((err) => setError(err));
      setLoading(false);
    } else {
      setUsers([]);
    }
  }, [textValue]);

  const contextContent = { users, error, loading, textValue, setTextValue }

  return (
    <SearchContextProvider value={contextContent}>
      <Header />
      <SearchInput />
      <UserSearchResults />
    </SearchContextProvider>
  );
}
export default Lounchpad;