'use strict';

const nav = $('nav');
const header = $('header');
const headerAbout = $("header a[href='#about']");
const headerWork = $("header a[href='#work']");
const headerContact = $("header a[href='#contact']");
const headerLinks = $("header a[href='#about'], header a[href='#work'], header a[href='#contact']");
const banner = $("header a[href='#banner']");
const portrait = $('#portrait');
const about = $('#about');
const work = $('#work');
const contact = $('#contact');

// portrait link mouse over
function handleMouseOver(link, classToAdd) {
  link.mouseover(() => {
    portrait.removeClass().addClass(classToAdd);
  })
}

// place regular portrait back
function handleMouseOut() {
  headerLinks.mouseout(() => {
    portrait.removeClass().addClass('regular-portrait');
  })
}

// handle header links click

$(function() {
  handleMouseOver(headerAbout, 'left-portrait');
  handleMouseOver(headerWork, 'center-portrait');
  handleMouseOver(headerContact, 'right-portrait');
  handleMouseOut();
})
