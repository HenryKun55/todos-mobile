import { StyleSheet, Platform } from "react-native";

import {
  getBottomSpace,
  getStatusBarHeight
} from "react-native-iphone-x-helper";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1
  },

  modal: {
    flex: 1
  },

  logo : {
    width: 70,
    height: 70,
    alignSelf: 'flex-start',
    marginTop: 20
  },

  boxTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#4EACDB"
  },

  list: {
    marginTop: 30
  },

  file: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20
  },

  separator: {
    height: 1,
    backgroundColor: "#EEE"
  },

  fileInfo: {
    flex: 4,
    flexDirection: "row",
    alignItems: "center"
  },

  fileOptions: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  fileTitle: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10
  },

  fileTitleLine: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid'
  },

  fileDate: {
    fontSize: 14,
    color: "#666"
  },

  fab: {
    position: "absolute",
    right: 30,
    bottom: 30 + getBottomSpace(),
    width: 60,
    height: 60,
    backgroundColor: "#4EACDB",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },

  addTodo: {
    color: '#fff',
    fontSize: 30
  },

  loading: {
    position: 'absolute',
    opacity: 0.9,
    backgroundColor: 'black',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

});

export default styles;
