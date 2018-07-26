### ProxyBackend for Grafana Simple-JSON Plugin
---

This proxybackend is the datasource for Grafana, using MongoDB as its storage-backend.

* By default, it [mocks][0] the sensor values for lengths of time, but can be modified to take data from TTN.

* The configuration can be changed using the [config][1] file.

* By default, the mock data is inserted into MongoDB at intervals of 4.5 seconds.

  [0]: https://github.com/Jaskaranbir/ttn-grafana-dash-backend/blob/master/proxybackend/dao/dbWriter.js
  [1]: https://github.com/Jaskaranbir/ttn-grafana-dash-backend/blob/master/proxybackend/config.js
