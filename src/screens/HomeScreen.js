import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList, Alert, Image } from 'react-native';
import axios from 'axios';

const API_URL = 'https://672268222108960b9cc44dfb.mockapi.io/api/parkings/parkir'; // Ganti dengan URL API Anda

const VehicleCRUD = ({ navigation }) => {
    const [vehicles, setVehicles] = useState([]);
    const [vehicleName, setVehicleName] = useState('');
    const [vehicleLocation, setVehicleLocation] = useState('');
    const [vehicleFlatNumber, setVehicleFlatNumber] = useState('');
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        try {
            const response = await axios.get(API_URL);
            setVehicles(response.data.slice(0, 10));
        } catch (error) {
            console.error('Error fetching vehicles:', error);
            Alert.alert('Error', 'Gagal mengambil data kendaraan.');
        }
    };

    const addVehicle = async () => {
        if (!vehicleName || !vehicleLocation || !vehicleFlatNumber) {
            Alert.alert('Error', 'Silakan masukkan semua informasi kendaraan.');
            return;
        }

        try {
            const response = await axios.post(API_URL, { 
                title: vehicleName, 
                location: vehicleLocation, 
                flatNumber: vehicleFlatNumber 
            });
            const newVehicle = { ...response.data, id: response.data.id };
            setVehicles([...vehicles, newVehicle]);
            console.log('Kendaraan Ditambahkan:', newVehicle);
            resetForm();
            Alert.alert('Sukses', 'Kendaraan berhasil ditambahkan.');
        } catch (error) {
            console.error('Error adding vehicle:', error);
            Alert.alert('Error', 'Gagal menambahkan kendaraan.');
        }
    };

    const editVehicle = (id, name, location, flatNumber) => {
        setEditingId(id);
        setVehicleName(name);
        setVehicleLocation(location);
        setVehicleFlatNumber(flatNumber);
    };

    const updateVehicle = async () => {
        if (!vehicleName || !vehicleLocation || !vehicleFlatNumber) {
            Alert.alert('Error', 'Silakan masukkan semua informasi kendaraan.');
            return;
        }

        try {
            const updatedVehicles = vehicles.map(vehicle =>
                vehicle.id === editingId 
                    ? { ...vehicle, title: vehicleName, location: vehicleLocation, flatNumber: vehicleFlatNumber } 
                    : vehicle
            );
            setVehicles(updatedVehicles);
            console.log('Kendaraan Diperbarui:', {
                id: editingId,
                title: vehicleName,
                location: vehicleLocation,
                flatNumber: vehicleFlatNumber,
            });
            resetForm();
            Alert.alert('Sukses', 'Kendaraan berhasil diperbarui.');
        } catch (error) {
            console.error('Error updating vehicle:', error);
            Alert.alert('Error', 'Gagal memperbarui kendaraan.');
        }
    };

    const deleteVehicle = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            const deletedVehicle = vehicles.find(vehicle => vehicle.id === id);
            setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
            console.log('Kendaraan Dihapus:', deletedVehicle);
            Alert.alert('Sukses', 'Kendaraan berhasil dihapus.');
        } catch (error) {
            console.error('Error deleting vehicle:', error);
            Alert.alert('Error', 'Gagal menghapus kendaraan.');
        }
    };

    const resetForm = () => {
        setVehicleName('');
        setVehicleLocation('');
        setVehicleFlatNumber('');
        setEditingId(null);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Kendaraan</Text>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>
            <TextInput
                style={styles.input}
                value={vehicleName}
                onChangeText={setVehicleName}
                placeholder="Masukkan nama kendaraan"
            />
            <TextInput
                style={styles.input}
                value={vehicleLocation}
                onChangeText={setVehicleLocation}
                placeholder="Masukkan lokasi kendaraan"
            />
            <TextInput
                style={styles.input}
                value={vehicleFlatNumber}
                onChangeText={setVehicleFlatNumber}
                placeholder="Masukkan nomor flat kendaraan"
            />
            <Button title={editingId ? "Update Kendaraan" : "Tambah Kendaraan"} onPress={editingId ? updateVehicle : addVehicle} />
            
            <FlatList
                data={vehicles}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemText}>{item.title}</Text>
                            <Text style={styles.itemText}>Lokasi: {item.location}</Text>
                            <Text style={styles.itemText}>Nomor Flat: {item.flatNumber}</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Edit" onPress={() => editVehicle(item.id, item.title, item.location, item.flatNumber)}/>
                            <Button title="Hapus" onPress={() => deleteVehicle(item.id)} />
                        </View>
                    </View>
                )}
            />
            
            <Text style={styles.title}></Text>
            <Button 
                title="Hitung Tarif Parkir" 
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FAF6E3',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 10,
        color: 'blue',
    },
    logo: {
        width: 100,
        height: 50,
    },
    input: {
        height: 40,
        borderColor: 'blue',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    itemDetails: {
        flex: 1,
        marginRight: 10,
    },
    itemText: {
        fontSize: 14,
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 120,
    },
});

export default VehicleCRUD;
