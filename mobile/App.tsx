import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Animated,
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  
  // Basit bir süzülme animasyonu için
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
      
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Vira Bismillah</Text>
        <View style={styles.underline} />
        <Text style={styles.subtitle}>Yeni bir serüven başlıyor</Text>
      </Animated.View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Spotlights • 2026</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a', // Derin siyah/charcoal
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: '300', // Zarif, ince font hissi
    color: '#ffffff',
    letterSpacing: 2,
    textAlign: 'center',
  },
  underline: {
    height: 1,
    width: 60,
    backgroundColor: '#ffffff',
    marginTop: 15,
    opacity: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#888888',
    marginTop: 20,
    letterSpacing: 4,
    textTransform: 'uppercase',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
  },
  footerText: {
    fontSize: 12,
    color: '#333333',
    letterSpacing: 1,
  },
});

export default App;

