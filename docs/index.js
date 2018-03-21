'use strict';

const navFooter = $('nav, footer');
const header = $('header');
const h1Text = $('header h1').text();
const h2Text = $('header h2');
const all = $('nav, footer, header, section');
const headerAbout = $("header a[href='#about']");
const headerWork = $("header a[href='#work']");
const headerContact = $("header a[href='#contact']");
const headerLinks = $("header a[href='#about'], header a[href='#work'], header a[href='#contact']");
const navBanner = $("nav a[href='#banner']");
const navAbout = $("nav a[href='#about']");
const navWork = $("nav a[href='#work']");
const navContact = $("nav a[href='#contact']");
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

// handle header or nav link clicks
function handleNavigation(link, sectionToShow) {
  link.click((e) => {
    e.preventDefault();
    e.stopPropagation();
    all.addClass('hidden');
    sectionToShow.removeClass('hidden');
    if(header.hasClass('hidden')) {
      navFooter.removeClass('hidden');
    }
  })
}

$(function() {
  handleMouseOver(headerAbout, 'left-portrait');
  handleMouseOver(headerWork, 'center-portrait');
  handleMouseOver(headerContact, 'right-portrait');
  handleMouseOut();
  handleNavigation(headerAbout, about);
  handleNavigation(headerWork, work);
  handleNavigation(headerContact, contact);
  handleNavigation(navAbout, about);
  handleNavigation(navWork, work);
  handleNavigation(navContact, contact);
  handleNavigation(navBanner, header);
})
