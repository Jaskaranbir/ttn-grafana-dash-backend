const baseData = {
  "app_id": "tutorial_632018",
  "dev_id": "board_test",
  "hardware_serial": "ABCDEF1223344546",
  "port": 1,
  "counter": 175,
  "payload_raw": "AGcA+QFn2PACaEsDZQEgBHMD3A==",
  "payload_fields": {
    "barometric_pressure_4": 98.8,
    "luminosity_3": 288,
    "relative_humidity_2": 37.5,
    "temperature_0": 24.9,
    "temperature_1": -1000
  },
  "metadata": {
    "time": "2018-07-17T18:51:27.481027046Z",
    "frequency": 903.9,
    "modulation": "LORA",
    "data_rate": "SF7BW125",
    "coding_rate": "4/5",
    "gateways": [
      {
        "gtw_id": "basement-gateway",
        "gtw_trusted": true,
        "timestamp": 2251908731,
        "time": "",
        "channel": 0,
        "rssi": -19,
        "snr": 10.25,
        "rf_chain": 0,
        "latitude": 44.311,
        "longitude": -79.55462
      }
    ],
    "latitude": 43.731358,
    "longitude": -79.761375,
    "location_source": "registry"
  },
  "downlink_url": "https://integrations.thethingsnetwork.org/ttn-us-west/api/v2/down/tutorial_632018/tutorial_process?key=ttn-account-v2.VTBtvVSBrMqUHsd18dbBpA2RtlRHVIDfdErGNbXEOwM"
}

module.exports = baseData
