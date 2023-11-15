import React from "react";

const li='https://www.youtube.com/watch?v=fhr3MzT6exg'

const Appp=() =>{
    

    

return(
<div style={{textAlign:'center'}}>
<div>
  <a
    style={{ color: '#f9d3b4', bottom: '5px', left: '30px',cursor:'pointer' }}
    onClick={() => window.open(li, '_blank', 'noopener noreferrer')}
    
  >
    Click here to see how to watch movies
  </a>
</div>
    <p style={{ color:'#f9d3b4',bottom: '5px',left: '30px' }}> advertise-- @5$ per month</p>
    <p style={{ color:'#f9d3b4',bottom: '5px',left: '30px' }}>   contact email--crashofficial96@gmail.com </p> 
      
</div>
)
}
export default Appp;