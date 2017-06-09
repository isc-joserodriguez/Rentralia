import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform  } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker,
 MarkerIcon
} from '@ionic-native/google-maps';

/**
 * Generated class for the Mapa page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class Mapa {
    public	map:	GoogleMap;
	  public	mapi:	GoogleMap;
		public mark: MarkerOptions;
		public	mapRendered:	Boolean	=	false;	
    public markerIcon: MarkerIcon="assets/icongpshome.png";
    //AIUDAAAAAA!!! :(     


constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps:GoogleMaps, public platform:Platform) {

}

ngAfterViewInit() {

this.showMap();
}
  addMarker() {

	this.map.getMyLocation().then((location)	=>	{
      let PERTH:LatLng  = new LatLng(21.952854, -104.857342);
      let	position:	CameraPosition	=	{
								target:	location.latLng,
								zoom:	15
						};
    	let	msg	=	["Aqui estoy estupida:\n",
								"Latitud:"	+	location.latLng.lat,
								"Longitud:"	+	location.latLng.lng].join("\n");

      let	markerOptionsB:	MarkerOptions	=	{
								'position':	PERTH,
								'title':	msg
						};
      this.map.addMarker(markerOptionsB).then((marker:	Marker)	=>	{
								marker.showInfoWindow();
						});


  });

     
    }
showMap(){
   var myLatlng = new LatLng(40.779502, -73.967857);

				let	location	=	new	LatLng(21.6062,	-104.3321);
				this.map	=	new	GoogleMap('map',	{
						'camera':	{
								'latLng':	location,
								'tilt':	30,
								'zoom':	15,
								'bearing':	50
						}
				});
				this.map.on(GoogleMapsEvent.MAP_READY).subscribe(()=>	{
						console.log('Map	is	ready!');
						this.mapRendered	=	true;
            this.addMarker();
            

          
				});
        

		}


getMyLocation()	{
 
				this.map.getMyLocation().then((location)	=>	{
						var	msg	=	["Aqui estoy:\n",
								"Latitud:"	+	location.latLng.lat,
								"Longitud:"	+	location.latLng.lng].join("\n");
						let	position:	CameraPosition	=	{
								target:	location.latLng,
								zoom:	15
						};
						this.map.moveCamera(position);				
						let	markerOptions:	MarkerOptions	=	{
								'position':	location.latLng,
								'title':	msg
						};
						this.map.addMarker(markerOptions).then((marker:	Marker)	=>	{
								marker.showInfoWindow();
                marker.setIcon(this.markerIcon);
						});
           
					/*		
						let	markerOptionvars2:	MarkerOptions	=	{
								'position':	'25.4779952,-105.8670338',
								'title':	msg
						};
						this.map.addMarker(markerOptions2).then((marker:	Marker)	=>	{
								marker.showInfoWindow();
						});
						*/
				});
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Mapa');
  }

}
