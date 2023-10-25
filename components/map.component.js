import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_DEFAULT, UrlTile, Polyline, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import polyline from '@mapbox/polyline';
import { apiKey } from '../config';
import {ActivityIndicator, StyleSheet, Touchable, TouchableOpacity, View} from "react-native";

function MapComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  const GRAPHOPPER_API_KEY = apiKey;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        setIsLoading(false);
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
      setIsLoading(false);

      fetchRoute(
        { latitude: 48.59063, longitude: 7.77795 },
        { latitude: 48.5839, longitude: 7.7445 },
        { latitude: 48.58111, longitude: 7.74151 },
        { latitude: 48.581933, longitude: 7.750512 },
      ).then(()=>{setIsLoading(false)});
      setIsLoading(false);
    })();
  }, []);

  const convert_to_object = (coord) => {
    return { latitude: coord[0], longitude: coord[1] };
  };

  const remove_duplicates = (coords) => {
    const seen = new Set();
    const unique_coords = coords.filter(coord => {
      const lat_long_str = `${coord.latitude},${coord.longitude}`;
      if (!seen.has(lat_long_str)) {
        seen.add(lat_long_str);
        return true;
      }
      return false;
    });
    return unique_coords;
  };

  const fetchRoute = async (start, middle, middle2, end) => {
    try {
      const response = await axios.get(`https://graphhopper.com/api/1/route?point=${start.latitude},${start.longitude}&point=${middle.latitude},${middle.longitude}&point=${middle2.latitude},${middle2.longitude}&point=${end.latitude},${end.longitude}&vehicle=car&locale=de&calc_points=true&key=${GRAPHOPPER_API_KEY}`);
      if (response.data && response.data.paths && response.data.paths[0] && response.data.paths[0].points) {
        const decodedPoints = polyline.decode(response.data.paths[0].points).map(convert_to_object);
        const uniqueCoords = remove_duplicates(decodedPoints);
        setRouteCoordinates(uniqueCoords);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Erreur dans la demande d'itinéraire: ", error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    isLoading ? (
      <View>
        {isLoading ? (
          <View style={styles.loadingContainer} onTouchStart={() => {setIsLoading(false)}}>
            <ActivityIndicator size="large" color="#ED7449" style={styles.actid} />
          </View>
        ) : null}
      </View>
      ) : (
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_DEFAULT}
        initialRegion={location ? {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        } : undefined}
      >
        <UrlTile
          urlTemplate="http://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
        />
        {routeCoordinates && routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#000"
            strokeWidth={3}
          />
        )}
        <Marker
          coordinate={{ latitude: 48.581933, longitude: 7.750512 }}
          title={"Cathédrale Notre-Dame de Strasbourg"}
          description={"Car vous appréciez l'architecture..."}
        />
        <Marker
          coordinate={{ latitude: 48.5839, longitude: 7.7445 }}
          title={"Baraka Jeux"}
          description={"Parce que vous aimez jouer..."}
        />
        <Marker
          coordinate={{ latitude: 48.59063, longitude:  7.77795 }}
          title={"Parc de l'Orangerie"}
          description={"Pour vous détendre avec votre livre préféré..."}
        />
        <Marker
          coordinate={{ latitude: 48.58111, longitude: 7.74151 }}
          title={"La Petite France"}
          description={"Pour une belle découverte..."}
        />
      </MapView>
    )
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  actid: {
    width: "100%",
    height: "100%",
  }

});

export default MapComponent;
