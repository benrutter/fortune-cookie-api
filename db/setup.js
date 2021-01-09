const mongoose = require('mongoose');
const {connect, drop, disconnect, Fortune, randomFortune} = require('./db.js');

const fortunes = [
 {fortune: "You are almost there."},
 {fortune: "You will be pleasantly suprised tonight."},
 {fortune: "You will be unusually successful in business"},
 {fortune: "Your quick wits will get you out of a tough situation."},
 {fortune: "You are busy, but you are happy."}
];

const dropAndLoadExamples = async () => {
  await connect();
  await drop();
  await Fortune.insertMany(fortunes);
  await disconnect();
}

dropAndLoadExamples();
