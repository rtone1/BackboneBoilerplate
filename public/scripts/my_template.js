var tpl = _.template ("<h1>My name is <%= name %> and I have a few likes. Like my favourite movie <%= movie %>, favourite city <%= city %> and school <%= school %>.</h1>");
var data = {
  name: 'Rodrigo',
  movie: 'Turbo',
  city: 'Chicago',
  school: 'GA,WDI'
}
$('body').html(tpl(data));

//second template
var tpl = _.template ("<h1>My name is <%= name %> and I have a few likes. Like my favourite movie <%= movie %>, favourite city <%= city %> and school <%= school %>.</h1>");
var data = {
  name: 'Rodrigo',
  movie: 'Turbo',
  city: 'Chicago',
  school: 'GA,WDI'
}
$('body').html(tpl(data));
