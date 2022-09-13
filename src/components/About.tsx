import React from 'react';

interface IProps {
  reset: () => void;
}

const About: React.FC<IProps> = ({ reset }) => (
  <React.Fragment>
    <button onClick={reset}>Reset</button>
  </React.Fragment>
);

export default About;
