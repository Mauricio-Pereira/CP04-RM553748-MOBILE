import { View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import FormScreen from "../screens/FormScreen";
import ResultScreen from "../screens/ResultScreen";
import Header from "../components/Header";


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Form"
        screenOptions={{
          header: (props) => <Header {...props} />, // Header custom para todas as telas
          headerShown: true, //
          headerTransparent: false,
        }}>
          <Stack.Screen
            name="Form"
            component={FormScreen}
            options={{ title: "Formulário" }}
          />
          <Stack.Screen
            name="Result"
            component={ResultScreen}
            options={{ title: "Resultado" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
