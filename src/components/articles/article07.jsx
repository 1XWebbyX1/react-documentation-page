import React from 'react'


class Jsx extends React.Component{
  render(){
    return(
      <section class="main-section" id="Global_variables">
    <header>Global variables</header>
    <article>
    <p>Global variables are in fact properties of the global object. In web pages the global object is window, so you can set and access global variables using the window.variable syntax.</p>

    <p>Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, if a variable called phoneNumber is declared in a document, you can refer to this variable from an iframe as parent.phoneNumber.</p>
    </article>
    </section>
  );
  }
}

export default Jsx;
