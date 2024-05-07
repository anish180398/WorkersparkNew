// LocationPickerModal.tsx
import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';

interface Props {
  onLocationSelect: (location: { latitude: number; longitude: number; }) => void;
  onClose: () => void;
}

const LocationPickerModal: React.FC<Props> = ({ onLocationSelect, onClose }) => {
  const [selectedLocation, setSelectedLocation] = React.useState<{ latitude: number; longitude: number; } | null>(null);

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <View style={styles.modalView}>
        <Text> Search</Text>
        <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />
    {selectedLocation && (
        
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={selectedLocation} />
        </MapView>
     
      )}
    
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,

  },
  map: {
    width: '100%',
    height: '100%',
    marginTop: 60,
    color:'black'
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    right: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    elevation: 2,
  },
});

export default LocationPickerModal;
