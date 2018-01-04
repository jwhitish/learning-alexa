"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  "HelloIntent": function () {
    this.response.speak("Hello, Jacob. Welcome to Codecademy");
    this.emit(':responseReady');
  },
  "LaunchRequest": function () {
    this.response.speak("Jacob, Welcome to Codecademy. Congratulations on your new alexa skill.");
    this.emit(':responseReady');
  }
};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
