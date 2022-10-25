import './map.css'

export default function Map(){

    var map;
    function initMap(){
        map = new google.maps.Map(document.querySelector('.map'),{
            center: {lat: 0, lng: 0},
            zoom: 8,

        })
    }

    <script src='https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCYpVhhIq9TEb2fo4pfNVYtvSNMzYrqh1c' async defer></script>

    return(
        <div className='map'>

        </div>
    )
}