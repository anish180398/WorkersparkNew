import React from "react";
import {
  Dimensions,
  View,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { useLayoutEffect } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar, Button, Card, Text, Searchbar } from "react-native-paper";
import LocationPicker from "../components/LocationPickerComponent";
import CardContent from "react-native-paper/lib/typescript/components/Card/CardContent";
interface ServiceItem {
  id: number;
  name: string;
  icon: string;
}

interface PropertiesProp {
  title: string;
  text: string;
  imageUrl: any;
  count: number
}
interface CarousalProp {
  title: string;
  text: string;
  imageUrl: string;
}

const plots = require('../../assets/Images/properties/plots.jpg')
const houses = require('../../assets/Images/properties/houses.jpg')
const apartments = require('../../assets/Images/properties/apartments.jpg')
const commercial = require('../../assets/Images/properties/commercial.jpg')
const shops = require('../../assets/Images/properties/shops.jpg')
const office = require('../../assets/Images/properties/office.jpg')
const pg = require('../../assets/Images/properties/pg.jpg')


const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  // Update these arrays with your data
  const [searchQuery, setSearchQuery] = React.useState("");
  const width = Dimensions.get("window").width;
  const progressValue = useSharedValue<number>(0);
  const baseOptions = 
     ({
        vertical: false,
        width: width,
        height: width * 0.5,
      } as const);
  const propertiesItems: PropertiesProp[] = [
    {
      title: "Plots",
      text: "Text 1",
      imageUrl: plots,
      count: 20
    },
    {
      title: "Houses",
      text: "Text 2",
      imageUrl: houses,
      count: 12

    },
    {
      title: "Apartments",
      text: "Text 3",
      imageUrl: apartments,
      count: 30

    },
    {
      title: "Commercial Buildings",
      text: "Text 3",
      imageUrl: commercial,
      count: 40

    },
    {
      title: "Shops",
      text: "Text 3",
      imageUrl: shops,
      count: 16

    },
    {
      title: "Office Spaces",
      text: "Text 3",
      imageUrl: office,
      count: 5

    },
    {
      title: "PG and Guest houses",
      text: "Text 3",
      imageUrl: pg,
      count: 18

    },
  ];

  const carousalItems: CarousalProp[] = [
    {
      title: "Sample",
      text: "Text 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Item 2",
      text: "Text 2",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Item 3",
      text: "Text 3",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
  const serviceItems: ServiceItem[] = [
    {id: 1, name: "Plumber", icon: "pipe" },
    {id:2,  name: "Electrician", icon: "lightbulb-outline" },
    { id:3,name: "Cleaner", icon: "vacuum" },
    {id:4, name: "Painter", icon: "format-paint" },
    {id:5, name: "Carpentor", icon: "tools" },
    { id:6,name: "Construction", icon: "account-hard-hat" },
    { id:7,name: "AC & Fridge", icon: "air-conditioner" },
    {id:8, name: "Mechanic", icon: "car-wrench" },
  ];
const Spacer = <View style={{height:height*0.01}}></View>
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Add functionality to navigate to the Profile page
  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };

  // Add functionality to handle search queries
  const handleSearch = (query: string) => {
    // Implement your search logic
  };

  const CarousalComponent = (item: CarousalProp) => {
    return (
      <View style={{alignItems:'center', justifyContent:'center'}}><View style={{width: '90%' ,backgroundColor: '#032873', padding:10, height:'100%', borderRadius: 25}}>
      <Text style={{color:'#fff'}}>{item.title}</Text>
    </View></View>
      
    );
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.serviceItem}
      onPress={() => navigation.navigate("Category", { categoryId: item.id })}

    >
      <View style={styles.iconContainer}>
        <Icon name={item.icon} size={40} color="#fff" />
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <LocationPicker />
      <TouchableOpacity onPress={navigateToProfile}>
        <Icon name="account-circle" size={40} color="#fff" />
      </TouchableOpacity>
    </View>

    <View style={styles.sectionContainer}>
      <Carousel
        {...baseOptions}
        data={carousalItems}
        renderItem={({ index, item }) => <CarousalComponent {...item} />}
      />
    </View>
{Spacer}
    <View style={styles.sectionContainer}>
      <Text style={{ paddingHorizontal: 20, fontSize: 16, fontWeight: '600' }}>Categories</Text>
      <FlatList
        data={serviceItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        contentContainerStyle={styles.serviceGrid}
      />
    </View>
    {Spacer}

    <View style={styles.sectionContainer}>
      <Text style={{ paddingHorizontal: 20, marginVertical:5, fontSize: 16, fontWeight: '600', }}>Properties</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.propertyGrid}>
        {propertiesItems.map((item, index) => (
          <Card key={index} style={styles.propertyCard}>
            <Card.Cover source={item.imageUrl} style={styles.cardImage} />
            <Card.Content>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </Card.Content>
            <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name={'map-marker'} size={20} color="#C80404" />
              <Text style={styles.cardText}>{item.count} nearby</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 0, // Ensure there's no padding causing the issue
    margin: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 0.05 * width,
    paddingTop: 0.01 * height,
    paddingBottom: 0.01 * height,

    marginBottom: 0.02 * height,

    backgroundColor: '#07329B'
  },
  sectionContainer: {
    // flex: 1,
    paddingHorizontal: 0,
  },
  serviceGrid: {
    flexGrow: 1,
  },
  serviceItem: {
    margin: 5,
    width: width * 0.23, // 23% of screen width
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#032873',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
     margin: 0, // No extra margins
  },
  itemText: {
    color: '#000',
    fontSize: width < 350 ? 10 : 12, // smaller font size for smaller screens
    fontWeight: '400',
    marginTop: 5,
  },
  propertyGrid: {
    flexDirection: "row",
    marginHorizontal:20
  },
  propertyCard: {
    width: width * 0.6, // 70% of screen width for cards
    marginRight: 16,
    borderRadius: 10,
    backgroundColor:'#fff',
    borderColor:'#DEDEDE',
    borderWidth:1,
  },
  cardImage: {
    height: 0.15 * height, // 20% of screen height
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#666",
  },
  flatListStyle: {
    paddingLeft: 0, // Ensure there is no padding causing alignment issues
  },
  scrollViewStyle: {
    marginHorizontal: 0, // Ensure there is no margin causing alignment issues
  },
});

export default HomeScreen;
