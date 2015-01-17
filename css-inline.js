"format cjs";
if (typeof window !== 'undefined') {
    exports.translate = function(load) {
        var css = encodeCss(load.source);
        return "\
define([],function(){\
  var style = document.createElement('style');\
  if (style.styleSheet) {\
    style.styleSheet.cssText = '" + css + "';\
  } else {\
    style.appendChild(document.createTextNode('" + css + "'));\
  }\
  document.head.appendChild(style);\
  return style;\
});"
    }
}

// https://github.com/joliss/js-string-escape
function encodeCss(css)
{
    return css.replace(/["'\\\n\r\u2028\u2029]/g, function (ch) {
        switch (ch) {
            case '"':
            case "'":
            case '\\':
                return '\\' + ch;
            case '\n':
                return '\\n'
            case '\r':
                return '\\r'
            case '\u2028':
                return '\\u2028'
            case '\u2029':
                return '\\u2029'
        }
    })
}