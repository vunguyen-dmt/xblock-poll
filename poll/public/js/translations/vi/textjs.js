
            (function(global){
                var PollXBlockI18N = {
                  init: function() {
                    

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n > 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "Answer": "\u0110\u00e1p \u00c1n",
    "Delete": "X\u00f3a",
    "Feedback": "Ph\u1ea3n h\u1ed3i",
    "Image URL": "URL h\u00ecnh \u1ea3nh",
    "Image alternative text": "V\u0103n b\u1ea3n thay th\u1ebf h\u00ecnh \u1ea3nh",
    "Question": "C\u00e2u h\u1ecfi",
    "Results": "K\u1ebft qu\u1ea3 ",
    "Results gathered from {total} respondent.": [
      "K\u1ebft qu\u1ea3 \u0111\u01b0\u1ee3c thu th\u1eadp t\u1eeb {total} ng\u01b0\u1eddi tr\u1ea3 l\u1eddi."
    ],
    "Submit": "G\u1eedi",
    "This must have an image URL or text, and can have both.  If you add an image, you must also provide an alternative text that describes the image in a way that would allow someone to answer the poll if the image did not load.": "\u0110i\u1ec1u n\u00e0y ph\u1ea3i c\u00f3 URL h\u00ecnh \u1ea3nh ho\u1eb7c v\u0103n b\u1ea3n v\u00e0 c\u00f3 th\u1ec3 c\u00f3 c\u1ea3 hai. N\u1ebfu b\u1ea1n th\u00eam h\u00ecnh \u1ea3nh, b\u1ea1n c\u0169ng ph\u1ea3i cung c\u1ea5p v\u0103n b\u1ea3n thay th\u1ebf m\u00f4 t\u1ea3 h\u00ecnh \u1ea3nh theo c\u00e1ch cho ph\u00e9p ai \u0111\u00f3 tr\u1ea3 l\u1eddi cu\u1ed9c th\u0103m d\u00f2 n\u1ebfu h\u00ecnh \u1ea3nh kh\u00f4ng t\u1ea3i.",
    "You can make limited use of Markdown in answer texts, preferably only bold and italics.": "B\u1ea1n c\u00f3 th\u1ec3 h\u1ea1n ch\u1ebf s\u1eed d\u1ee5ng Markdown trong v\u0103n b\u1ea3n tr\u1ea3 l\u1eddi, t\u1ed1t nh\u1ea5t ch\u1ec9 in \u0111\u1eadm v\u00e0 in nghi\u00eang.",
    "move poll down": "di chuy\u1ec3n cu\u1ed9c th\u0103m d\u00f2 xu\u1ed1ng",
    "move poll up": "di chuy\u1ec3n cu\u1ed9c th\u0103m d\u00f2 l\u00ean"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
      "DATETIME_FORMAT": "H:i \\N\\g\u00e0\\y d \\t\\h\u00e1\\n\\g n \\n\u0103\\m Y",
      "DATETIME_INPUT_FORMATS": [
        "%Y-%m-%d %H:%M:%S",
        "%Y-%m-%d %H:%M:%S.%f",
        "%Y-%m-%d %H:%M",
        "%m/%d/%Y %H:%M:%S",
        "%m/%d/%Y %H:%M:%S.%f",
        "%m/%d/%Y %H:%M",
        "%m/%d/%y %H:%M:%S",
        "%m/%d/%y %H:%M:%S.%f",
        "%m/%d/%y %H:%M"
      ],
      "DATE_FORMAT": "\\N\\g\u00e0\\y d \\t\\h\u00e1\\n\\g n \\n\u0103\\m Y",
      "DATE_INPUT_FORMATS": [
        "%Y-%m-%d",
        "%m/%d/%Y",
        "%m/%d/%y",
        "%b %d %Y",
        "%b %d, %Y",
        "%d %b %Y",
        "%d %b, %Y",
        "%B %d %Y",
        "%B %d, %Y",
        "%d %B %Y",
        "%d %B, %Y"
      ],
      "DECIMAL_SEPARATOR": ",",
      "FIRST_DAY_OF_WEEK": 0,
      "MONTH_DAY_FORMAT": "j F",
      "NUMBER_GROUPING": 0,
      "SHORT_DATETIME_FORMAT": "H:i d-m-Y",
      "SHORT_DATE_FORMAT": "d-m-Y",
      "THOUSAND_SEPARATOR": ".",
      "TIME_FORMAT": "H:i",
      "TIME_INPUT_FORMATS": [
        "%H:%M:%S",
        "%H:%M:%S.%f",
        "%H:%M"
      ],
      "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));


                  }
                };
                PollXBlockI18N.init();
                global.PollXBlockI18N = PollXBlockI18N;
            }(this));
        