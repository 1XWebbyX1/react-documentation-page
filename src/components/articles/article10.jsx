import React from 'react'


class Jsx extends React.Component{
  render(){
    return(
         <section id="if-else_statement" class="main-section">
    <header class="header11">if...else statement</header>

    <article>
    Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to execute a statement if the condition is false. An if statement looks as follows:

    <code>{`if (condition) {
    statement_1;
    } else {
    statement_2;
    }`}</code>
    condition can be any expression that evaluates to true or false. See Boolean for an explanation of what evaluates to true and false. If condition evaluates to true, statement_1 is executed; otherwise, statement_2 is executed. statement_1 and statement_2 can be any statement, including further nested if statements.
    <p>
    You may also compound the statements using else if to have multiple conditions tested in sequence, as follows:
    </p>
    <code>{`if (condition_1) {
    statement_1;
    } else if (condition_2) {
    statement_2;
    } else if (condition_n) {
    statement_n;
    } else {
    statement_last;
    } `}</code>
    In the case of multiple conditions only the first logical condition which evaluates to true will be executed. To execute multiple statements, group them within a block statement ({'{ ... }'}') . In general, it's good practice to always use block statements, especially when nesting if statements:

    <code>{`if (condition) {
    statement_1_runs;
    statement_2_runs;
    } else {
    statement_3_runs;
    statement_4_runs;
    }`}</code>
    It is advisable to not use simple assignments in a conditional expression, because the assignment can be confused with equality when glancing over the code. For example, do not use the following code:
    <code>{`if (x = y) {
    /* statements here */
    }`}</code>
    If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. For example:

    <code>{`if ((x = y)) {
    /* statements here */
    }`}</code>
    </article>
    </section>
  );
  }
}

export default Jsx;
