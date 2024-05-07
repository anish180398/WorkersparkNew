import React,{useState} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Card, Button, Avatar, IconButton, Modal, Portal } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { height } = Dimensions.get('window');
const topSectionHeight = height * 0.25; // 25% of screen height

const CategoryScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const data = [
    {
      id: '1',
      name: 'James Pinto',
      service: 'Floor Cleaning',
      date: '22 Mar 2022, Sunday',
      time: '8:00 AM',
      price: '$40',
      rating: '4.7',
      avatarUrl: 'https://via.placeholder.com/150',  // Use actual image URL
      inProgress: true,
    },
    {
        id: '2',
        name: 'James Pinto',
        service: 'Floor Cleaning',
        date: '22 Mar 2022, Sunday',
        time: '8:00 AM',
        price: '$40',
        rating: '4.7',
        avatarUrl: 'https://via.placeholder.com/150',  // Use actual image URL
        inProgress: true,
      },
      {
        id: '3',
        name: 'James Pinto',
        service: 'Floor Cleaning',
        date: '22 Mar 2022, Sunday',
        time: '8:00 AM',
        price: '$40',
        rating: '4.7',
        avatarUrl: 'https://via.placeholder.com/150',  // Use actual image URL
        inProgress: true,
      },
      {
        id: '4',
        name: 'James Pinto',
        service: 'Floor Cleaning',
        date: '22 Mar 2022, Sunday',
        time: '8:00 AM',
        price: '$40',
        rating: '4.7',
        avatarUrl: 'https://via.placeholder.com/150',  // Use actual image URL
        inProgress: true,
      },
      {
        id: '5',
        name: 'James Pinto',
        service: 'Floor Cleaning',
        date: '22 Mar 2022, Sunday',
        time: '8:00 AM',
        price: '$40',
        rating: '4.7',
        avatarUrl: 'https://via.placeholder.com/150',  // Use actual image URL
        inProgress: true,
      },
      {
        id: '6',
        name: 'James Pinto',
        service: 'Floor Cleaning',
        date: '22 Mar 2022, Sunday',
        time: '8:00 AM',
        price: '$40',
        rating: '4.7',
        avatarUrl: 'https://via.placeholder.com/150',  // Use actual image URL
        inProgress: true,
      },
      {
        id: '7',
        name: 'James Pinto',
        service: 'Floor Cleaning',
        date: '22 Mar 2022, Sunday',
        time: '8:00 AM',
        price: '$40',
        rating: '4.7',
        avatarUrl: 'https://via.placeholder.com/150',  // Use actual image URL
        inProgress: true,
      },
      {
        id: '8',
        name: 'James Pinto',
        service: 'Floor Cleaning',
        date: '22 Mar 2022, Sunday',
        time: '8:00 AM',
        price: '$40',
        rating: '4.7',
        avatarUrl: 'https://via.placeholder.com/150',  // Use actual image URL
        inProgress: true,
      },
    // Add more entries as needed
  ];
  // Fetch category data based on `categoryId` or use it to render conditionally

  const renderItem:React.FC<any> = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.leftContainer}>
          <Avatar.Image size={48} source={{ uri: item.avatarUrl }} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.service}>{item.service}</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={20} color="#FFD700" />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <Icon name="heart-outline" size={24} onPress={() => {/* handle favorite */}} />
        </View>
      </Card.Content>
    </Card>
    </TouchableOpacity>
  );

  const handlePress = (agentId) => {
    navigation.navigate('AgentBio', { agentId: agentId });
  };
  
  return (
    <View style={styles.container}>
      <View style={[styles.topSection, { height: topSectionHeight }]}>
        <Text style={styles.title}>Category ID: {categoryId}</Text>
        <Button icon="filter" mode="contained" onPress={showModal}>
          Filter
        </Button>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        scrollEnabled={true}
        scrollToOverflowEnabled={false}
      />
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
          {/* Add filter options here */}
          <Text>Filter Modal</Text>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,
  },


  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  service: {
    fontSize: 14,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
  },
  rightContainer: {
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  topSection: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  card: {
    marginBottom: 10,
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
  },
});

export default CategoryScreen;
