import { Component, OnInit } from '@angular/core';
import { LeafletMouseEvent } from 'leaflet';
import 'leaflet-routing-machine';
import { StorageService } from '../storage.service';
import { Toilet } from '../toilet';

declare const L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public toiletList : Toilet[] = []
  title = 'sks';

  public static gps:number[]|undefined; 
  public static map:any; 
  public static route:any;
  constructor(private toiletService : StorageService) {
    navigator.geolocation.getCurrentPosition((position) => {
      MapComponent.gps = [position.coords.latitude, position.coords.longitude];
      MapComponent.map = L.map('map').setView(MapComponent.gps, 13);
    })
   }

  ngOnInit() {
    this.toiletService.getToilets().subscribe(data => {
      this.toiletList = data;
      this.initMap();
    })
  }

  public target:number[]=[0, 0];

  initMap(){

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYmlib2xpbmlvIiwiYSI6ImNsMnoxa3l5bDBtN3UzYnNiaDdmMXB6OWIifQ.pdKxhUVl6or3lv8RYmLCJQ'
      }).addTo(MapComponent.map);

      let redIcon = L.icon({
        iconUrl: "/assets/red.png",
        iconSize:     [25, 35], // size of the icon
        iconAnchor:   [10, 29], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -29] // point from which the popup should open relative to the iconAnchor
      });

      let marker = L.marker(MapComponent.gps,{icon: redIcon}).addTo(MapComponent.map); //markery
      marker.bindPopup('<b>You!</>').openPopup();

      this.toiletList.forEach(t => {
        let marke2r = L.marker([t.coordinates.lat, t.coordinates.lng]).on('click', function(e:any){
            if(MapComponent.route!=null) {MapComponent.map.removeControl(MapComponent.route);}
            MapComponent.route = L.Routing.control({
              router: L.Routing.osrmv1({
                serviceUrl: `http://router.project-osrm.org/route/v1/`
              }),
              showAlternatives: true,
              lineOptions: {styles: [{color: '#242c81', weight: 7}]},
              fitSelectedRoutes: false,
              altLineOptions: {styles: [{color: '#ed6852', weight: 7}]},
              routeWhileDragging: false,
              waypoints: [
                L.latLng(MapComponent.gps),
                L.latLng(e.latlng)
              ]
            }).addTo(MapComponent.map);
        });
        console.log(t.coordinates.lat, t.coordinates.lng);
        marke2r.bindPopup(t.name).openPopup();
        marke2r.addTo(MapComponent.map);
      })


     MapComponent.map.on('click', (i:LeafletMouseEvent)=>{
      MapComponent.map.removeControl(MapComponent.route);
    });
    
    this.watchPosition();
  }


  update(t:number[]){
      this.target=t;
      console.log(this.target);
      if(MapComponent.route!=null) {MapComponent.map.removeControl(MapComponent.route);}
      MapComponent.route = L.Routing.control({
        router: L.Routing.osrmv1({
          serviceUrl: `http://router.project-osrm.org/route/v1/`
        }),
        showAlternatives: true,
        lineOptions: {styles: [{color: '#242c81', weight: 7}]},
        fitSelectedRoutes: false,
        altLineOptions: {styles: [{color: '#ed6852', weight: 7}]},
        routeWhileDragging: false,
        waypoints: [
          L.latLng(MapComponent.gps),
          L.latLng(this.target)
        ]
      }).addTo(MapComponent.map);
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