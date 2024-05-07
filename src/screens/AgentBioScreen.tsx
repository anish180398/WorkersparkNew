import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Modal, TouchableOpacity, Linking } from 'react-native';
import { Avatar, Card, Title,Button, Paragraph } from 'react-native-paper';

const AgentBioScreen = ({ route }) => {
  const { agentId } = route.params; // Assuming agentId is passed as a parameter
  const [modalVisible, setModalVisible] = useState(false);

  // Sample data
  const agentDetails = {
    name: 'Beverly Jones',
    service: "Beverly's Cleaning Service",
    rating: 5,
    reviewCount: 1211,
    earned: '$20k+',
    jobsCompleted: 170,
    hoursWorked: 677,
    phoneNumber:'8939799002',
    bio: 'I have been in business for 8 years. My business is a family business and for...',
    avatarUrl: 'https://via.placeholder.com/150', // Use actual image URL
    photos: [
      { uri: 'https://via.placeholder.com/150' },
      { uri: 'https://via.placeholder.com/150' },
      { uri: 'https://via.placeholder.com/150' },
    ]
  };
  const makePhoneCall = (phoneNumber) => {
    let phoneURL = `tel:${phoneNumber}`;
    Linking.canOpenURL(phoneURL)
      .then((supported) => {
        if (!supported) {
          console.log("Phone number is not available");
        } else {
          return Linking.openURL(phoneURL);
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <ScrollView style={styles.container}>
      <Avatar.Image size={80} source={{ uri: agentDetails.avatarUrl }} style={styles.avatar} />
      <Text style={styles.name}>{agentDetails.name}</Text>
      <Text style={styles.service}>{agentDetails.service}</Text>
      <View style={styles.rating}>
        <Text>{`${agentDetails.rating} Stars (${agentDetails.reviewCount} Reviews)`}</Text>
      </View>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{agentDetails.earned}</Text>
          <Text style={styles.statLabel}>Total Earned</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{agentDetails.jobsCompleted}</Text>
          <Text style={styles.statLabel}>Jobs Completed</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{agentDetails.hoursWorked}</Text>
          <Text style={styles.statLabel}>Hours Worked</Text>
        </View>
      </View>
      <Text style={styles.descTitle}>About this pro</Text>

      <Text style={styles.bio}>{agentDetails.bio}</Text>
      <Card style={styles.card}>
        <Card.Title title="Photos and Videos" />
        <Card.Content style={styles.photosContainer}>
          {agentDetails.photos.map((photo, index) => (
            <Image key={index} source={{ uri: photo.uri }} style={styles.photo} />
          ))}
        </Card.Content>
      </Card>
      <Button mode='contained' icon="phone" buttonColor='green' onPress={() => setModalVisible(true)} >Contact me</Button>

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Contact {agentDetails.name}</Text>
         <View style={{flexDirection:'row', gap:10}}> 
          <Button icon={'phone'} buttonColor='green' textColor='#fff' onPress={() => makePhoneCall(agentDetails.phoneNumber)} style={styles.button}>Call Now</Button>
        
        <Button icon='close'
        style={styles.button} buttonColor='red' textColor='#fff' onPress={() => setModalVisible(false)} >Close</Button></View>
          
        </View>
      </View>
    </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  avatar: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  service: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 5,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  bio: {
    fontSize: 16,
    marginBottom: 20,
  },
  descTitle: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight:'600'
  },
  card: {
    marginBottom: 20,
  },
  photosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  contactButton: {
    backgroundColor: 'red', // Change to your theme's color
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
   marginVertical:5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:20,
    fontWeight:'500'
  }
});

export default AgentBioScreen;
