import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { products } from '../data/Products'; // Pastikan jalur ini benar

const ProductList = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.productContainer} 
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
        >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2} // Menampilkan produk dalam 2 kolom
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    productContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3, // Untuk efek bayangan di Android
        padding: 10,
        alignItems: 'center',
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    productName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        marginTop: 5,
        fontSize: 14,
        color: '#888',
    },
});

export default ProductList;