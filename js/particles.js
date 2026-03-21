// === FLOATING TALISMAN PARTICLES ===
(function() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W, H;
  const particles = [];
  const CHARS = '道鬼仙魔命劫缘煞符箓咒印阵法术灵魂魄';
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();
  for (let i = 0; i < 25; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.2 - Math.random() * 0.4,
      char: CHARS[Math.floor(Math.random() * CHARS.length)],
      size: 10 + Math.random() * 14,
      opacity: 0.04 + Math.random() * 0.08,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.005
    });
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotSpeed;
      if (p.y < -30) { p.y = H + 30; p.x = Math.random() * W; }
      if (p.x < -30) p.x = W + 30;
      if (p.x > W + 30) p.x = -30;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.font = p.size + 'px "Ma Shan Zheng", serif';
      ctx.fillStyle = 'rgba(139,0,0,' + p.opacity + ')';
      ctx.textAlign = 'center';
      ctx.fillText(p.char, 0, 0);
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
