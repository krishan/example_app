//= require jquery
//= require jquery_ujs
//= require scrivito
//= require scrivito-tab-group-widget
//= require_tree .

  scrivito.page_menu().add('hello_world', {
    title: 'Hello World!',
    icon: 'globe',
    execute: function() { alert('Hello World!'); }
  });
