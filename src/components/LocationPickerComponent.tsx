// LocationPickerButton.tsx
import React, { useState } from 'react';
import { Button, View, Modal, StyleSheet, Alert, Text } from 'react-native';
import LocationPickerModal from './LocationPickerModal'; // This is the modal component we will define next
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LocationPickerButton: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{ latitude: number; longitude: number; } | null>(null);

  const handleLocationSelect = (location: { latitude: number; longitude: number; }) => {
    setSelectedLocation(location);
    setModalVisible(false);
    // You can perform other actions here, like saving the location to state or sending it to a server
  };

  return (
    <View style={styles.container}>
        <Icon name={'map-marker'} size={20} color="#C80404" />
      <Button color={'#fff'} title="Select a location" onPress={() => setModalVisible(true)} />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <LocationPickerModal onLocationSelect={handleLocationSelect} onClose={() => setModalVisible(false)} />
      </Modal>
      {/* Display selected location details */}
      {selectedLocation && (
        <View>
          <Text>Latitude: {selectedLocation.latitude}</Text>
          <Text>Longitude: {selectedLocation.longitude}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
});

export default LocationPickerButton;
