import React from "react";

const li = 'https://youtu.be/PvURpUosmCY';
const tli = 'https://teraboxapp.com/s/1NfgkiDUshJzW6H9CQsSRoQ';

const Appp = () => {
  const openLink = (link) => {
    window.open(link, '_blank', 'noopener noreferrer');
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
          onClick={() => openLink(li)}
        >
          Click here to see how to watch movies
        </button>
      </div>

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
          onClick={() => openLink(tli)}
        >
          Click here to see available movies
        </button>
      </div>

      <p style={{ color: '#f9d3b4', bottom: '5px', left: '30px' }}>
       -----advertise-- @1$ per month--------------contact email--crashofficial96@gmail.com------
      </p>
    </div>
  );
};

export default Appp;
