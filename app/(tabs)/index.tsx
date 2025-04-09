
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking } from 'react-native';

// Mock product data
const products = [
  {
    id: 1,
    title: "Wireless Earbuds with Charging Case",
    price: 19.99,
    freeShipping: true,
    link: "https://www.aliexpress.com/item/1005001234567890.html",
    thumbnail: "https://picsum.photos/seed/earbuds/400/200",
  },
  {
    id: 2,
    title: "Portable USB Blender for Smoothies",
    price: 23.45,
    freeShipping: false,
    link: "https://www.aliexpress.com/item/1005000987654321.html",
    thumbnail: "https://picsum.photos/seed/blender/400/200",
  },
  {
    id: 3,
    title: "Mini LED Projector for Home Theater",
    price: 59.99,
    freeShipping: true,
    link: "https://www.aliexpress.com/item/1005001122334455.html",
    thumbnail: "https://picsum.photos/seed/projector/400/200",
  }
];

export default function TabOneScreen() {
  const renderItem = ({ item }: { item: typeof products[0] }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>
          ${item.price.toFixed(2)} {item.freeShipping ? "(Free Shipping)" : ""}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(item.link)}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  card: {
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#ff9900',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
