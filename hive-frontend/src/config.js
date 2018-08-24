const baseGrafanaServer = process.env.GRAFANA_ADDR || 'http://localhost:3000'

export default {
  baseGrafanaUri: `${baseGrafanaServer}/d-solo/1azxh5Kmk/bee-hive-monitoring-dashboard?refresh=5s&orgId=1&theme=light`
}
