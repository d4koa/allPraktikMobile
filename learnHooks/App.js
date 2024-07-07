import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const inputNilaiA = useRef(null);
  const inputNilaiB = useRef(null);
  const [nilaiA, setNilaiA] = useState(0);
  const [nilaiB, setNilaiB] = useState(0);
  const [hasilJumlah, setHasilJumlah] = useState(0);
  const [hasilKurang, setHasilKurang] = useState(0);
  const [hasilKali, setHasilKali] = useState(0);
  const [hasilBagi, setHasilBagi] = useState(0);

  const masukkanNilai = () => {
    const a = parseFloat(inputNilaiA.current.value);
    const b = parseFloat(inputNilaiB.current.value);
    setNilaiA(a);
    setNilaiB(b);
  };

  useEffect(() => {
    setHasilJumlah(nilaiA + nilaiB);
    setHasilKurang(nilaiA - nilaiB);
    setHasilKali(nilaiA * nilaiB);
    setHasilBagi(nilaiB !== 0 ? nilaiA / nilaiB : 'Tidak dapat membagi dengan nol');
  }, [nilaiA, nilaiB]);

  return (
    <View style={styles.container}>
      <Text>Masukkan nilai A</Text>
      <TextInput
        ref={inputNilaiA}
        style={styles.input}
        keyboardType="numeric"
        placeholder="Nilai A"
      />
      <Text>Masukkan nilai B</Text>
      <TextInput
        ref={inputNilaiB}
        style={styles.input}
        keyboardType="numeric"
        placeholder="Nilai B"
      />
      <Button title="Masukkan Nilai" onPress={masukkanNilai} />
      <Text style={styles.title}>Operasi Matematika</Text>
      <Text style={styles.teks}>{nilaiA} + {nilaiB} = {hasilJumlah}</Text>
      <Text style={styles.teks}>{nilaiA} - {nilaiB} = {hasilKurang}</Text>
      <Text style={styles.teks}>{nilaiA} * {nilaiB} = {hasilKali}</Text>
      <Text style={styles.teks}>{nilaiA} / {nilaiB} = {hasilBagi}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  teks: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 3,
  }
});

export default App;
