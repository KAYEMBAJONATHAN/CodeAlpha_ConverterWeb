import React from 'react';

const ResultDisplay = ({ temperature }) => {
  return (
    <div>
      {temperature !== '' && (
        <p>
          Converted Temperature: <strong>{temperature}</strong>
        </p>
      )}
    </div>
  );
}

export default ResultDisplay;
