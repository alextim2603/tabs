;(function($){
$(document).ready(function(){
    var tabs = $('#game-options');
    $('.ba-farcry > div', tabs).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    tabs.on('click', '.ba-icon-row a', function(events){
        /* Предотвращаем стандартную обработку клика по ссылке */
        events.preventDefault();

        /* Узнаем значения ID блока, который нужно отобразить */
        var tabId = $(this).attr('href');

        /* Удаляем все классы у якорей и ставим active текущей вкладке */
        $('.tabs a',tabs).removeClass();
        $(this).addClass('active');

        /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
        $('.ba-farcry > div', tabs).hide(0);
        $(tabId).show();
    });

});

})(jQuery);
