import React from 'react';

function Function() {
    function  apple()
    {
        alert("hello iam a alert");
    }
  return <div>
      <button onClick={apple}>Click me</button>
  </div>;
}

export default Function;
