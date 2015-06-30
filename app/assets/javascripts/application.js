//= require jquery
//= require jquery_ujs
//= require scrivito
//= require scrivito-tab-group-widget
//= require_tree .

var my_custom_dialog = function() {
  var content = $("<div><p class='clickme'>[Click me]</p></div>");

  content.find(".clickme").on("click", function() {
    content.append("<p>Thanks for clicking!</p>");
  });

  var dialog = scrivito.dialog({content: content});

  dialog.when_closed.then(
    function() { console.log("dialog was confirmed"); },
    function() { console.log("dialog was cancelled"); }
  );
};

// use a page menu item to trigger the dialog.
// note that this is just an example.
// dialogs may be used anywhere, not just in menu items.
scrivito.page_menu().add('custom_dialog', {
  title: 'Show me cool stuff!',
  icon: 'globe',
  execute: function() { my_custom_dialog(); }
});

var retrofy = function() {
  var my_image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAKCCAMAAAA+3vprAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAA5UExURWh+GZWkXbQeGspgXs3Uss/JK9rgyOa0suzJyPPxy/b38vvy8vv8+fz+/P35+f39/f3+/f7+/v///108M1UAAAVRSURBVHja7dxNbuJAEIDRdjAZS8ibuf8lIxRh8E/PBWbhKA3dLt63Rgb6uRDeVPc31Sl/pRhd2v54H0mhAwxYgAVYgAVYgAUYsAALsAALsAALMGABFmABFmABFmABBizAAizAAizAAgxYgAVYgAVYgAUYcI2ys39JfSW87R7lBL8rve+lGnBe77PJiTvB+bEszjUw8LqY38h/svLd/MaeYPPrMUmABViABRiwAAuwAAuwAAswYAEWYAEWYAEWYMACLMACLMACLMACDFiABViABViABfjtKr/CYav0Tc6FrzcXft/BBAuwAAswYAEWYAEWYAEWYMACLMACLMACLMACDFiABViABViABRiwAAuwAAuwAAswYAEWYAEWYDUOnJ1pU/WF+bbb3r1RpfdQtd5U+HrDE4DzPC1vA/KGE5zvj9WJBQaeH4sDC/wnK0/mN/YEm1+PSQIswAIswAIMWIAFWIAFWIAFGLAAC7AAC7AACzBgARZgARZgARZgAQYswAIswAIswPpvffOfsNY+rdb3fU0mWIABC7AAC7AAC7AAAxZgARZgARZgAQYswAIswAIswAIswIAFWIAFWIAFWIABC7AAC7AAC7AAA1boyu/JqrU3qtb3qHW90QQLMGABFmABFmABFmDAAizAAizAAizAgAVYgAVYgAVYgAUYsAALsAALsAALMGABFmAdE7jvnFdk4G44Oa/D9ZMlLOctrdmRxf2J7v6Y4dATnLrPgruPtsfi+BsDTqng36zTZ9vAtfZ4DWEekzyhOWUBFmDAAizAAizAAizAAgxYgAVYgAVYgAUYsAALsAALsAALMGBHAFiABViABViABRiwAAuwACsu8Ob0X1D/nMvu2Hi43eait2Dr98sYCDjPky12gSc43x+rkw0MPNtCGfpPVp7Mb+wJNr8ekwRYgAUYsCMALMACLMACLMACDFiABViABViABRiwAAuwAAuwAAuwAAMWYAEWYAEWYL0A2P6rlvrhCodd+6/e69bfez9fC3++8QnA9l/FnmD7r4ID238V+0+W/VfRJ9j8ekwSYAEWYAEWYMACLMACLMACLMCABViABViABViAAQuwAAuwAAuwAAswYAEWYAEWYL0A2P6rI9bn3b63MLdqiHbu3eqXq7vcT7QAC7AAC7AACzBgARZgARZgARZgwAIswAIswAIswAIMWIAFWIAFWIAFGLAAC7AAC7AACzBgAdYR69O58BXnwrfWaefr1sLf41T4env3yJ1NsAALMGABFmABFmABFmDAAizAAizAAizAgB0BYAEWYAEWYAEWYMACLMACLMACLMCABViABViABViAlVLqi19x756ntfDrSrdWOhcTLMACDFiABViABViABRiwAAuwAAuwAAuwAAMWYAEWYAEWYAEGLMACLMACLMACDFiABViABViABVgpPWNP1upQf3UuJxMswAIMWIAFWIAFWIAFGLAAC7AAC7AACzBgRwBYgAVYgAVYgAUYsAALsAALsAALMGABFmABFmABFmCllPo0FL7id6VvcgnyPQYTLMACDFiABViABViABRiwAAuwAAuwAAswYEcAWIAFWIAFWIAFGLAAC7AAC7AACzBgARZgARZgARZgpZS6ce8rr5U+4dj4CTZ+LibYT7QAC7AAC7AACzBgARZgARZgARZgwAIswAIswAIswAIMWIAFWIAFWIAFGLAAC7AAC7AACzBgAdZB66vtedLvuppgAQYswAIswAIswAIMWIAFWIAFWIAFGLAAC7AAC7AAC7AAAxZgARZgARZgAQYswAIswAIswAIMWKHrRmdggnXc/gH/ZX1RXRB4TwAAAABJRU5ErkJggg=="

  var img = $("img[data-scrivito-field-type=binary]").eq(0)

  img.scrivito("save", scrivito.upload_binary({
    data_url: my_image,
    filename: "retro.png"
  })).then(function() {
    img.scrivito("reload");
  });
};

