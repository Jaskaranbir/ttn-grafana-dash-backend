## Grafana Dashboard for The Things Network
---

Grafana dashboard and backend for monitoring the sensor values, attached to a LoRa device connected to [The Things Network][0].

![Screenshot][1]

### How it works
---

Grafana uses [Simple-JSON][2] plugin as its datasource, which gets the data from an included **[proxybackend][3]**. The backend further can either mock the data (check README in backend directory for more details), or can be modified to get the data directly from TTN.

### Usage
---

* This setup can be run directly using [docker-compose][4].

* After running containers, the Grafana dashboard will be hosted on port `3000`, and the proxybackend will be hosted on port `8080`.

* Default username/password for Grafana is `admin` and `admin` respectively.

* Add a new `Simple-Json` type datasource to Grafana, point the URL to `http://proxybackend:8080` (for local setup, modify as required depending on setup).

* Add the dashboards/panels.

* There's also a **[dashboard preset][5]** included which has identical layout as screenshot.

  [0]: https://www.thethingsnetwork.org
  [1]: https://i.imgur.com/FWwdHDp.png
  [2]: https://grafana.com/plugins/grafana-simple-json-datasource
  [3]: https://github.com/Jaskaranbir/ttn-grafana-dash-backend/tree/master/proxybackend
  [4]: https://docs.docker.com/compose/
  [5]: https://github.com/Jaskaranbir/ttn-grafana-dash-backend/tree/master/dashboard-presets
