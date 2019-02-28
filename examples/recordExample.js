//
//  recordExample.js
//  node-rtsp-recorder
//
//  Created by Sahil Chaddha on 24/08/2018.
//

const Recorder = require('../src/helpers/recorder')

var rec = new Recorder({
  url: 'rtsp://admin:frt2012;;@115.78.15.6:9250/Streaming/Channels/101/',
  folder: 'D://',
  name: 'Video_Record',
  type: 'CH01',
  directoryPathFormat: 'YYYY_MM_DD',
  fileNameFormat: 'hh_mm_ss',
})
rec.startRecording();

setTimeout(() => {
  console.log('Stopping Recording')
  rec.stopRecording()
  rec = null
}, 300000)
