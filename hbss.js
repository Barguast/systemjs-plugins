"format cjs";
var $ = require("jquery");
var Handlebars = require("handlebars");

exports.translate = function (load) {
    var arr = [];
    $(load.source).filter("script[id][type='text/x-handlebars-template']").each(function (i, s) {
        var template = Handlebars.precompile(s.innerHTML);
        arr.push("'" + s.id + "':Handlebars.template(" + template + ")");
    });
    var hash = "{" + arr.join(",") + "}";
    var out = 'define(["handlebars"], function (Handlebars) { return ' + hash + '; });';
    return out;
}