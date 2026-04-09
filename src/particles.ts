// === FLOATING TALISMAN PARTICLES ===
const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')!
let W: number, H: number
const particles: any[] = []
let currentChars = '道鬼仙魔命劫缘煞符箓咒印阵法术灵魂魄'
let currentColor = 'rgba(139,0,0,'
let currentOpacity = [0.04, 0.08]

const THEME_PARTICLES: Record<string, { chars: string; color: string; opacity: number[] }> = {
  'village': { chars: '田稻风雨花鸟虫鱼', color: 'rgba(139,105,20,', opacity: [0.04, 0.08] },
  'city': { chars: '金银官印册令符玺', color: 'rgba(139,117,0,', opacity: [0.04, 0.07] },
  'mountain': { chars: '云雾松竹仙鹤泉石', color: 'rgba(46,125,50,', opacity: [0.03, 0.07] },
  'evil': { chars: '道鬼仙魔命劫煞咒丹毒', color: 'rgba(183,28,28,', opacity: [0.05, 0.10] },
  'ghost': { chars: '鬼魂魄幽冥阴幻梦影', color: 'rgba(106,27,154,', opacity: [0.04, 0.09] },
  'jungle': { chars: '蛊毒瘴蛇虫蝎蜈蚣', color: 'rgba(85,139,47,', opacity: [0.04, 0.08] },
  'war': { chars: '兵戈剑甲血煞阵旗', color: 'rgba(93,64,55,', opacity: [0.04, 0.08] },
  'celestial': { chars: '天道仙神圣光明慧', color: 'rgba(255,213,79,', opacity: [0.03, 0.06] },
  'void': { chars: '虚空无极混沌太初', color: 'rgba(26,35,126,', opacity: [0.03, 0.07] }
}

export function updateParticlesTheme(theme: string) {
  var tp = THEME_PARTICLES[theme]
  if (!tp) return
  currentChars = tp.chars
  currentColor = tp.color
  currentOpacity = tp.opacity
  particles.forEach(function (p) {
    p.char = currentChars[Math.floor(Math.random() * currentChars.length)]
    p.targetOpacity = currentOpacity[0] + Math.random() * (currentOpacity[1] - currentOpacity[0])
  })
}

function resize() {
  W = canvas.width = window.innerWidth
  H = canvas.height = window.innerHeight
}
window.addEventListener('resize', resize)
resize()

for (let i = 0; i < 25; i++) {
  particles.push({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.3,
    vy: -0.2 - Math.random() * 0.4,
    char: currentChars[Math.floor(Math.random() * currentChars.length)],
    size: 10 + Math.random() * 14,
    opacity: currentOpacity[0] + Math.random() * (currentOpacity[1] - currentOpacity[0]),
    targetOpacity: null as number | null,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.005
  })
}

function draw() {
  ctx.clearRect(0, 0, W, H)
  particles.forEach(p => {
    p.x += p.vx
    p.y += p.vy
    p.rot += p.rotSpeed
    if (p.targetOpacity !== null) {
      var diff = p.targetOpacity - p.opacity
      if (Math.abs(diff) < 0.001) { p.opacity = p.targetOpacity; p.targetOpacity = null }
      else { p.opacity += diff * 0.05 }
    }
    if (p.y < -30) { p.y = H + 30; p.x = Math.random() * W; p.char = currentChars[Math.floor(Math.random() * currentChars.length)] }
    if (p.x < -30) p.x = W + 30
    if (p.x > W + 30) p.x = -30
    ctx.save()
    ctx.translate(p.x, p.y)
    ctx.rotate(p.rot)
    ctx.font = p.size + 'px "Ma Shan Zheng", serif'
    ctx.fillStyle = currentColor + p.opacity + ')'
    ctx.textAlign = 'center'
    ctx.fillText(p.char, 0, 0)
    ctx.restore()
  })
  requestAnimationFrame(draw)
}
draw()
