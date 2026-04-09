import './style.css'
import './effects.css'
import { initTheme } from './theme'
import './particles'
import './audio'
import {
  refreshTalents, selectTalent, startGame, confirmBorn,
  handleChoice, toggleAuto, setSpeedFromSlider, restart,
  restartAuto, keepTalent, skipKeepTalent, setSpeed,
  gameState
} from './engine'
import { updateParticlesTheme } from './particles'

// Expose to window for onclick handlers
Object.assign(window, {
  refreshTalents,
  selectTalent,
  startGame,
  confirmBorn,
  handleChoice,
  toggleAuto,
  setSpeedFromSlider,
  restart,
  restartAuto,
  keepTalent,
  skipKeepTalent,
  setSpeed,
  updateParticlesTheme,
  gameState
})

initTheme()
