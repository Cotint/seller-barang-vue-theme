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
      :center="center"
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
    components: {
    },
    data() {
      return {
        // default to Montreal to keep it simple
        // change this to whatever makes sense
        center: {lat: 45.508, lng: -73.587},
        markers: [],
        places: [],
        currentPlace: null,
        icon:iconC};
    },

    mounted() {
      // this.geolocate();
      const marker = {
        lat: 45.508,
        lng: -73.587
      };
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
