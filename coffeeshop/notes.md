# Notes

## assets, fonts, ...

You can move your assets folder to `./src/assets` and create a `react-native.config.js` file in the root directory to setup custom font and themes. The config file can look something similar to this

```js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets'],
};
```

Then run the command `npx react-native-assets` in the root directory of the project
