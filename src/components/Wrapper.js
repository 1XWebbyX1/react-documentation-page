import React from 'react'
import $ from 'jquery'
import MainDoc from './MainDoc'
import Navigation from './Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'



class Wrapper extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state= {
      displayDoc: true,
      menu: faBars
    }
  }


  handleClick() {

    this.setState({
      displayDoc: !this.state.displayDoc
    });

//for smaller screens----------------------------------------
      if(this.state.displayDoc){
          this.setState({menu: faTimes});
      } //toggle between menu and close icon
      else{
          this.setState({menu: faBars});
      }

      if(this.state.displayDoc){
        $('#navbar').css('width', '30%');
      }else{
        $('#navbar').css('width', '0%'); //hide the menu
      }

    //animation
     $('#menu').children().addClass('rotate');
     setTimeout(function() {$('#menu').children().removeClass('rotate')},1000);

  }


  render(){
    return(
      <div>
        <FontAwesomeIcon id='menu' icon={this.state.menu} onClick={this.handleClick} />
        <Navigation />
        <MainDoc />
      </div>
    )
  }
}


export default Wrapper;
