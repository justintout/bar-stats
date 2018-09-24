#!/usr/bin/env bash

function main {

    script_loc=$(cd `dirname $0` && pwd);
    https_dir=$(dirname ${script_loc})/.local-https;
    keygen=/usr/bin/ssh-keygen;

    mkdir -p ${https_dir};

    [[ -x ${keygen} ]] || sorry;
    [[ -e ${https_dir}/server.key ]] && [[ -e ${https_dir}/server.crt ]] || generate;
}

function sorry {
    cat <<EOF 
!!!
"${keygen}" unavailable. 
Please create an ssl certificate "server.cert" 
and key "server.key" in ${https_dir}.
!!!
EOF
    exit 1;
}

function generate {
	openssl req \
		-newkey rsa:2048 \
		-x509 \
		-nodes \
		-keyout ${https_dir}/server.key \
		-new \
		-out ${https_dir}/server.crt \
		-subj /CN=localhost \
		-reqexts SAN \
		-extensions SAN \
		-config <(cat /System/Library/OpenSSL/openssl.cnf \
			<(printf '[SAN]\nsubjectAltName=DNS:localhost')) \
		-sha256 \
		-days 3650;
}

main;

