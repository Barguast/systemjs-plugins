"format cjs";
var Handlebars = require("handlebars");

exports.translate = function(load) {
    var input = Handlebars.precompile(load.source);
    return 'define(["handlebars"], function (Handlebars) { return Handlebars.template(' + input + '); });';
}