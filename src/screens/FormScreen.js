import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { calcularValor } from "../components/Calculator";
import styles from "../styles/FormScreenStyles";

export default function FormScreen({ navigation }) {
  const [productName, setProductName] = useState("");
  const [rawOriginalValue, setRawOriginalValue] = useState("");
  const [rawPercentage, setRawPercentage] = useState("");
  const [errors, setErrors] = useState({
    productName: "",
    originalValue: "",
    percentage: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Formata o valor para duas casas decimais
  const formatCurrency = (numStr) => {
    if (!numStr) return "";
    const number = parseInt(numStr, 10);
    return (number / 100).toFixed(2);
  };

  // Adiciona o símbolo de % ao campo de porcentagem
  const formatPercentage = (numStr) => {
    if (!numStr) return "";
    return `${numStr}%`;
  };

  // Atualiza as mensagens de erro somente após o submit ter sido acionado
  useEffect(() => {
    if (submitted) {
      const newErrors = {
        productName: productName ? "" : "Nome é obrigatório.",
        originalValue: rawOriginalValue ? "" : "Valor é obrigatório.",
        percentage: rawPercentage ? "" : "Porcentagem é obrigatória.",
      };
      setErrors(newErrors);
    }
  }, [submitted, productName, rawOriginalValue, rawPercentage]);

  const handleOriginalValueChange = (text) => {
    const numericText = text.replace(/\D/g, "");
    setRawOriginalValue(numericText);
  };

  const handlePercentageChange = (text) => {
    const numericText = text.replace(/\D/g, "");
    setRawPercentage(numericText);
  };

  const handleCalculate = () => {
    setSubmitted(true);
    const newErrors = {
      productName: productName ? "" : "Nome é obrigatório.",
      originalValue: rawOriginalValue ? "" : "Valor é obrigatório.",
      percentage: rawPercentage ? "" : "Porcentagem é obrigatória.",
    };
    setErrors(newErrors);

    if (!productName || !rawOriginalValue || !rawPercentage) {
      Alert.alert("Atenção", "Preencha todos os campos corretamente.");
      return;
    }

    const valor = parseFloat(formatCurrency(rawOriginalValue));
    const perc = parseFloat(rawPercentage);
    const { aumento, novoValor } = calcularValor(valor, perc);
    navigation.navigate("Result", {
      productName,
      originalValue: valor,
      percentage: perc,
      aumento,
      novoValor,
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView>
        {/* Header com imagem e texto */}
        <View style={styles.headerContainer}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/caixa.png")} // Substitua pelo caminho da sua imagem
          />
          <Text style={styles.headerText}>Vou taxar só mais um poquinho!</Text>
        </View>

        {/* Formulário */}
        <View style={styles.container}>
          <Text style={styles.label}>Nome do Produto:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite o nome do produto"
              value={productName}
              onChangeText={setProductName}
            />
          </View>
          {errors.productName ? (
            <Text style={styles.errorText}>{errors.productName}</Text>
          ) : null}

          <Text style={styles.label}>Valor Original:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="0.00"
              value={formatCurrency(rawOriginalValue)}
              onChangeText={handleOriginalValueChange}
              keyboardType="numeric"
            />
          </View>
          {errors.originalValue ? (
            <Text style={styles.errorText}>{errors.originalValue}</Text>
          ) : null}

          <Text style={styles.label}>Percentual de Aumento:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="0"
              value={formatPercentage(rawPercentage)}
              onChangeText={handlePercentageChange}
              keyboardType="numeric"
            />
          </View>
          {errors.percentage ? (
            <Text style={styles.errorText}>{errors.percentage}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.button}
            onPress={handleCalculate}
          >
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
