require([
    'esri/Map',
    'esri/views/MapView',
    'dijit/form/Button',
    'esri/Graphic',
    'esri/layers/GraphicsLayer'
], (Map, MapView, Button, Graphic, GraphicsLayer) => {

    const map1 = new Map({
        basemap: "osm"
    });

    const view = new MapView({
        map:map1,
        container:"mapDiv",
        zoom:6,
        center: [19,52]
    });

    const btn1 = document.getElementById("btn1");

    const btn2 = document.getElementById("btn2");

    const btn3 = document.getElementById("btn3");

    btn1.addEventListener("click", function(){
        view.center = [18.45966, 54.37317],
        view.zoom = 14
    })

    btn2.addEventListener("click", function(){
        view.center = [16.8757, 51.1076],
        view.zoom = 14
    })

    btn3.addEventListener("click", function(){
        view.center = [20.97521, 52.16963],
        view.zoom = 15
    })

    const geom1 = {
        type: "point",
        longitude: 18.4749,
        latitude: 54.3762
    };

    const geom2 = {
        type: "point",
        longitude: 16.8757,
        latitude: 51.1076
    };

    const geom3 = {
        type: "point",
        longitude: 20.97521,
        latitude: 52.16963
    }

    const symbol = {
        type: "simple-marker",
        style: "x",
        color: "blue",
        size: 18
    };

    const attr1 = {
        name: "Lotnisko Gdańsk",
        code: "EPGD"
    };

    const attr2 = {
        name: "Lotnisko Wrocław",
        code: "EPWR"
    };

    const attr3 = {
        name: "Lotnisko Warszawa",
        code: "EPWA "
    }

    const graph = new Graphic({
        geometry: geom1,
        symbol: symbol,
        attributes: attr1
    });

    const graph2 = new Graphic({
        geometry: geom2,
        symbol: symbol,
        attributes: attr2
    });

    const graph3 = new Graphic({
        geometry: geom3,
        symbol: symbol,
        attributes: attr3
    })

    const g1 = new GraphicsLayer();


    g1.add(graph);
    g1.add(graph2);
    g1.add(graph3)
    map1.add(g1);

});