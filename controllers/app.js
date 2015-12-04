Meteor.subscribe("talkies");

Template.app.helpers({
  talkies: function() {
    return Talkies.find({}, { sort: {createdAt: 1} });
  }
})

Template.app.events({
  "submit .talka": function(event) {
    event.preventDefault();
    var author = $("p input")[0].value;

    if ( ! author) return

    var data = {};
    data.text = $(".talka input")[0].value;
    data.author = $("p input")[0].value;

    Meteor.call("addTalky", data);
    $(".talka input")[0].value = "";
  }
})