(function ($) {
    var location = window.location
    if (location.origin.indexOf('https') === -1) {
        location.href = 'https://' + location.host + location.pathname
    }
})(jQuery)