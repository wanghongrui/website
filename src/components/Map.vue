<template>
  <div class="map" id="map">
    <div class="record-panel">
      <button>当前地图级别{{zoom}}</button>
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

let map, poiGroup

export default {
  name: 'Map',
  data () {
    return {
      records: new Map(),
      zoom: 17
    }
  },
  mounted () {
    L.addTdtSupport()
    map = L.map('map', {
      maxZoom: 20,
      crs: L.CRS.EPSG4326
    }).setView([31.269887, 121.539449], 15)
    new L.TdtLayer({type: 'emap', labelVisible: true}).addTo(map)

    map.on('moveend zoomend', () => {
      this.zoom = map.getZoom()
      if (map.getZoom() === 15) {
        this.loadData()
      }
    })

    poiGroup = L.featureGroup()
    poiGroup.addTo(map)
  },
  methods: {
    loadData () {
      let bound = map.getBounds()
      let url = '/api/v4/online/house/ershoufang/listMapResult?access_token=7poanTTBCymmgE0FOn1oKp&client=pc&cityCode=sh&type=plate&minLatitude=' + bound.getSouth() + '&maxLatitude=' + bound.getNorth() + '&minLongitude=' + bound.getWest() + '&maxLongitude=' + bound.getEast() + '&siteType=quyu'

      fetch(url).then(resp => {
        return resp.json()
      }).then(d => {
        let comms = d.dataList
        for (let c of comms) {
          if (!this.records.get(c.dataId)) {
            this.records.set(c.dataId, c)
            this.addMarker(c)
          }
        }
      })
    },
    output () {
      let str = ''
      for (let r of this.records.values()) {
        str += r.dataId + '\t' + r.latitude + '\t' + r.longitude + '\t' + r.dealAvgPrice + '\t' + r.saleAvgPrice + '\n'
      }
      console.log(str)
    },
    getSize () {
      alert(this.records.size)
    },
    addMarker (item) {
      let marker = L.circleMarker([item.latitude, item.longitude])
      poiGroup.addLayer(marker)
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
