
import React from 'react'


class Jsx extends React.Component{
  render(){
    return(
      <section id="while_statement" class="main-section">
    <header class="header12">while statement</header>

    <article>
    A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

    <code>{`while (condition)
    statement`}</code>
    If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.

    <p>The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops and control is passed to the statement following while.</p>

    <p>To execute multiple statements, use a block statement ({`{ ... }`}) to group those statements.</p>

    Example:

    <p>The following while loop iterates as long as n is less than three:</p>

    <code>{`var n = 0;
    var x = 0;
    while (n < 3) {
    n++;
    x += n;
    }`}</code>
    <p>With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:</p>

    <li>After the first pass: n = 1 and x = 1</li>
    <li>After the second pass: n = 2 and x = 3</li>
    <li>After the third pass: n = 3 and x = 6</li>
    <p>After completing the third pass, the condition n &lt 3 is no longer true, so the loop terminates.</p>
    </article>
    </section>
    );
  }
}

export default Jsx;
