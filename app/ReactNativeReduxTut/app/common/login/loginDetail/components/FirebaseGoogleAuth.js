import { GoogleSignin } from 'react-native-google-signin';

export const googleLogin = async () => {
  try {
    await GoogleSignin.configure();
    const data = await GoogleSignin.signIn();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}