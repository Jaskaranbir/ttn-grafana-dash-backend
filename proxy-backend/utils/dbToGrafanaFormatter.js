// Formats data fetched from MongoDB to
// Grafana's Simple-Json query response.

// Currently handles single target only,
// and the result can be concatenated directly
// to an array to get the final response.
const format = (sensorName, dbData) => {
  // Returns an two-dimensional array containing
  // value/timestamp pairs
  const timeValuePairArr = dbData.map(d => [
    d.value,
    new Date(d.timestamp).getTime() // Convert ISO to unix timestamp
  ])

  const grafanaQueryResponse = {
    target: sensorName,
    datapoints: timeValuePairArr
  }

  return grafanaQueryResponse
}

module.exports = format
