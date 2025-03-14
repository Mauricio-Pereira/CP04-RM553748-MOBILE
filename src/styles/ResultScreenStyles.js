import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra para Android
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0B1E51',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: 6,
    color: '#333',
    textAlign: 'center',
    width: '100%',
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
