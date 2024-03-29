import React from 'react';
import AppContainer from './app/containers/AppContainer';
import { ApolloProvider } from 'react-apollo';
import client from './app/redux/apollo/client';
import store from './app/redux/store';

const App = () => (
  <ApolloProvider client={client} store={store}>
    <AppContainer />
  </ApolloProvider>
)

export default App;
















// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// class MainApp extends PureComponent {
//   render() {
//     return (
//       <View>
//         <Text>
//           Hai Dear
//           Cool buddy
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
