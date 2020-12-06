import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const text = 'Not found';
  const history = useHistory();

  const handleRoute = useCallback(
    (path: string) => () => {
      history.push(path);
    },
    [history]
  );

  return (
    <div>
      <ErrorCard text={text} />
      <button onClick={handleRoute('/home')}>Go back to site</button>
    </div>
  );
};

export default NotFound;

interface ErrorCardProps {
  text: string;
}

const ErrorCard = ({ text }: ErrorCardProps) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};
