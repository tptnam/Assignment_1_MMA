import React from "react";

import { View, Text, StyleSheet } from "react-native";
import SectionList from "react-native/Libraries/Lists/SectionList";

// const menuItemsToDisplay = [
//   { name: 'Hummus', price: '$5.00', id: '1A' },
//   { name: 'Moutabal', price: '$5.00', id: '2B' },
//   { name: 'Falafel', price: '$7.50', id: '3C' },
//   { name: 'Marinated Olives', price: '$5.00', id: '4D' },
//   { name: 'Kofta', price: '$5.00', id: '5E' },
//   { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
//   { name: 'Lentil Burger', price: '$10.00', id: '7G' },
//   { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
//   { name: 'Kofta Burger', price: '$11.00', id: '9I' },
//   { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
//   { name: 'Fries', price: '$3.00', id: '11K' },
//   { name: 'Buttered Rice', price: '$3.00', id: '12L' },
//   { name: 'Bread Sticks', price: '$3.00', id: '13M' },
//   { name: 'Pita Pocket', price: '$3.00', id: '14N' },
//   { name: 'Lentil Soup', price: '$3.75', id: '15O' },
//   { name: 'Greek Salad', price: '$6.00', id: '16Q' },
//   { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
//   { name: 'Baklava', price: '$3.00', id: '18S' },
//   { name: 'Tartufo', price: '$3.00', id: '19T' },
//   { name: 'Tiramisu', price: '$5.00', id: '20U' },
//   { name: 'Panna Cotta', price: '$5.00', id: '21V' },
// ];

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

// const MenuItems = () => {
//   const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

//   return (
//     <View style={menuStyles.container}>
//       <FlatList
//         data={menuItemsToDisplay}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}></FlatList>
//     </View>
//   );
// };

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyles.sectionHeader}>
      <Text style={menuStyles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
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
});

export default MenuItems;
