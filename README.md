This is quickstart example from Expo Go for React Native: https://reactnative.dev/docs/environment-setup.

To reproduce the issue:
1. run `npm install`
2. copy `.env.example` to new `.env` file
3. set Ably API key in `.env` file
4. run `npx expo start`
5. connect from a phone using Expo Go app or using an emulator
6. you should see `Error: Expected TextEncoder to be configured` in console
