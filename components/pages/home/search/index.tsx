import React from 'react';
import Input, { InputType } from '../../../input';

type PropsTypes = {
  onChange?: (value: string) => void,
  value?: string,
};

function Search(props: PropsTypes) {
  const {
    onChange = () => {},
    value: defaultValue = '',
  } = props;

  return (
    <div>
      <h3 className="h3">Search</h3>
      <Input
        type={InputType.Search}
        fullWidth
        placeholder="Keyword"
        value={defaultValue}
        onChange={(value) => onChange(value)}
      />
    </div>
  );
}

export default Search;
