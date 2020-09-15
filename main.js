import string from './css.js'

const player = {
  id: undefined,
  time: 15,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  n: 1,
  init: () => {
    player.play()
    player.bindEvents()
  },
  events: {
    '#pausePlay': 'pause',
    '#playCode': 'play',
    '#slowPlay': 'slow',
    '#normalPlay': 'normal',
    '#fastPlay': 'fast',
  },
  bindEvents: () => {
    for (let key in player.events) {
      const value = player.events[key]
      document.querySelector(key).onclick = player[value]
    }
  },
  run: () => {
    if (player.n < string.length) {
      player.n += 1
      player.ui.demo.innerText = string.substring(0, player.n)
      player.ui.demo2.innerHTML = string.substring(0, player.n)
      player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    } else {
      window.clearInterval(player.id)
    }
  },
  play: () => {
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.time = 40
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 10
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}
player.init()