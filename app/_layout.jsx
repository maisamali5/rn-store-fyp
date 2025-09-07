import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="index"  options={{ headerShown: false , title: "Home"}} />
                <Stack.Screen name="+not-found" />

        <Stack.Screen name="signin"  options={{headerShown:true, 
           headerStyle: {
            backgroundColor: '#535375', 
          },
          headerTintColor: 'white', 
          headerTitleStyle: {
            color: 'white' 
          },
          title:"Sign In" }} />
        <Stack.Screen name="signup"  options={{ 
          headerShown: true,
           title:"Sign Up",
           headerStyle: {
            backgroundColor: '#535375', 
          },
          headerTintColor: 'white', 
          headerTitleStyle: {
            color: 'white' 
          },
           }}  />
        <Stack.Screen name="Dashboard"  options={{ headerShown: false, title:"Dashboard"}}  />        
        <Stack.Screen name="explore"  options={{ headerShown: true, title:"Explore"}}  />
        <Stack.Screen name="App"  options={{ headerShown: false, title:"App"}}  />        
        <Stack.Screen name="PaymentScreen"  options={{ headerShown: false, title:"PaymentScreen"}}  />  
        <Stack.Screen name="SupportScreen"  options={{ headerShown: false, title:"SupportScreen"}}  />  
        {/* <Stack.Screen name=""  options={{ headerShown: false, title:""}}  /> */}
        <Stack.Screen name="AccountScreen"  options={{ headerShown: false, title:"AccountScreen"}}  />

<Stack>

</Stack>

      </Stack>
  );
}
