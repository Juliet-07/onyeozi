import { StyleSheet } from "react-native";

export const styles = props =>
  StyleSheet.create({
    main: {
      // backgroundColor: "yellow",
      flexDirection: props.flexDir ? props.flexDir : "row",
      justifyContent: props.justifyContent ? props.justifyContent : "center",
      width: 'auto',
      height: "auto",
      alignItems: props.alignItems ? props.alignItems : "center",
    }
  });
