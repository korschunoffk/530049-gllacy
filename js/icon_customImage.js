ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938587, 30.322954],
            zoom: 16
        
        }, {
            searchControlProvider: 'yandex#search'
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
        }, {
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.png',
            // Размеры метки.
            iconImageSize: [200, 130],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-35, -130]
        });
    myMap.geoObjects
        .add(myPlacemark);
    myMap.setCenter([59.939001, 30.329037], 16);
});