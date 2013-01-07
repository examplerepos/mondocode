Template.dashboard.events({
	'keyup input#new-project' : function (evt) {
		if(evt.type === "keyup" && evt.which === 13){
			createBroadcast(evt.target.value);
		}
	},

	'click button#remove-project' : function (evt) {
		removeBroadcast(this._id);
	}
});

Template.dashboard.projects = function() {
	return Broadcasts.find({owner: Meteor.userId()});
};

function createBroadcast(name) {
	var file = {
		_id: Meteor.uuid(),
		owner: Meteor.userId(),
		name: name,
		contents : "Welcome to Mondocode!",
		type: "directory",
		directory: true,
		children: []
	};

	var uuid = Broadcasts.insert({
		owner: Meteor.userId(),
		name: name,
		collaborators: [],
		url : "",
		root: file
	});  	
}

function removeBroadcast(id) {
	Broadcasts.remove({id : _id});
}