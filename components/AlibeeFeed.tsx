
import React from 'react';
import { Dimensions, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { height, width } = Dimensions.get('window');

const mockProducts = [
  {
    id: '1',
    title: 'Wireless Earbuds',
    price: '$19.99',
    freeShipping: true,
    image: 'https://picsum.photos/id/1015/400/700',
  },
  {
    id: '2',
    title: 'USB Blender',
    price: '$23.45',
    freeShipping: false,
    image: 'https://picsum.photos/id/1011/400/700',
  },
  {
    id: '3',
    title: 'Mini Tripod',
    price: '$9.99',
    freeShipping: true,
    image: 'https://picsum.photos/id/1018/400/700',
  },
];

export default function TikTokFeed() {
  return (
    <Carousel
      loop
      vertical
      width={width}
      height={height}
      data={mockProducts}
      renderItem={({ item }) => (
        <View style={styles.page}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.overlay}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>
              {item.price} {item.freeShipping && <Text style={styles.free}> (Free Shipping)</Text>}
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  page: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    width,
    height,
    position: 'absolute',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    color: 'white',
    marginVertical: 8,
  },
  free: {
    color: 'lightgreen',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
