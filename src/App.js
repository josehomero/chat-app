import React from "react";

function App() {
  return (
    <div>
      <h1>Chat App</h1>
      <div >
    <div>Header</div>
    <div >
        <p>Body</p>
    </div>
    <div >Footer</div>
</div>

      <input
                    className='form-control'
                    name="search"
                    type="text"
                    placeholder="Submit?"
                     />
                <button type="button" class="btn btn-primary">Primary</button>
    </div>
  );
}

export default App;
