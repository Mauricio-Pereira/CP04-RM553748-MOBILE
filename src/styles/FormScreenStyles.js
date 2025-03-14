import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 10, // Reduzido para aproximar o header dos inputs
  },
  headerImage: {
    width: 200,  // Tamanho reduzido para caber melhor na tela
    height: 200,
    resizeMode: 'contain',
    marginTop: 10, // Margem superior menor
  },
  headerText: {
    marginVertical: 8, // Menor espaçamento vertical
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    paddingBottom: 20,
    marginTop: 0, // Remove margem superior extra
  },
  label: {
    marginVertical: 8,
    fontSize: 16,
    fontWeight: '500',
    maxHeight: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1, // Borda para o input
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
    maxHeight: 50,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    maxHeight: 50,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 8,
  },
  button:{
    backgroundColor: '#0B1E51',
    padding: 16,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
