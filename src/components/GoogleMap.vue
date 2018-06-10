<template>
  <div>
    <!--<div>-->
      <!--<label>-->
        <!--<gmap-autocomplete-->
          <!--@place_changed="setPlace">-->
        <!--</gmap-autocomplete>-->
        <!--<button @click="addMarker">Add</button>-->
      <!--</label>-->
      <!--<br/>-->

    <!--</div>-->
    <br>
    <gmap-map
    :center="{lat:'_this.lat2', lng:'_this.long2'}"
      :zoom="12"
      style="width:100%;  height: 350px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :icon = "icon"
        @click="center=m.position"
      ></gmap-marker>
      <!--<marker icon="../assets/img/marker.png" ></marker>-->
    </gmap-map>
    <br>
  </div>
</template>

<script>
  const iconC = '../../static/img/marker.png'
  var iconBase = '../../static/img/';
  export default {
    name: "GoogleMap",
    props:['lat1','long1'],
    components: {
    },
    data() {
      return {
        // default to Montreal to keep it simple
        // change this to whatever makes sense
        // center: {lat: 45.508, lng: -73.587},
        center: {lat: _this.lat, lng: _this.long},
        markers: [],
        places: [],
        currentPlace: null,
        lat2:'',
        long2:'',
        icon:iconC};
    },

    created() {
      // this.geolocate();
      const marker = {
        lat: 35.70572412470452,
        lng: 51.39220750268555
      };
      console.log("this is here:",this.lat1,this.long1)
      this.lat2=this.lat1;
      this.long2=this.long1;
      console.log("this is here  xx:",this.lat2,this.long2)
      // const image = '../../static/img/marker.png';
      this.markers.push({position: marker});
      this.markers.push({icon: image});
      // this.markers.push({icon: image});
      this.center = marker;
    },
  methods: {
      // receives a place object via the autocomplete component
      setPlace(place) {
        this.currentPlace = place;
      },
      addMarker() {
        if (this.currentPlace) {
          const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
            // lat:this.lat,
            // lng:this.lng/
          };
          const image = '../../static/img/marker.png';
          this.markers.push({position: marker});
          this.markers.push({icon: image});
          this.places.push(this.currentPlace);
          this.center = marker;
          this.currentPlace = null;
        }
      },
      geolocate: function () {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
        console.log("lat:", this.lat, "lng:", this.lng)
      }
    }
  };

</script>
<style scoped>

</style>
