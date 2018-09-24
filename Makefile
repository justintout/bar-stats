pidfile := .server.PID

.PHONY: run-server
run-server: setup-server start-server 

.PHONY: setup-server
setup-server:
	@echo "+ $@"
	https-server/configure.sh

.PHONY: start-server
start-server:
	@echo "+ $@"
	node https-server/server.js & \
	echo $$! > $(pidfile);
	
.PHONY: stop-server
stop-server: 
	cat $(pidfile) | xargs kill || pkill -f https-server/server.js
