import React from "react";

const InputSearch = () => {
  return (
    <div className="input-search-section">
      <div className="container-fluid">
        <form action="" className="form-input-search" method="post">
          <input
            type="search"
            className="form-control input-search shadow-none"
            id="exampleFormControlInput1"
            placeholder="Find your favorite movie..."
          />
          <div className="icon-search">
            <img src="../../../images/search-icon.svg" alt="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputSearch;
