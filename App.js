import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeaveDetails from "./Screens/LeaveDetails";
import ApplyForLeave from "./Screens/ApplyForLeave";
import COLORS from "./Screens/COLOR";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LeaveDetails"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.linearStart,
          },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerShown: false,
        }}
      >
        <Stack.Screen name="LeaveDetails" component={LeaveDetails} />
        <Stack.Screen name="ApplyForLeave" component={ApplyForLeave} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
