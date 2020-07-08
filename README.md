# Ionic Google Maps Embed

# Ionic Info
Ionic:

Ionic CLI : 6.10.1 (C:\Users\ronei.rodrigues\AppData\Roaming\npm\node_modules@ionic\cli) Ionic Framework : @ionic/angular 5.2.2 @angular-devkit/build-angular : 0.901.9 @angular-devkit/schematics : 9.1.9 @angular/cli : 9.1.9 @ionic/angular-toolkit : 2.2.0

Cordova:

Cordova CLI : 9.0.0 (cordova-lib@9.0.1) Cordova Platforms : android 8.1.0 Cordova Plugins : cordova-plugin-ionic-keyboard 2.2.0, cordova-plugin-ionic-webview 4.2.1, (and 4 other plugins)

Utility:

cordova-res : 0.12.1 native-run : 1.0.0

System:

Android SDK Tools : 26.1.1 (C:\Users\ronei.rodrigues\AppData\Local\Android\Sdk) NodeJS : v12.18.1 (C:\Program Files\nodejs\node.exe) npm : 6.14.5 OS : Windows 7

# Tips
You need get key in Google Cloud Platform - Google Maps https://developers.google.com/maps/documentation/embed/get-api-key?hl=pt

# home.page.html set your key google maps
<iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=(ENTER YOUR KEY HERE)&q=-23.68,-46.68&zoom=14"></iframe>
home.page.ts set your key google maps
keyGooleMap = '(ENTER YOUR KEY HERE)';

# Commands
npm install 
ionic serve
