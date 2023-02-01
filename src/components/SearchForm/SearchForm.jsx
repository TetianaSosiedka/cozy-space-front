import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form } from './SearchForm.styled';

const SearchForm = ({ onSubmit, onQuery }) => {
  const [query, setQuery] = useState(onQuery);
  const [disabled, setDisabled] = useState(true);

  const handleInputName = event => {
    setQuery(event.target.value);

    if (query.trim() !== '') {
      setDisabled(false);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);

    setQuery('');
    setDisabled('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        onChange={handleInputName}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
      />

      <button type="submit" disabled={disabled}>
        Search
      </button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onQuery: PropTypes.string,
};

export default SearchForm;
