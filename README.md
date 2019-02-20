# Bar Stats Webapp

## Local Development SSL
Web Bluetooth requires secure origin, so you need to be
running a local server serving the page over SSL for 
development. `server.js` is inlcuded to do this. 

`make run-server`

## Hardware

### Electronics
Adafruit Feather M0
 <img src="https://images-na.ssl-images-amazon.com/images/I/71pdmuGB1lL._SL1200_.jpg" width="256" height="256" title="TEST">

[BUY HERE](https://www.amazon.com/Bluetooth-802-15-1-Development-Adafruit-Bluefruit/dp/B01E1RESIM/ref=sr_1_1_sspa?s=electronics&ie=UTF8&qid=1550664175&sr=1-1-spons&keywords=Adafruit+Feather+M0+bluetooth&psc=1)

1578 Lithium Ion Polymer Battery - 3.7v 500mAh 
![Alt text](https://images-na.ssl-images-amazon.com/images/I/41Sx-MRiXaL.jpg)
[BUY HERE](https://www.amazon.com/ADAFRUIT-INDUSTRIES-1578-Lithium-Polymer/dp/B00L0W61VO/ref=sr_1_6?s=electronics&ie=UTF8&qid=1550664511&sr=1-6&keywords=Adafruit+battery)

Adafruit 9-DOF Accel/Mag/Gyro+Temp - LSM9DS1
![Alt text](https://images-na.ssl-images-amazon.com/images/I/61M%2BSYLOIjL.jpg)
[BUY HERE](https://www.amazon.com/Adafruit-9-DOF-Accel-Breakout-Board/dp/B06XH5Y6DC/ref=sr_1_3?s=electronics&ie=UTF8&qid=1550664665&sr=1-3&keywords=adafruit+9dof)

Generic wire :)

### Mounting
Generic Barbell Collar 
![Alt text](https://images-na.ssl-images-amazon.com/images/I/61FC2WZ4BIL._SL1500_.jpg =250x250)
[BUY HERE](https://www.amazon.com/Clout-Fitness-Release-Locking-Training/dp/B07J6PMXGM/ref=asc_df_B07J6PMXGM/?tag=hyprod-20&linkCode=df0&hvadid=309806240144&hvpos=1o1&hvnetw=g&hvrand=12928086070966510408&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9015334&hvtargid=pla-638893583461&psc=1)

Mounting Hardware Spacer Rubber Standoffs 
![Alt text](https://images-na.ssl-images-amazon.com/images/I/511MHOtF7OL._SL1000_.jpg)
[BUY HERE](https://www.amazon.com/NIDICI-Anti-Vibration-Mounting-Standoffs-Controller/dp/B071WBZC9K/ref=sr_1_9?s=electronics&ie=UTF8&qid=1550665977&sr=1-9&keywords=small+standoffs)

Hard Drive Screws 
![Alt text](https://images-na.ssl-images-amazon.com/images/I/41h7bvHo7cL._SL1024_.jpg)
[BUY HERE](https://www.amazon.com/Laptop-Drive-Screws-M3x3MM-PM3X3-0/dp/B00B1UVKSY/ref=sr_1_7?s=electronics&ie=UTF8&qid=1550666453&sr=1-7&keywords=m3+Screw+12)

### Data
- Accel (x, y, z) (m/s^2) 
- Mag (x, y, z) (gauss) 
- Gyro (x, y, z) (dps)

## Built using
- Web Bluetooth (BLE) 
- Web Storage (localStorage) extended by localForage
- Google Charts 
