import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-2xl text-red-500 font-rubik-light " >Home</Text>
      <Link href={"/SignIn"} >Sign In</Link>
      <Link href={"/profile"} >Profile</Link>
      <Link href={"/explore"} >Explore</Link>
      <Link href={"/properties/13"} >Property</Link>
    </View>
  );
}
