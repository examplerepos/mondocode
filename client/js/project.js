var editor;
var handle;

Meteor.startup(function() {
	var file = File.insert({
		contents : "Welcome to Mondocode!",
		type: "javascript",
		directory: false,
		children: []
	});

	var uuid = Broadcasts.insert({
		creator : "jonathan",
		collaborators: [],
		url : "",
		root: file
	});

	Session.set("uuid", uuid);
	Session.set("file", file);
	Session.set("theme", "monokai");
	Session.set("type", File.findOne({_id : Session.get("file")}).type);
	
	//editor = ace.edit("editor");
	//editor.setTheme("ace/theme/" + Session.get("theme"));
//	editor.getSession().setMode("ace/mode/" + Session.get("type"));

	var query = File.find({_id : Session.get("file")});

	handle = query.observe({
		changed : function(newDoc, oldIndex, oldDoc) {
	//		if(editor !== undefined){
 	//			editor.setValue(newDoc.contents);
 	//		}
		}
	});
});

// Template.hello.events({
// 	'click input' : function () {
// 	  // template data, if any, is available in 'this'
// 	  if (typeof console !== 'undefined')
// 	    console.log("You pressed the button");
// 	}
// });