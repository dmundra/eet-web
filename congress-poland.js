var congresspoland_baseoverlay = null;

$(document).ready(function() {
  // Initialize the map on the "map" div with a given center and zoom.
  var map = L.map('map', {
    center: [52.593, 22.698],
    zoom: 7
  });

  var hash = new L.Hash(map);

  var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);

  var stamen_watercolor = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'
  });

  var stamen_toner = L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>'
  });

  congresspoland_baseoverlay = L.tileLayer('layerdata/congresspoland/{z}/{x}/{-y}.png', {
    attribution: 'Historical map tiles by <a href="https://maps.hungaricana.hu/en/HTITerkeptar/32666/view/?bbox=-6403%2C-15316%2C18214%2C319">https://maps.hungaricana.hu/en/HTITerkeptar/32666/view/?bbox=-6403%2C-15316%2C18214%2C319</a>'
  }).addTo(map);

  var style1 = {
    "color": "#F4630E",
    "weight": 3,
  };
  var style2 = {
    "color": "#0F0FDA",
    "weight": 3,
  };
  var style3 = {
    "color": "#F10683",
    "weight": 3,
  };
  var style4 = {
    "color": "#F50B4D",
    "weight": 3,
  };
  var style5 = {
    "color": "#F56905",
    "weight": 3,
  };
  var style6 = {
    "color": "#3410E9",
    "weight": 3,
  };
  var style7 = {
    "color": "#8A2BE2",
    "weight": 3,
  };
  var yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var geojsonLayer1 = new L.GeoJSON.AJAX("geojson/jewish_communities_of_congress_poland.geojson", {}).addTo(map);

  var baseMaps = {
    "Stamen Toner": stamen_toner,
    "Stamen Watercolor": stamen_watercolor,
    "OpenStreetMap": osm,
  };

  var overlayMaps = {
    "General": {
      "Base": congresspoland_baseoverlay,
    },
    "Jews in Poland": {
      "Jewish communities of Congress Poland": geojsonLayer1,
    },
  };

  L.control.groupedLayers(baseMaps, overlayMaps, {collapsed:false}).addTo(map);

  // Really hacky opacity slider.
  $("span:contains('Base')").html(' Base<br/><input id="slide" type="range" min="0" max="1" step="0.1" value="1.0" oninput="congresspoland_baseoverlay.setOpacity(this.value)">');

  $('.leaflet-control-layers').hide();
  $('.leaflet-control-layers').css('top','30px');

  btn.onclick = function() {
    $('.leaflet-control-layers').toggle();
  }

});
