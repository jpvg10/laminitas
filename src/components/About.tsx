import React from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  reset: () => void;
}

const About: React.FC<IProps> = ({ reset }) => {
  const navigate = useNavigate();

  const onClickReset = () => {
    reset();
    navigate('/');
  };

  return (
    <React.Fragment>
      <button
        onClick={onClickReset}
        className="bg-red-600 hover:bg-red-700 rounded shadow-md text-white px-6 py-2 m-2"
      >
        Reset
      </button>
    </React.Fragment>
  );
};

export default About;
