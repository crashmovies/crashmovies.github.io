import React from "react";

const li = 'https://www.youtube.com/watch?v=fhr3MzT6exg';

const Appp = () => {
  const openLink = () => {
    window.open(li, '_blank', 'noopener noreferrer');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <button
          style={{
            color: '#f9d3b4',
            bottom: '5px',
            left: '30px',
            cursor: 'pointer',
            border: 'none',
            background: 'none',
            padding: '0',
            textDecoration: 'underline',
          }}
          onClick={openLink}
        >
          Click here to see how to watch movies
        </button>
      </div>
      <p style={{ color: '#f9d3b4', bottom: '5px', left: '30px' }}>
        advertise-- @5$ per month
      </p>
      <p style={{ color: '#f9d3b4', bottom: '5px', left: '30px' }}>
        contact email--crashofficial96@gmail.com
      </p>
    </div>
  );
};

export default Appp;
