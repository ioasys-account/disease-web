import React, { useState, useRef, useEffect } from 'react';

import GoogleMapReact from 'google-map-react';
import useSupercluster from 'use-supercluster';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as MapActions } from 'store/ducks/maps';
import keys from 'utils/constants/keys';
import styles from 'utils/constants/styleGoogleMaps';
import { Body, ClusterMarker, CrimeMarker } from './stylesMap';
import LoadingFullScreen from 'componentes/core/LoadingFullScreen/';
import { formatDataClusters } from 'utils/helpers/helpers';
const Marker = ({ children }) => children;

export default function MapPresentation() {
  const mapsReducer = useSelector((state) => state.maps);
  const { data, isLoading } = mapsReducer;
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  const dispatch = useDispatch();
  const points = formatDataClusters(data);
  useEffect(() => {
    dispatch(MapActions.getInfo());
  }, [dispatch]);
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });
  return (
    <Body>
      {isLoading && <LoadingFullScreen />}
      <GoogleMapReact
        bootstrapURLKeys={{ key: keys.GOOGLE_API_KEY }}
        defaultCenter={{ lat: 52.6376, lng: -1.135171 }}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
          map.setOptions({
            styles,
          });
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
        }}
      >
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount,
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
              >
                <ClusterMarker
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`,
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </ClusterMarker>
              </Marker>
            );
          }

          return (
            <Marker
              key={`crime-${cluster.properties.crimeId}`}
              lat={latitude}
              lng={longitude}
            >
              <CrimeMarker />
            </Marker>
          );
        })}
      </GoogleMapReact>
    </Body>
  );
}
