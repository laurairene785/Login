import App from './App'
import { ReactRegistry, Garden, Navigator } from 'react-native-navigation-hybrid'
import { Platform } from 'react-native'
import 'react-native-gesto-handler'
import {NavigationContainer} from '@react-navigation / native';

// 配置全局样式
Garden.setStyle({
  topBarStyle: 'dark-content',
  statusBarColorAndroid: Platform.Version > 21 ? undefined : '#4A4A4A',
})

// 重要必须
ReactRegistry.startRegisterComponent()

// 注意，你的每一个页面都需要注册
ReactRegistry.registerComponent('App', () => App)

// 重要必须
ReactRegistry.endRegisterComponent()

Navigator.setRoot({
  stack: {
    children: [{ screen: { moduleName: 'App' } }],
  },
})
