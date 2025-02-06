import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';

// Define interfaces for our data structures
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  discountPercentage: number;
  stock: number;
  tags: string[];
  images: string[]; // Add this property for product images
}

// Define the type for the API response
interface ApiResponse {
  products: Product[];
}

const ProductList: React.FC = () => {
  // State with type definitions
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cartMessage, setCartMessage] = useState<string>('');

  useEffect(() => {
    // Use Fetch API to fetch data
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then((response: ApiResponse) => {
        setData(response.products);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (productName: string): void => {
    setCartMessage(`${productName} has been added to the cart!`);
    setTimeout(() => setCartMessage(''), 2000);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {cartMessage ? (
          <Text style={styles.cartMessage}>{cartMessage}</Text>
        ) : null}
        <FlatList
          data={data}
          keyExtractor={(item: Product) => item.id.toString()}
          renderItem={({item}: {item: Product}) => {
            return (
              <View style={styles.row}>
                <Image
                  source={{uri: item.images[0]}} // Use the 'images' property from the API
                  style={{
                    width: 350,
                    height: 350,
                  }}
                />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <Text style={styles.productPrice}>{item.category}</Text>
                <Text style={styles.productPrice}>{item.description}</Text>
                <Text style={styles.productPrice}>
                  DiscountPercentage: {item.discountPercentage}
                </Text>
                <Text style={styles.productPrice}>Stock: {item.stock}</Text>
                <Text style={styles.productPrice}>
                  Tag: {item.tags?.join(', ')}
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleAddToCart(item.name)}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Define styles with TypeScript
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  row: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cartMessage: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default ProductList;