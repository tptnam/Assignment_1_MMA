import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  ActivityIndicator,
} from "react-native";

const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          "https://assignment2-mma301-default-rtdb.asia-southeast1.firebasedatabase.app/menuItems.json"
        );
        const data = await response.json();

        // Transform the fetched data into the desired format
        const transformedData = Object.keys(data).map((key) => ({
          title: data[key].title,
          data: data[key].data,
        }));

        setMenuItems(transformedData);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const renderItem = ({ item }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{item.name}</Text>
      <Text style={menuStyles.itemText}>{item.price}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyles.sectionHeader}>
      <Text style={menuStyles.sectionHeaderText}>{title}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={menuStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#c0a73a" />
      </View>
    );
  }

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItems}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "#c0a73a",
    fontSize: 20,
  },
  sectionHeader: {
    backgroundColor: "#f3d032",
  },
  sectionHeaderText: {
    fontSize: 24,
    color: "#333333",
    fontWeight: "bold",
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MenuItems;
