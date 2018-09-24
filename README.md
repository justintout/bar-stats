# Bar Stats Webapp

## Local Development SSL
Web Bluetooth requires secure origin, so you need to be
running a local server serving the page over SSL for 
development. `server.js` is inlcuded to do this. 

`make run-server`

## Hardware

### Chip
Adafruit Feather M0

### Data
- Accel (x, y, z) (m/s^2) 
- Mag (x, y, z) (gauss) 
- Gyro (x, y, z) (dps)

## Built using
- Web Bluetooth (BLE) 
- Web Storage (localStorage) extended by localForage
- Google Charts 
