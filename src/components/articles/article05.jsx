import React from 'react'


class Jsx extends React.Component{
  render(){
    return (
        <section id="Declaring_variables" class="main-section">
    <header class="header6">Declaring variables</header>

    <article>
    You can declare a variable in three ways:
    <p>
    With the keyword var. For example,         <code>{`var x = 42.`}</code> This syntax can be used to declare both local and global variables.
    </p>
    <p>
    By simply assigning it a value. For example, <code>{`x = 42.`}</code> This always declares a global variable. It generates a strict JavaScript warning. You shouldn't use this variant.
    </p>
    <p>
    With the keyword let. For example,       <code>{` let y = 13.`}</code> This syntax can be used to declare a block scope local variable. See Variable scope below.
    </p>
    </article>
    </section>);
  }
}

export default Jsx;
