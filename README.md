## Facebook Not Logging Test Events

1. Install iOS 13.7 Simulator
2. Install iOS 14.5 Sinulator
3. Download the Example
```
git clone https://github.com/codeconsole/fbTestEvents
cd fbTestEvents
```
4. Update `FB_APP_ID`, `FB_APP_ID`, and `FB_APP_ID` in `ios/App/App/Info.plist` or run `./setupOSX.sh` if on a Mac

5. Build the Example
```
npm install
npm build
```
6. Visit [Event Manager](https://business.facebook.com/events_manager2/list/) for App and Choose Test Events tab.
7. Run the Example on iOS 13.7 Simulator
```
npx cap run ios
```
8. Log in with FB, then exit app and come back, notice events are fired
9. Run the Example on iOS 14.5 Simulator
```
npx cap run ios
```
8. Log in with FB, then exit app and come back, notice events are **NOT** fired
