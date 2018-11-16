### Solar-Dash-Backend for Grafana Simple-JSON Plugin
---

This solar-dash backend is the datasource for Grafana, using MongoDB as its storage-backend.

* It will read sensor-values from specified serial-port (in config file, check point below) and store it in Mongo.

* The configuration can be changed using the [config][0] file, including adding/removing sensors and modifying their sensor-ids.

  [0]: https://github.com/Jaskaranbir/ttn-grafana-dash-backend/blob/master/proxybackend/config.js
