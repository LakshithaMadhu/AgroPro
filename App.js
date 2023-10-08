import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SignupScreen from './screens/Signup';
import SignInScreen from './screens/Signin';
import PasswordResetScreen from './screens/Reset';
import DashboardScreen from './screens/DashboardScreen';
import FuelCategoryScreen from './screens/FuelCategoryScreen';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName="SignIn">
    <AuthStack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }}  />
    <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}  />
    <AuthStack.Screen name="PasswordReset" component={PasswordResetScreen} options={{ headerShown: false }}  />
  </AuthStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="FuelCategory"
          component={FuelCategoryScreen}
          options={{ headerShown: false }} 
        />
        
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
