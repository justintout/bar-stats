// TEMPORARY TEST 
// WROTE THIS ON THE PLANE

class TestRecordGenerator {
    
    start() {
        window.clearInterval(this.interval);
        this.interval = window.setInterval(() => {
            window.dispatchEvent(new CustomEvent('record', {detail: this.generate()}))
        }, 50);
    }

    stop() {
        window.clearInterval(this.interval);
    }

    /**
     * @return {Record}
     */
    generate() {
        const m = new Magnometer(this.rand_(), this.rand_(), this.rand_());
        const a = new Acceleration(this.rand_(), this.rand_(), this.rand_());
        const g = new Gyro(this.rand_(), this.rand_(), this.rand_());
        const t = new Date();
        const r = new Record(t, a, g, m);
        return r;
    }

    rand_() {
        return Math.random().toFixed(2);
    }
}