import {AfterContentInit, Component, OnInit} from '@angular/core';
import { ViewChild } from '@angular/core';
import {} from 'googlemaps';
import {IMapData} from '../../models/mapdata';
import {ActivatedRoute} from '@angular/router';
import {ILocation} from '../../models/location';

@Component({
  selector: 'app-view-locations',
  templateUrl: './view-locations.component.html',
  styleUrls: ['./view-locations.component.less']
})
export class ViewLocationsComponent implements OnInit, AfterContentInit {

  @ViewChild('gmap', { static: true }) mapElement: any;
  map: google.maps.Map;

  private mapData: IMapData;
  private centerLat: number;
  private centerLng: number;
  private centerCoordinates: google.maps.LatLng;
  private centerMarker: google.maps.Marker;
  private mapOptions: google.maps.MapOptions;
  private mapMarkers: Array<google.maps.Marker> = [];
  private mappins: Array<ILocation> = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mapData = this.route.snapshot.data.mapdata;
    this.centerLat = this.mapData.center.lat;
    this.centerLng = this.mapData.center.lng;
    this.mappins = this.mapData.mapMarkers.locations;
    this.mappins.forEach( pinInfo => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(pinInfo.locLat, pinInfo.locLng),
        map: this.map,
        title: pinInfo.locName,
      });
      this.mapMarkers.push(marker);
    });
  }

  ngAfterContentInit(): void {
    console.log('Executing ngAfterContentInit.......Initializing Map........ ');
    this.mapInit();
  }

  private mapInit(): void {
    this.centerCoordinates = new google.maps.LatLng(this.centerLat, this.centerLng);
    this.mapOptions = {
      center: this.centerCoordinates,
      zoom: 9
    };
    this.centerMarker = new google.maps.Marker({
      position: this.centerCoordinates,
      map: this.map,
    });
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    this.loadMapMarkers();
  }

  private loadMapMarkers(): void {
    this.mapMarkers.forEach( marker => {
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle(),
      });
      marker.addListener('click', () => {
        infoWindow.open(marker.getMap(), marker);
      });
      // Adding marker to google map
      marker.setMap(this.map);
    });
  }
}
