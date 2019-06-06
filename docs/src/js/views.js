class Table {
  /**
  * 
  * @param {string} query 
  */
  constructor(query) {
    /** @type {HTMLTableElement} */ 
    this.element = document.querySelector(query);
    this.head = this.element.createTHead();
    const headers = ['Timestamp', 'Accelerometer', 'Gyroscope', 'Magnometer'];
    this.buildHead_(headers);
    this.body = this.element.createTBody();
  }
  
  addRecord(record) {
    const r = this.buildRow_(record);
    this.body.appendChild(r);
  }
  
  clear() {
    while(this.body.firstElementChild) {
      this.body.removeChild(this.body.firstElementChild);
    }
  }
  
  buildHead_(headers) {
    headers.forEach((v) => {
      const c = document.createElement('td');
      c.innerText = v;
      this.head.appendChild(c);
    });
  }
  
  /**
  * 
  * @param {Record} record 
  */
  buildRow_(record) {
    const r = document.createElement('tr');
    const timestamp = document.createElement('td');
    timestamp.innerText = record.timestamp.getTime();
    r.appendChild(timestamp);
    const accel = this.buildMultiCell_(record.accel.x, record.accel.y, record.accel.z);
    r.appendChild(accel);
    const gyro = this.buildMultiCell_(record.gyro.x, record.gyro.y, record.gyro.z);
    r.append(gyro);
    const mag = this.buildMultiCell_(record.mag.x, record.mag.y, record.mag.z);
    r.append(mag);
    return r;
  }
  
  buildMultiCell_(...values) {
    const r = document.createElement('td');
    values.forEach((v) => {
      const c = document.createElement('td');
      c.innerText = v;
      r.appendChild(c);
    });
    return r;
  }
  
}

class LiveView {
  /**
  * Class to display the current measurements of the collar
  * @param {string} query css query for live view element
  */
  constructor(query) {
    this.element = document.querySelector(query);
    this.element.innerHTML = `
    <h2>Live Data</h2>
    <div class="recordContainer">
    <div class="acceleration records">
    <h3>Accelerometer</h3>
    <span class="acceleration x">0.0</span>
    <span class="acceleration y">0.0</span>
    <span class="acceleration z">0.0</span>
    </div>
    <div class="gyro records">
    <h3>Gyroscope</h3>
    <span class="gyro x">0.0</span>
    <span class="gyro y">0.0</span>
    <span class="gyro z">0.0</span>
    </div>
    <div class="mag records">
    <h3>Magnometer</h3>
    <span class="mag x">0.0</span>
    <span class="mag y">0.0</span>
    <span class="mag z">0.0</span>
    </div>
    </div>`
  }
  
  update(record) {
    this.element.innerHTML = this.html_(record);
  }
  
  html_(record) {
    return `
    <h2>Live Data (@ ${record.displayTime})</h2>
    <div class="recordContainer">
    <div class="acceleration records">
    <h3>Accelerometer</h3>
    <span class="acceleration x">${record.accel.x}</span>
    <span class="acceleration y">${record.accel.y}</span>
    <span class="acceleration z">${record.accel.z}</span>
    </div>
    <div class="gyro records">
    <h3>Gyroscope</h3>
    <span class="gyro x">${record.gyro.x}</span>
    <span class="gyro y">${record.gyro.y}</span>
    <span class="gyro z">${record.gyro.z}</span>
    </div>
    <div class="mag records">
    <h3>Magnometer</h3>
    <span class="mag x">${record.mag.x}</span>
    <span class="mag y">${record.mag.y}</span>
    <span class="mag z">${record.mag.z}</span>
    </div>
    </div>`
  }
}

