import { View, Button, Text, TouchableOpacity } from "react-native";
import useAuth from "../hooks/useAuth";
import demoService from "../services/demoService";
import { useEffect, useState } from "react";
import { Person } from "../constant/user.type";

function HomePage({navigation}) {
  const [data, setData] = useState<Person>({} as any);
  const { authData, login, logout } = useAuth();

  useEffect(() => {
    async function fetchData() {
      const data = await demoService();
      setData(data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <View>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("Camera")
      }}><Text>Go to camera</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("PokeApi")
      }}> <Text>Go to Jolteon pokeApi info </Text></TouchableOpacity>
    </View>
  );
}

export default HomePage;
