// Asynchronously run both serial-port listener and Grafana backend-server.
setTimeout(() => {
  require('./serialport')
}, 1)
setTimeout(() => {
  require('./server')
}, 1)
