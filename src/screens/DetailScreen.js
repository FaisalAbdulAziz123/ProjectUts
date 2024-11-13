import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ParkirApp = () => {
  const [jamMasuk, setJamMasuk] = useState('');
  const [jamKeluar, setJamKeluar] = useState('');
  const [totalTarif, setTotalTarif] = useState(null);

  const hitungTarifParkir = () => {
    const tarifPerJam = 2000;

   
    const waktuMasuk = new Date(`2024-11-11T${jamMasuk}:00`).getTime();
    const waktuKeluar = new Date(`2024-11-11T${jamKeluar}:00`).getTime();


    const selisihJam = Math.ceil((waktuKeluar - waktuMasuk) / (1000 * 60 * 60));
    const total = selisihJam * tarifPerJam;

    setTotalTarif(total);
    console.log(`Total Tarif Parkir: Rp${total}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarif Parkir Yang Harus Dibayar</Text>

      <TextInput
        style={styles.input}
        placeholder="Jam Masuk (HH:MM)"
        value={jamMasuk}
        onChangeText={setJamMasuk}
      />
      <TextInput
        style={styles.input}
        placeholder="Jam Keluar (HH:MM)"
        value={jamKeluar}
        onChangeText={setJamKeluar}
      />

      <Button title="Hitung Tarif" onPress={hitungTarifParkir} />

      {totalTarif !== null && (
        <Text style={styles.result}>
          Total Tarif Parkir: Rp{totalTarif}
        </Text>
      )}
    </View>
  );
};

export default ParkirApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF6E3',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
});
