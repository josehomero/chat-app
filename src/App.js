import React from "react";

function App() {
  return (
    <div className="container container-fluid">
      <h1>Chat App</h1>
      
      <div className="row">
        <div className="col-4"></div>
      </div>

      <input
        className="form-control"
        name="search"
        type="text"
        placeholder="Submit?"
      />
      <button type="button" class="btn btn-primary">
        Primary
      </button>
    </div>
  );
}

export default App;
