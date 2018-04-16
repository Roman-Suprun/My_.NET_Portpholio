function smoose() {
    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top-80;
            //анимируем переход на расстояние - top за 2000 мс
            $('body,html').animate({scrollTop: top}, 2000);
        });
    });

}