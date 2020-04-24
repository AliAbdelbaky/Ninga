// sidebar-list
$(document).ready(function () {
    $(".tap1").on('click', function () {
        'use-strict';
        $(".list1").toggle(500);
        $('.i1').toggleClass("fa fa-angle-down fa fa-angle-up ");
    });
    $(".tap2").on('click', function () {
        'use-strict';
        $(".list2").toggle(500);
        $('.i2').toggleClass("fa fa-angle-down fa fa-angle-up ");
    });
    $(".tap3").on('click', function () {
        'use-strict';
        $(".list3").toggle(500);
        $('.i3').toggleClass("fa fa-angle-down fa fa-angle-up ");
    });
    $(".tap4").on('click', function () {
        'use-strict';
        $(".list4").toggle(500);
        $('.i4').toggleClass("fa fa-angle-down fa fa-angle-up ");
    });
    $(".tap8").on('click', function () {
        'use-strict';
        $(".list8").toggle(500);
    });
});
//delete button -super-users
$(Document).ready(function () {
    'use strict';
    $('.content-aria .user-management table .buttons a .fa-trash').on('click', function () {

    });
});

//mapModule
var marker;
var map
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 31.037933, lng: 31.381523 },
        zoom: 12,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]
    });
    marker = new google.maps.Marker({
        position: { lat: 31.037933, lng: 31.381523 },
        title: 'Mansoura city',
        map: map
    })
}