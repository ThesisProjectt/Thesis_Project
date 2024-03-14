import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

const Map = (props) => {
  const mapRef = useRef();

  const initial_Region = {
    latitude: 36.894404976046154,
    longitude: 10.1868000326626,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };

  return (
      <View style={styles.mapContainer}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation
          showsMyLocationButton
          showsCompass
          initialRegion={initial_Region}
          region={initial_Region}
          onLongPress={props.handleOnLongPress}
          onPress={()=>props.setMark(false)}
          mapType="standard"
          userLocationAnnotationTitle
          zoomControlEnabled
          onUserLocationChange={props.onRegionChange}
        >
          {props.mark ? (
            <Marker
              coordinate={{
                latitude: props.region.latitude,
                longitude: props.region.longitude,
              }}
              draggable
              onDragEnd={props.handleOnLongPress}
            >
              <Ionicons name="location" size={30} color={"red"} />
            </Marker>
          ) : null}
        </MapView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFFFFD",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    // ...StyleSheet.absoluteFill,
    height: 450,
    width: "100%"
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 126,
    height: 126,
    borderRadius: 20,
    elevation: 4,
  },
});

export default Map;
