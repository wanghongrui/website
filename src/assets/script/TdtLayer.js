L.addTdtSupport = function () {
	var EPSG4490 = L.Util.extend({}, L.CRS.Earth, {
		code: 'EPSG:4490',
		projection: L.Projection.LonLat,
		transformation: new L.Transformation(1 / 360, 0.5, -1 / 360, 0.25)
	});
	L.Map.addInitHook(function () {
		this.options.maxZoom = 20;
		this.options.crs = EPSG4490;
	});

	L.TdtLayer = L.LayerGroup.extend({
		__layers: {},
		options: {
			maxZoom: 20
		},
		_templates: {
			wmts: '{url}?request=GetTile&version={version}&service=WMTS&layer={layer}&format={format}&TileMatrix={z}&TileMatrixSet={wmts_tile_matrixset}&TileCol={x}&TileRow={y}&style={style}'
		},
		initialize: function (options) {
			L.Util.setOptions(this, {
				type: options.type || 'emap',
				labelVisible: options.labelVisible === undefined? true: options.labelVisible
			});
			L.LayerGroup.prototype.initialize.apply(this, []);
		},
		addTo: function () {
			this._tmap = arguments[0];
			this._tmap.on("moveend zoomend", this._reloadSource, this);

			L.LayerGroup.prototype.addTo.apply(this, arguments);
			this._reloadSource();
		},
		_reloadSource: function (a, e) {

			var zoom = this._tmap.getZoom();
			var bbox = this._tmap.getBounds().toBBoxString();

			var that = this;
			this._ajaxTimer && clearTimeout(this._ajaxTimer);
			this._ajaxTimer = setTimeout(function () {
				
				var request_script = document.createElement('script');
				request_script.setAttribute("id", "request_script");   
				request_script.src = 'http://114.215.249.22//api/maplayer/current?_cb=tdt_callback&bbox=' + bbox + '&zoom=' + zoom + '&t=' + Date.now();
				window.tdt_callback = function (response) {
					// 移除脚本
					document.body.removeChild(document.getElementById('request_script'));
					that._resetLayers(response.content);
				}
				document.body.appendChild(request_script);
			}, 500);
		},
		_resetLayers: function (originLayers) {
			var tag = this.options.type == "emap" ? "road" : "img";
			var label = this.options.labelVisible
			var rg = new RegExp("\\b" + tag + "\\b");
			
			var sources = originLayers.filter(function (a) {
				if (label) {
					return rg.test(a.tags);
				}
				return rg.test(a.tags) && a.tags.indexOf('label') < 0
			}).sort(function (a, b) {
				return a.zindex > b.zindex;
			});

			// add new layer not exist
			var currentLayers = {};
			var that = this;
			sources.forEach(function (s) {
				currentLayers[s.id] = true;
				if (!that.__layers[s.id]) {
					var layer = that._generateLayer(s);
					that.__layers[s.id] = layer;
					that.addLayer(layer);
				}
			});

			// remove layer should be removed
			for (var id in this.__layers) {
				var layer = this.__layers[id];
				if (!currentLayers[id]) {
					this.removeLayer(layer);
					delete this.__layers[id];
				}
			}
		},
		_generateLayer: function (layerConfig) {
			layerConfig.x = "{x}";
			layerConfig.y = "{y}";
			layerConfig.z = "{z}";
			var url = L.Util.template(this._templates[layerConfig.ogctype], layerConfig);
			var options = {
				maxZoom: 20,
				zIndex: (layerConfig.zindex || 0) + 5
			};
			if (layerConfig.domain) {
				options.subdomains = layerConfig.domain.replace(/,/g, '');
			}
			return L.tileLayer(url, options);
		}
	});
}

L.tdtLayer = function (options) {
	return new L.TdtLayer(options);
};