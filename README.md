# Bar Stats Webapp

## Local Development SSL
Web Bluetooth requires secure origin, so you need to be
running a local server serving the page over SSL for 
development. `server.js` is inlcuded to do this. 

`make run-server`

## Hardware

### Chip
Adafruit Feather M0
![Alt text](https://images-na.ssl-images-amazon.com/images/I/61M%2BSYLOIjL.jpg raw=true "Adafruit 9-DOF Accel/Mag/Gyro+Temp - LSM9DS1")
[BUY HERE](https://www.amazon.com/Adafruit-9-DOF-Accel-Breakout-Board/dp/B06XH5Y6DC/ref=sr_1_3?s=electronics&ie=UTF8&qid=1550664665&sr=1-3&keywords=adafruit+9dof)

### Data
- Accel (x, y, z) (m/s^2) 
- Mag (x, y, z) (gauss) 
- Gyro (x, y, z) (dps)

## Built using
- Web Bluetooth (BLE) 
- Web Storage (localStorage) extended by localForage
- Google Charts 
