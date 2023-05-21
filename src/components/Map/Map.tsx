import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';

const MapComponent = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  let map: Map | null = null;

  useEffect(() => {
    if (mapContainerRef.current) {
      map = new Map({
        target: mapContainerRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([-118.416647, 34.270993]),
          zoom: 13,
        }),
      });

      const marker = new Feature({
        geometry: new Point(fromLonLat([-118.416647, 34.270993])),
      });

      const markerStyle = new Style({
        image: new Icon({
          src: 'https://openlayers.org/en/latest/examples/data/icon.png',
          scale: 0.5,
        }),
      });

      marker.setStyle(markerStyle);

      const vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: [marker],
        }),
      });

      map.addLayer(vectorLayer);
    }

    return () => {
      if (map) {
        map.setTarget(undefined);
      }
    };
  }, []);

  const containerStyle = {
    width: '1200px',
    height: '400px',
    margin: '0 auto',
    borderRadius: '10px', // Add border-radius for curved edges
    overflow: 'hidden', // Hide overflow to hide the curved parts of the map
  };

  return <div ref={mapContainerRef} style={containerStyle}></div>;
};

export default MapComponent;
