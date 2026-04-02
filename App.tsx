import { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Image
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [scale] = useState(new Animated.Value(1));
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    if (status !== "idle") return;

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
    }, 2000);

    setTimeout(() => {
      setStatus("idle");
    }, 4000);
  };

  const getContent = () => {
    if (status === "loading") {
      return (
        <>
          <MaterialCommunityIcons name="progress-download" size={20} color="#fff" />
          <Text style={styles.text}>Loading...</Text>
        </>
      );
    }

    if (status === "success") {
      return (
        <>
          <MaterialCommunityIcons name="check" size={20} color="#fff" />
          <Text style={styles.text}>No Fap!!!</Text>
        </>
      );
    }

    return (
      <>
        <MaterialCommunityIcons name="download" size={20} color="#fff" />
        <Text style={styles.text}>Download</Text>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
     <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMoznsu4O9ctrYO5-MxzANCfJmMks72K5UA&s" }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 40,
            position: "absolute",
            top: 50,
            right: 20,
      }}
      />

       <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJr28QKxKyYoRipayqLnTc4VkMU3BuQFfhjg&s" }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 400,
      }}
      />

      <Animated.View style={{ transform: [{ scale }] }}>
        <Pressable
          style={styles.button}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={handlePress}
        >
          {getContent()}
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4e524f",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop:20,
    backgroundColor: "#6200ee",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});