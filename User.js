import { Text, View } from "react-native";

export default function User({ user }) {
  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}
