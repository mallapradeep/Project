import React, { Component } from 'react'

export default class Map extends Component {

    function initMap(){
        // Map options
        var options = {
          zoom:8,
          center:{lat:42.3601,lng:-71.0589}
        }
  
        // New map
        var map = new google.maps.Map(document.getElementById('map'), options);
  
        // Listen for click on map
        google.maps.event.addListener(map, 'click', function(event){
          // Add marker
          addMarker({coords:event.latLng});
        });

        var markers = [
            {
              coords:{lat:40.233845,lng:-111.658531},
              iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
              content:'<h1>PROVO</h1>'
            },
            {
              coords:{lat:30.615011,lng:-96.342476},
              content:'<h1>TEXAS</h1>'
            },
            {
              coords:{lat:24.691402,lng:-81.189682}
            }
          ];
    
          // Loop through markers
          for(var i = 0;i < markers.length;i++){
            // Add marker
            addMarker(markers[i]);
          }
    
          // Add Marker Function
          function addMarker(props){
            var marker = new google.maps.Marker({
              position:props.coords,
              map:map,
              //icon:props.iconImage
            });
    
            // Check for customicon
            if(props.iconImage){
              // Set icon image
              marker.setIcon(props.iconImage);
            }
    
            // Check content
            if(props.content){
              var infoWindow = new google.maps.InfoWindow({
                content:props.content
              });
    
              marker.addListener('click', function(){
                infoWindow.open(map, marker);
              });
            }
          }
        }
  
        
  render() {
    return (
      <div>
        <h1>My Google Map</h1>
        
        {initMap}

      </div>
    )
  }
}
