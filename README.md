## Grafana Dashboard for The Things Network
---

Grafana dashboard and backend for monitoring the sensor values, attached to a LoRa device connected to [The Things Network][0].

**Version 2:**
![Screenshot-v2][6]

**Version 1:**
![Screenshot-v1][1]

### How it works
---

Grafana uses [Simple-JSON][2] plugin as its datasource, which gets the data from an included **[proxybackend][3]**. The backend further can either mock the data (check README in backend directory for more details), or can be modified to get the data directly from TTN.

The [dashboard-presets][5] and required datasources are automatically installed during
Docker/Grafana provisioning.

### Usage
---

* This setup can be run directly using [docker-compose][4].

* After running containers, the Grafana dashboard will be hosted on port `3000`, and the proxybackend will be hosted on port `8080`.

* Default username/password for Grafana is `admin` and `admin` respectively.

* Also checkout Hive-Frontend [README][7].

  [0]: https://www.thethingsnetwork.org
  [1]: https://i.imgur.com/HUejPaj.png
  [2]: https://grafana.com/plugins/grafana-simple-json-datasource
  [3]: https://github.com/Jaskaranbir/ttn-grafana-dash-backend/tree/master/proxy-backend
  [4]: https://docs.docker.com/compose/
  [5]: https://github.com/Jaskaranbir/ttn-grafana-dash-backend/tree/master/grafana/dashboards
  [6]: https://i.imgur.com/tTuE9kq.png
  [7]: https://github.com/Jaskaranbir/ttn-grafana-dash-backend/blob/master/hive-frontend/README.md
