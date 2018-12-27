import React from 'react'


class Jsx extends React.Component{
  render(){
    return(
      <section id="Hello_world" class="main-section">
    <header class="header4">Hello world</header>

    <article>
    To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:
    <code>{`function greetMe(yourName) {
    alert("Hello " + yourName);
    }
    greetMe("World");
    `}</code>

    Select the code in the pad and hit Ctrl+R to watch it unfold in your browser!
    </article>
    </section>);
  }
}

export default Jsx;
