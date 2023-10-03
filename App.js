import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import FormScreen from "./src/screens/FormScreen";
import ViewDetailScreen from "./src/screens/ViewDetailScreen";
import { ElementProvider } from "./src/contexts/ElementContext";
import EditElementScreen from "./src/screens/EditElementScreen";
import BookSearch from "./src/screens/BookSearch";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ElementProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerStyle: { backgroundColor: "purple" },
            headerTintColor: "#61dafb",
          }}
        >
          <Stack.Screen
            name="Details"
            component={ViewDetailScreen}
            options={{ title: "View details" }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Reading Diary" }}
          />
          <Stack.Screen
            name="EditElementScreen"
            component={EditElementScreen}
            options={{ title: "Edit Element Screen" }}
          />
          <Stack.Screen
            name="FormScreen"
            component={FormScreen}
            options={{ title: "Form Screen" }}
          />
          <Stack.Screen
            name="BookSearch"
            component={BookSearch}
            options={{ title: "Search for books for inspiration" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ElementProvider>
  );
};
export default App;
