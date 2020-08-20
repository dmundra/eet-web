var southwestrussia_baseoverlay = null;

$(document).ready(function() {
  // Initialize the map on the "map" div with a given center and zoom.
  var map = L.map('map', {
    center: [50.0642, 27.2656],
    zoom: 5
  });

  var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);

  var stamen_watercolor = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'
  });

  var stamen_toner = L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>'
  });

  harvard_baseoverlay = L.tileLayer('http://hh.worldmap.harvard.edu/registry/hypermap/layer/6016cc07-bf99-49d2-958c-a315caeaab5d/map/wmts/jewish_settlement_russia_1816/default_grid/{z}/{x}/{y}.png', {
    attribution: 'Historical map tiles by <a href="http://madmappers.com/">MadMappers</a>.'
  }).addTo(map);

  var style1 = {
    "color": "#F81F05",
    "weight": 3,
  };
  var style2 = {
    "color": "#054BF8",
    "weight": 3,
  };
  var style3 = {
    "color": "#F37D4D",
    "weight": 3,
  };
  var style4 = {
    "color": "#F50B4D",
    "weight": 3,
  };
  var style5 = {
    "color": "#F88605",
    "weight": 3,
  };
  var style6 = {
    "color": "#F85A05",
    "weight": 3,
  };
  var style7 = {
    "color": "#8A2BE2",
    "weight": 3,
  };
  var style8 = {
    "color": "#215CED",
    "weight": 3,
  };

  // Village explusions.
  var geojsonLayer1 = new L.GeoJSON.AJAX("geojson/harvard/grodno_gubernia_nwt.geojson", { style: style3 });
  var geojsonLayer2 = new L.GeoJSON.AJAX("geojson/harvard/vitbesk_mogllev_village_expulsion_1823_0yb.geojson", { style: style3 });
  var geojsonLayer3 = new L.GeoJSON.AJAX("geojson/harvard/chernigov_village_expulsion_1825_6nw.geojson", { style: style3 });
  // The emerging Pale of Settlement.
  var geojsonLayer4 = new L.GeoJSON.AJAX("geojson/harvard/pale_of_settlement_1818_a5r.geojson", { style: style6 }).addTo(map);
  var geojsonLayer5 = new L.GeoJSON.AJAX("geojson/harvard/pale_of_settlement_1809_1815_jpa.geojson", { style: style1 });
  var geojsonLayer6 = new L.GeoJSON.AJAX("geojson/harvard/pale_of_settlement_1807_51a.geojson", { style: style6 });
  var geojsonLayer7 = new L.GeoJSON.AJAX("geojson/harvard/pale_of_settlement_1804_y3v.geojson", { style: style6 });
  var geojsonLayer8 = new L.GeoJSON.AJAX("geojson/harvard/emerging_pale_1800_lxe.geojson", { style: style6 });
  var geojsonLayer9 = new L.GeoJSON.AJAX("geojson/harvard/jewish_residence_after_the_second_partit_g3a.geojson", { style: style6 });
  var geojsonLayer10 = new L.GeoJSON.AJAX("geojson/harvard/jewish_residence_1791_hn1.geojson", { style: style6 });
  // Non-partition acquisitions
  var geojsonLayer11 = new L.GeoJSON.AJAX("geojson/harvard/bessarabia_k0j.geojson", { style: style5 });
  var geojsonLayer12 = new L.GeoJSON.AJAX("geojson/harvard/congress_poland_1815_l09.geojson", { style: style5 });
  var geojsonLayer13 = new L.GeoJSON.AJAX("geojson/harvard/tarnopol_addition_9va.geojson", { style: style5 });
  var geojsonLayer14 = new L.GeoJSON.AJAX("geojson/harvard/bialystock_oblast_to2.geojson", { style: style5 });
  var geojsonLayer15 = new L.GeoJSON.AJAX("geojson/harvard/novorossiya_1792_6no.geojson", { style: style5 });
  // Partitions of Poland-Lithuania
  var geojsonLayer16 = new L.GeoJSON.AJAX("geojson/harvard/first_austrian_partition_1772_hso.geojson", { style: style3 });
  var geojsonLayer17 = new L.GeoJSON.AJAX("geojson/harvard/first_austrian_partition_1772_9np.geojson", { style: style3 });
  var geojsonLayer18 = new L.GeoJSON.AJAX("geojson/harvard/third_russian_partition_of_poland_lithua_dfa.geojson", { style: style2 });
  var geojsonLayer19 = new L.GeoJSON.AJAX("geojson/harvard/second_russian_partition_of_poland_lithu_eze.geojson", { style: style2 });
  var geojsonLayer20 = new L.GeoJSON.AJAX("geojson/harvard/first_russian_partition_of_poland_lithua_duv.geojson", { style: style2 });
  // Commonwealth of Polish-Lithuanian
  var geojsonLayer21 = new L.GeoJSON.AJAX("geojson/harvard/polish_lithuanian_commonwealth_1667_1772_428.geojson", { style: style7 });

  var baseMaps = {
    "Stamen Toner": stamen_toner,
    "Stamen Watercolor": stamen_watercolor,
    "OpenStreetMap": osm,
  };

  var overlayMaps = {
    "General": {
      "Podrobnaia karta Rossijskoj Imperii 1804-1816": harvard_baseoverlay
    },
    "Commonwealth of Polish-Lithuanian": {
      "Polish-Lithuanian 1667-1772": geojsonLayer21,
    },
    "Partitions of Poland-Lithuania": {
      "1st. Russian partition 1772": geojsonLayer20,
      "2nd. Russian partition 1793": geojsonLayer19,
      "3rd Russian partition 1795": geojsonLayer18,
      "1st. Austrian partition 1772": geojsonLayer17,
      "Austrian Galicia 1809": geojsonLayer16,
    },
    "Non-partition acquisitions": {
      "Novorossiya 1792": geojsonLayer15,
      "Bialystock oblast 1807": geojsonLayer14,
      "Tarnopol Addition 1809-1815": geojsonLayer13,
      "Congress Poland 1815": geojsonLayer12,
      "Bessarabia": geojsonLayer11,
    },
    "The emerging Pale of Settlement": {
      "Jews in Russia 1791": geojsonLayer10,
      "Jewish residence after the 2nd partition 1794": geojsonLayer9,
      "Emerging Pale 1800": geojsonLayer8,
      "Pale of Settlement 1804": geojsonLayer7,
      "Pale of Settlement 1807": geojsonLayer6,
      "Pale of Settlement 1809-1815": geojsonLayer5,
      "Pale of Settlement 1818": geojsonLayer4,
    },
    "Village explusions": {
      "Chernigov gubernia 1821": geojsonLayer3,
      "Vitbesk-Mogllev gubernii 1823": geojsonLayer2,
      "Grodno gubernia 1827": geojsonLayer1,
    },
  };

  L.control.groupedLayers(baseMaps, overlayMaps, {collapsed:false}).addTo(map);

  // Really hacky opacity slider.
  $("span:contains('Podrobnaia karta Rossijskoj Imperii 1804-1816')").html(' Podrobnaia karta Rossijskoj Imperii 1804-1816<br/><input id="slide" type="range" min="0" max="1" step="0.1" value="1.0" oninput="harvard_baseoverlay.setOpacity(this.value)">');

  $('.leaflet-control-layers').hide();
  $('.leaflet-control-layers').css('top','30px');

  btn.onclick = function() {
    $('.leaflet-control-layers').toggle();
  }

});
