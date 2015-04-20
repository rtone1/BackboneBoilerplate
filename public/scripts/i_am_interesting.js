var MyView = Backbone.View.extend({
  tagName: "div",
  className: "column",
  template: _.template("<h1><%= message %></h1><br><h2><%= question %></h2>"),
  initialize: function() {
    this.render();
  },
  render: function() {
    var data = {message:"This is my example of a VIEW", question: "Do you like the magic?" };
    var renderedTemplate = this.template(data);
    this.$el.html(renderedTemplate);
    $('body').append(this.$el);
  },
  remove: function(){
    $('body').empty('h2');
  }
});

var do_the_magic = new MyView();

var MyViewSong = Backbone.View.extend({
  tagName: "div",
  className: "column",
  template: _.template("<span><%= song %></span>"),
  initialize: function() {
    this.render();
  },
  render: function() {
    var data = {song: "don't have a favorite song" };
    var renderedTemplate = this.template(data);
    this.$el.html(renderedTemplate);
    $('body').append(this.$el);
  },
  remove: function(){
    $('body').empty('span');
  }
});

var do_the_magic = new MyViewSong();
