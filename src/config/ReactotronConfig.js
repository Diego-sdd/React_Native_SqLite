import Reactotron from 'reactotron-react-native';
import {StatusBar} from "react-native";

StatusBar.setBackgroundColor("#211f1f"); //Android
StatusBar.setBarStyle("light-content");//IOS
if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
