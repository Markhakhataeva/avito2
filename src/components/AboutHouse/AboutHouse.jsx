import React from 'react';

function AboutHouse(props) {
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>О доме</h2>
      <div className="container_1">
        <div className="left_block">
          <span className="bold">Тип дома:</span> <span>Монолитный</span>
        </div>
        <div className="right_block">
          <span className="bold">Этажей в доме:</span> <span>22</span>
        </div>
      </div>
    </div>
  );
}

export default AboutHouse;