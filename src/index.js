import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery'
import App from './App';
import './sass/03-utilities/_animation.scss'


ReactDOM.render(<App />, document.getElementById('root'));


//jQuery for animations_______________________________________________

var section = $('.main-section'), //all sections
    nav = $('#navbar');            //navigation bar


//to toggle class activeon scroll(highlight the current section)-------------------
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop(); //current position of scroll


  //to check which section is in view-----------------------------
  section.each(function() {
    var top = $(this).offset().top -400,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('li').removeClass('active');
      section.removeClass('active'); // remove previous active section
      //trigger active on current section-------------
      nav.find('a[href="#'+$(this).attr('id')+'"]').find('li').addClass('active');
    }
  });
});


//animate navigation on click -------------------------
nav.find('a').on('click', function () {
  var $this = $(this)
    , id = $this.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - 200
  }, 500);

  return false;
});
