// if (Meteor.isClient) {
//   Template.hello.greeting = function () {
//     return "Welcome to mondocode.";
//   };

//   Template.hello.events({
//     'click input' : function () {
//       // template data, if any, is available in 'this'
//       if (typeof console !== 'undefined')
//         console.log("You pressed the button");
//     }
//   });
// }

var File = new Meteor.Collection('file');
var Broadcasts = new Meteor.Collection('broadcasts');