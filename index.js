const degen_auth_service = require('degen-auth-service');
const degen_auth_service_use = require('degen-auth-service-use');
const express = require('express');
const jquery = require('jquery');
const axios = require('axios');
const babel_core = require('babel-core');
const eth_crypto = require('eth-crypto');
const request = require('request');
const react = require('react');
const truffle = require('truffle');
const react_dom = require('react-dom');
const firebase = require('firebase');
const web3_utils = require('web3-utils');
const mongoose = require('mongoose');
const underscore = require('underscore');

const fs = require('fs');
fs.copyFile('source.txt', 'destination.txt', err => {
  if (err) throw err;
  console.log('File copied successfully');
});

const assert = require('assert');
assert.notStrictEqual(1, '1', '1 should not be strictly equal to "1"');

const { Transform } = require('stream');
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTransform).pipe(process.stdout);

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
if (isMainThread) {
  const worker = new Worker(__filename, { workerData: 'Hello from main thread' });
  worker.on('message', message => {
    console.log('Received message from worker:', message);
  });
} else {
  parentPort.postMessage('Hello from worker thread');
}

// Estimate gas cost for a transaction
web3.eth.estimateGas({
  from: senderAddress,
  to: receiverAddress,
  value: amountToSend
}).then(gasEstimate => {
  console.log('Gas estimate:', gasEstimate);
}).catch(err => {
  console.error('Error estimating gas:', err);
});