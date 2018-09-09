const serialport = require('serialport')

const port = new serialport('COM3', {
  baudRate: 9600
})

port.on('open', () => {
  console.log('think its open "it is"')
})

setInterval(() => {
  port.write('test')
}, 1000)
