import React from "react";
import Item from "./Item";

const Table = (props) => {
  const items = props.modules.modules.map((data) => {
    return (
      <Item key={data.id} title={data.title} description={data.description} />
    );
  });
  return (
    <div>
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="text-center">
            <h2 className="pt-4 pb-4">React For Rails Developers - Videos</h2>
          </div>
          {items}
        </div>
      </div>
    </div>
  );
};

export default Table;
