export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYW50aGllbjMwIiwiYSI6ImNrcjVoM2V2YzAxY2wyd3BmbGQza2g5dHYifQ.nSDTx8ty9vfBp6Yp5JhoIA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/anthien30/ckr5hkzcn1fcj17qh695s2pvi',
    scrollZoom: false,
    // center: [-118, 34],
    // zoom: 4,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // add popup
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // extends map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
