import React from 'react'


class Jsx extends React.Component{
  render(){
    return(
      <section id="Data_types" class="main-section">
    <header class="header10">Data types</header>

    <article>
    <p>The latest ECMAScript standard defines seven data types:</p>
    <p>Six data types that are primitives:</p>
    <ul>
     <li>Boolean. true and false.</li>
     <li>null. A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.</li>
      <li>undefined. A top-level property whose value is undefined.</li>
      <li>Number. 42 or 3.14159.</li>
      <li>String. "Howdy"</li>
      <li>Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.</li></ul>
      <li>and Object</li>
    Although these data types are a relatively small amount, they enable you to perform useful functions with your applications. Objects and functions are the other fundamental elements in the language. You can think of objects as named containers for values, and functions as procedures that your application can perform.
    </article>
    </section>
  );
  }
}

export default Jsx;
