import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/ResultScreenStyles';

export default function ResultScreen({ navigation, route }) {
  const { productName, originalValue, percentage, aumento, novoValor } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Resultado</Text>
        <Text style={styles.text}>Produto: {productName}</Text>
        <Text style={styles.text}>Valor Original: R$ {originalValue.toFixed(2)}</Text>
        <Text style={styles.text}>Percentual: {percentage}%</Text>
        <Text style={styles.text}>Aumento: R$ {aumento.toFixed(2)}</Text>
        <Text style={styles.text}>Novo Valor: R$ {novoValor.toFixed(2)}</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Form')}
            >
            <Text style={styles.buttonText}>Voltar ao Formulário</Text>
        </ TouchableOpacity>
      </View>
    </View>
  );
}
