require([
    'esri/Map',
    'esri/views/MapView'
], (Map, MapView) => {

    const map1 = new Map({
        basemap: "osm"
    });

    const view = new MapView({
        map:map1,
        container:"mapDiv",
        zoom:3
    });

    const legend = new Legend({
        view: view
    });

    view.ui.add(legend, {position: "top-right"});

});