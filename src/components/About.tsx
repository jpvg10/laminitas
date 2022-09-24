import React from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  reset: () => void;
}

const About: React.FC<IProps> = ({ reset }) => {
  const navigate = useNavigate();

  const onClickReset = () => {
    const confirmation = window.confirm(
      "Are you sure you want to reset your progress? You can't undo this action."
    );
    if (confirmation) {
      reset();
      navigate('/');
    }
  };

  return (
    <React.Fragment>
      <button
        onClick={onClickReset}
        className="bg-red-600 hover:bg-red-700 rounded shadow-md text-white px-6 py-2 mb-5"
      >
        Reset progress
      </button>
      <p>Juan Pablo Valencia, 2022</p>
      <p>
        Check the code on{' '}
        <a
          className="text-blue-600 hover:text-blue-700"
          href="https://www.github.com/jpvg10/laminitas"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
      <p>
        <a
          className="text-blue-600 hover:text-blue-700"
          href="https://www.flaticon.com/free-icons/sticker"
          target="_blank"
          rel="noreferrer"
        >
          Sticker icons created by Freepik - Flaticon
        </a>
      </p>
    </React.Fragment>
  );
};

export default About;
