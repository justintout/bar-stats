class RecordHandler { 
	/**
	 * 
	 * @param {LiveView} live 
	 * @param {Table} table 
	 */
	constructor(live, table, charts) {
		this.live = live;
		this.table = table;
	}

	/**
	 * 
	 * @param {Record} record 
	 */
	handle(record) {
		// store record async
		// update ui
		this.live.update(record);
		this.table.addRecord(record);
	}

	clear() {
		this.table.clear();
	}

	store(record) {}
}

class Record {
	/**
	 * 
	 * @param {Date} timestamp
	 * @param {Acceleration} accel 
	 * @param {Gyro} gyro 
	 * @param {Magnometer} mag 
	 */
	constructor(timestamp, accel, gyro, mag) {
		this.timestamp = timestamp;
		this.accel = accel;
		this.gyro = gyro;
		this.mag = mag;
	}

	get displayTime() {
		const hours = this.timestamp.getHours() < 10
				? '0' + this.timestamp.getHours()
				: this.timestamp.getHours();
		const minutes = this.timestamp.getMinutes() < 10 
				? '0' + this.timestamp.getMinutes()
				: this.timestamp.getMinutes();
		const seconds = this.timestamp.getSeconds() < 10 
				? '0' + this.timestamp.getSeconds()
				: this.timestamp.getSeconds();
		const mills = this.timestamp.getMilliseconds() < 10 
				? '0' + this.timestamp.getMilliseconds() 
				: this.timestamp.getMilliseconds();
		return `${hours}:${minutes}:${seconds}:${mills}`;
	}
}

class Triple {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
}

class Measurement extends Triple {
	constructor(x, y, z, unit) {
		super(x, y, z);
		this.unit = unit;
	}
}

class Acceleration extends Measurement {
	constructor(x, y, z) {
		//const accelUnit = '\33A8';
		super(x, y, z, 'm/s^2');
	}
}

class Gyro extends Measurement {
	constructor(x, y, z) {
		super(x, y, z, 'dps');
	}
}

class Magnometer extends Measurement {
	constructor(x, y, z) {
		super(x, y, z, 'gauss');
	}
}