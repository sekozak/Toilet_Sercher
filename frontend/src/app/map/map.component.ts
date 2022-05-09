import { Component, OnInit } from '@angular/core';
import { LeafletMouseEvent } from 'leaflet';
import 'leaflet-routing-machine';
//import { gzipSync } from 'zlib';

declare const L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }


  title = 'sks';
  ngOnInit() {
    if(!navigator.geolocation) {
      console.log('location is not supported');

    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const gps = [coords.latitude, coords.longitude];
      console.log(
        'lat: ${position.coords.latitude}, lng: ${position.coords.longitude}'
      );
      let map = L.map('map').setView(gps, 13);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYmlib2xpbmlvIiwiYSI6ImNsMnoxa3l5bDBtN3UzYnNiaDdmMXB6OWIifQ.pdKxhUVl6or3lv8RYmLCJQ'
      }).addTo(map);

      L.Routing.control({
        router: L.Routing.osrmv1({
          serviceUrl: `http://router.project-osrm.org/route/v1/`
        }),
        showAlternatives: true,
        lineOptions: {styles: [{color: '#242c81', weight: 7}]},
        fitSelectedRoutes: false,
        altLineOptions: {styles: [{color: '#ed6852', weight: 7}]},
        routeWhileDragging: true,
        waypoints: [
          L.latLng(gps),
          //L.latLng(gps),
          //L.latLng(57.6792, 11.949), //tu trzeba zrobić tak żeby no wiadomo co
        ]
      }).addTo(map);

      // let redIcon = L.icon({
      //   iconUrl: "/assets/red.png",
      //   iconSize:     [20, 29], // size of the icon
      //   iconAnchor:   [10, 29], // point of the icon which will correspond to marker's location
      //   popupAnchor:  [0, -29] // point from which the popup should open relative to the iconAnchor
      // });
      let marker = L.marker(gps).addTo(map); //markery
      let marke2r = L.marker([50.0792, 19.949]).addTo(map);
      marke2r.
      // map.on('click', (i:LeafletMouseEvent)=>{
      //   let marker3 = L.marker(i.latlng).addTo(map); 
      // })
      marker.bindPopup('<b>You!</>').openPopup();
    });
    this.watchPosition();
  }

  

  watchPosition() {
    let aimLat = 0;
    let aimLng = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      console.log(
        'lat: ${position.coords.latitude}, lng: ${position.coords.longitude}'
      );
      if(position.coords.latitude === aimLat) {
        navigator.geolocation.clearWatch(id);
      }
        if(position.coords.longitude === aimLng) {
          navigator.geolocation.clearWatch(id); // it stops requiring gps requests
        }
    },(err) => {
      console.log(err);
      },{
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
      }
    );
  }

}