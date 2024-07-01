import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import useJolteon from '../hooks/usePokeApi';


const PokeapiPage: React.FC = () => {
  const { jolteonData, loading, error } = useJolteon();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      {jolteonData && (
        <>
          <Text style={styles.name}>{jolteonData.name}</Text>
          <Text style={styles.info}>Height: {jolteonData.height}</Text>
          <Text style={styles.info}>Weight: {jolteonData.weight}</Text>
          <Text style={styles.info}>Base Experience: {jolteonData.base_experience}</Text>
          {}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
  },
});

export default PokeapiPage;
