import React, {FC} from "react";

interface Props {
    item:{
        description:string
    }
}
export const Description:FC<Props> = ({item}:Props) => {
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

