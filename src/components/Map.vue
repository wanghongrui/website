<template>
  <div class="map" id="map">
    <div class="record-panel">
      <button title="查看已经搜集到记录" @click="getSize">查看记录数</button>
      <button title="打开控制台后再点击" @click="output">输出</button>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'
import '../assets/script/TdtLayer'
import 'leaflet/dist/leaflet.css'
// import $ from 'jquery'

let map

export default {
  name: 'Map',
  data () {
    return {
      records: new Map()
    }
  },
  mounted () {
    L.addTdtSupport()
    map = L.map('map', {
      maxZoom: 20,
      crs: L.CRS.EPSG4326
    }).setView([31.269887, 121.539449], 17)
    new L.TdtLayer({type: 'emap', labelVisible: true}).addTo(map)

    map.on('moveend zoomend', () => {
      if (map.getZoom() === 17) {
        this.loadData()
      }
    })
  },
  methods: {
    loadData () {
      let bound = map.getBounds()
      let url = '/v3/ajax/map/sale/facet/?zoom=' + map.getZoom() + '&lat=' + bound.getSouth() + '_' + bound.getNorth() + '&lng=' + bound.getWest() + '_' + bound.getEast() + '&t=' + Date.now()

      fetch(url).then(resp => {
        return resp.json()
      }).then(d => {
        let comms = d.val.comms
        for (let c of comms) {
          this.records.set(c.id, c)
        }
      })
    },
    output () {
      let str = ''
      for (let r of this.records.values()) {
        str += r.id + '\t' + r.lat + '\t' + r.lng + '\t' + r.mid_price + '\n'
      }
      console.log(str)
    },
    getSize () {
      alert(this.records.size)
    }
  }
}
</script>

<style scoped>
    .map{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .record-panel {
      position: absolute;
      right: 20px;
      bottom: 20px;
      padding: 6px;
      z-index: 1111;
    }
</style>
