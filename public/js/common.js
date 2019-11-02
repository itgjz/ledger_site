(function ($) {
    $(function () {
        var pathname = location.pathname.split('/')[1]
        if (pathname) {
            $('.solutions-cls').find('li').each(function () {
                var p = $(this).find('a').attr('href')
                if (p && typeof p === 'string' && pathname) {
                    if (p.substring(2) === pathname) {
                        if (this) {
                            $(this).find('a').css({ color: '#00dce6' })
                            $('[title=Solutions]').css({ color: '#fff' }).find('span').css({
                                background: "url('/images/vector-white.svg') no-repeat"
                            })

                        }
                    }
                }
            })
        }
    });

})(jQuery)