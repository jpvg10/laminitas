import React, { ChangeEvent, FormEvent, useState } from 'react';

interface IProps {
  configure: (n: number) => void;
}

const Configure: React.FC<IProps> = ({ configure }) => {
  const [total, setTotal] = useState(0);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    configure(total);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTotal(parseInt(event.target.value));
  };

  return (
    <React.Fragment>
      <h2>How many stickers does your album have?</h2>
      <form onSubmit={onSubmit}>
        <input type="number" min={0} onChange={onChange} />
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  );
};

export default Configure;
