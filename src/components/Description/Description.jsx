import React from "react";

function Description({item}) {
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Описание</h2>
      <div className="description">
        <p>
            {item.description}
        </p>
      </div>
    </div>
  );
}

export default Description;
