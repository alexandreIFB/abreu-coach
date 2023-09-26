import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isFontsLoaded, error ]= useFonts({
    'GeneralSans-400': require('../assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('../assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('../assets/fonts/GeneralSans-Bold.otf'),
    'CourierNew': require('../assets/fonts/CourierNew.otf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (isFontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isFontsLoaded]);

  if (!isFontsLoaded) {
    return null;
  }

  return <RootLayoutNav />;
}

import light from '../theme/light';

function RootLayoutNav() {
  return (
    <ThemeProvider theme={light}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
