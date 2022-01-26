require([
    'esri/Map',
    'esri/views/MapView',
    'dijit/form/Button',
    'esri/Graphic',
    'esri/layers/GraphicsLayer',
    'esri/widgets/BasemapGallery',
    'esri/widgets/Expand',
    'esri/widgets/LayerList',
    'esri/widgets/Legend',
    'esri/widgets/Measurement',
    'esri/widgets/Search',
    'esri/symbols/PictureMarkerSymbol'
], (Map, MapView, Button, Graphic, GraphicsLayer, BasemapGallery, Expand, LayerList, Legend, Measurement, Search, PictureMarkerSymbol) => {

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
    };

    const symbol = {
        type: "picture-marker",
        url: "samolot1.png",
        width: "30px",
        height: "30px"
    };

    // const symbol = {
        // type: "simple-marker",
        // style: "x",
        // color: "blue",
        // size: 18
    // };

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

    const popupTmpl1 = {
        title: "Port Lotniczy Gdańsk im. Lecha Wałęsy",
        content: "Lotnisko to ma kod ICAO = EPGD. Międzynarodowy port lotniczy położony w gdańskiej dzielnicy Matarnia, pierwotnie nazywany Gdańsk Rębiechowo; położony 10 km od centrum Gdańska i Sopotu oraz 23 km od centrum Gdyni. Port położony jest nieopodal trójmiejskiej obwodnicy. W promieniu 100 km od niego mieszka ok. 2,5 mln osób.",
    };

    const popupTmpl2 = {
        title:"Port lotniczy Wrocław im. Mikołaja Kopernika",
        content: "Lotnisko to ma kod ICAO = EPWR. Międzynarodowy port lotniczy położony na terenie miasta Wrocławia, w odległości ok. 10 km na zachód od jego centrum, na osiedlu Strachowice. Lotnisko posiada jedną asfaltową drogę startową na kierunku 11/29 o wymiarach 2503 × 45 m, jeden międzynarodowy terminal pasażerski, jeden terminal lotnictwa ogólnego i jeden terminal cargo. Lotnisko posiada system ILS drugiej kategorii."
    };

    const popupTmpl3 = {
        title:"Lotnisko Chopina w Warszawie",
        content: "Lotnisko to ma kod ICAO = EPWA. międzynarodowy port lotniczy znajdujący się w Warszawie. Został otwarty w 1934. Obsługuje loty rozkładowe, czarterowe i cargo. Lotnisko Chopina jest położone na osiedlu Okęcie (od którego pochodzi jego zwyczajowa nazwa) w dzielnicy Włochy, w odległości około 8 km na południowy zachód od centrum miasta. Jest największym portem lotniczym w Polsce. "
        }

    const graph = new Graphic({
        geometry: geom1,
        symbol: symbol,
        attributes: attr1,
        popupTemplate: popupTmpl1
    });

    const graph2 = new Graphic({
        geometry: geom2,
        symbol: symbol,
        attributes: attr2,
        popupTemplate:popupTmpl2
    });

    const graph3 = new Graphic({
        geometry: geom3,
        symbol: symbol,
        attributes: attr3,
        popupTemplate: popupTmpl3
    })

    const g1 = new GraphicsLayer();


    g1.add(graph);
    g1.add(graph2);
    g1.add(graph3)
    map1.add(g1);

    const basemapGalleryWg = new BasemapGallery({
        view: view
    });

    const layerListWg = new LayerList({
        view: view,
    });

    const legendWg = new Legend({
        view: view
    });

    const measurementWg = new Measurement({
        view: view,
        activeTool: "distance"
    });

    const searchWg = new Search({
        view: view
    })

    const expWg = new Expand({
        view: view,
        content: basemapGalleryWg
    });

    const exp2Wg = new Expand({
        view: view,
        content: layerListWg
    })

    const exp3Wg = new Expand({
        view: view,
        content: legendWg
    })

    const exp4Wg = new Expand({
        view: view,
        content: measurementWg
    })

    const exp5Wg = new Expand({
        view:view,
        content: searchWg
    })

    view.ui.add(expWg, {position: "top-right"})
    view.ui.add(exp2Wg, {position: "bottom-right"})
    view.ui.add(exp3Wg, {position: "top-left"})
    view.ui.add(exp4Wg, {position: "top-loading"})
    view.ui.add(exp5Wg, {position: "bottom-left", index: 2})
});