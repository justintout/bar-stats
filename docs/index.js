const testGenerator = new TestRecordGenerator();

window.onload = () => {
	const liveView = new LiveView('#live');
	const table = new Table('#last > table');
	const recordHandler = new RecordHandler(liveView, table);

	const bleHandler = new BLEHandler();

	window.addEventListener('record', (e) => recordHandler.handle(e.detail));
	window.addEventListener('liftStart', (e) => recordHandler.clear());

	document.querySelector('button#start').onclick = () => {
		window.dispatchEvent(new CustomEvent('liftStart'));
		testGenerator.start();
	}
	document.querySelector('button#stop').onclick = () => testGenerator.stop();

	/* setting up BLE controls */
	document.querySelector('div#connectionControls > button#connectButton').onclick = () => {
		this.disabled = true;
		const deviceName = document.querySelector('div#connectionControls > input').value;
		bleHandler.connect(deviceName)
			.catch((e) => {
				console.error('unable to connect: ', e);
				console.log(e.stack);
			});
	}

	/* load google charts */
	google.charts.load('current', {packages: ['corechart']});

	/* set up storage */
	if (!('indexedDB' in window)) {
		console.error('This browser doesn\'t support IndexedDB');
		return;
	}
}

