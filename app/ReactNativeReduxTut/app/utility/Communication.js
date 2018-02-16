import { Platform , Linking} from 'react-native';

const TEL = 'tel:';
const TELPROMPT = 'telprompt:';
const ANDROID_URI = 'https://www.google.com/maps/search/?api=1&query=';
const IOS_URI = 'http://maps.apple.com/?q='

export const makePhoneCall = (phoneNumber, prompt) => {
    let url;
    if (Platform.OS !== 'android') {
        url = prompt ? 'telprompt:' : 'tel:';
    }
    else {
        url = 'tel:';
    }
    url += phoneNumber;
    LaunchURL(url);
}

export const map = (address) =>
{
    let url = '';
    if(Platform.OS == 'ios') {
        url  = IOS_URI;
    } else {
        url = ANDROID_URI;
    }
    address = address.join(",");
    url += encodeURIComponent(address);
    LaunchURL(url);
}

const LaunchURL = function (url) {
    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            console.log('Can\'t handle url: ' + url);
        } else {
            Linking.openURL(url)
                .catch(err => {
                    if (url.includes('telprompt')) {
                        // telprompt was cancelled and Linking openURL method sees this as an error
                        // it is not a true error so ignore it to prevent apps crashing
                        // see https://github.com/anarchicknight/react-native-communications/issues/39
                    } else {
                        console.warn('openURL error', err)
                    }
                });
        }
    }).catch(err => console.warn('An unexpected error happened', err));
};

// const isValidLatLong = (num, range) => typeof num === 'number' && num <= range && num >= -1 * range

// const isValidCoordinates = coords =>
//   isValidLatLong(coords.latitude, 90) && isValidLatLong(coords.longitude, 180)

const getParameterString = (params = []) => {
  return params
    .map(({ key, value }) => {
      const encodedKey = encodeURIComponent(key)
      const encodedValue = encodeURIComponent(value)

      return `${encodedKey}=${encodedValue}`
    })
    .join('&')
}

export const getDirections = (destination, params = []) => {
  if (destination) {
    params.push({
      key: 'daddr',
      value: destination
    })
  }

  const url = `http://maps.google.com/maps?${getParameterString(params)}`
  return Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      return Promise.reject(new Error(`Could not open the url: ${url}`))
    } else {
      return Linking.openURL(url)
    }
  })
}

