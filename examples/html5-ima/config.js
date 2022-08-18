import '../../dist/vlite.css'
import '../../dist/plugins/ima.css'
import Vlitejs from '../../dist/vlite.js'
import VlitejsIma from '../../dist/plugins/ima.js'

Vlitejs.registerPlugin('ima', VlitejsIma, {
	locale: 'fr',
	countdownText: 'Publicité',
	adTagUrl:
		'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator='
})

/* eslint-disable no-unused-vars */
const vlite = new Vlitejs('#player', {
	options: {
		controls: true,
		autoplay: false,
		playPause: true,
		progressBar: true,
		time: true,
		volume: true,
		fullscreen: true,
		poster: 'https://yoriiis.github.io/cdn/static/vlitejs/demo-poster.jpg',
		bigPlay: true,
		playsinline: true,
		loop: false,
		muted: false,
		autoHide: true
	},
	plugins: ['ima'],
	onReady: function (player) {
		console.log(player)

		player.on('adsmanager', (e) => console.log('adsmanager', e.detail))
		player.on('adsloader', (e) => console.log('adsloader', e.detail))
		player.on('adsrequest', (e) => console.log('adsrequest', e.detail))
	}
})
/* eslint-enable no-unused-vars */
