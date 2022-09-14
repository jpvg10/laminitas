import React from 'react';

interface IProps {
  reset: () => void;
}

const About: React.FC<IProps> = ({ reset }) => (
  <React.Fragment>
    <button
      onClick={reset}
      className="bg-red-600 hover:bg-red-700 rounded shadow-md text-white px-6 py-2 m-2"
    >
      Reset
    </button>
  </React.Fragment>
);

export default About;
