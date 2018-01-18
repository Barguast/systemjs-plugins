# systemjs-plugins
A few useful SystemJS loader plugins for loading various resources

## hbs

Basic Handlebars template loading, exports the template function

##### test1.hbs
```
Hello, {{name}}!
```
##### index1.js
```
var hbs = require("./test1.hbs!");
alert(hbs({name: "World"}));
```

## hbss

Loads a number of Handlebars templates from a HTML file, exports a hash of template functions keyed by 'id'.

##### test2.html
```
<script id="hello" type="text/x-handlebars-template">
  Hello, {{name}}
</script>
<script id="goodbye" type="text/x-handlebars-template">
  Goodbye, {{name}}
</script>
```
##### index2.js
```
var hbs = require("./test2.html!hbss");
alert(hbs.hello({name: "World"}));
alert(hbs.goodbye({name: "World"}));
```

## css-inline

Loads CSS as text and inserts it as a `<style>` rather than referencing in a `<link>`.
