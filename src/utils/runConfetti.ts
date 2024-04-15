import confetti from 'canvas-confetti'

export const confetties = () => {
  return confetti({
    zIndex: 999,
    particleCount: 100,
    spread: 160,
    angle: -100,
    origin: {
      x: 0.5,
      y: 0,
    },
  })
}
