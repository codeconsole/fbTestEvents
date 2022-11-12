if [ $# -lt 1 ]; then
  echo $0 FB_APP_ID FB_APP_TOKEN FB_DISPLAY_NAME
  echo $0 123456789 d0412d8785cc21c5f2d77fb12 fbTestEvents
  exit
fi


sed -E -i '' "s/{{FB_APP_ID}}/${1}/" ios/App/App/Info.plist
sed -E -i '' "s/{{FB_APP_TOKEN}}/${2}/" ios/App/App/Info.plist
sed -E -i '' "s/{{FB_DISPLAY_NAME}}/${3}/" ios/App/App/Info.plist
