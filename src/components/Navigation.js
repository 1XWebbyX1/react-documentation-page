import React from 'react'
import sections from '../data/sections'

class Navigation extends React.Component{
  render() {
    //create links for navigations using sections array----------------
    var navlinks = sections.map((a) => {
      return (
        <a class="nav-link" href={a.href}><li>{a.section.toUpperCase()}</li></a>
      );
    });

    return(
      <div>
        <nav id='navbar'>
          <header><strong>Contents</strong></header>
          <ul>
            {navlinks}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation;
