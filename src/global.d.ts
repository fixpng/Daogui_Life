// CSS module declarations
declare module '*.css' {}

// Global type augmentation for window
interface Window {
  refreshTalents: () => void
  selectTalent: (i: number) => void
  startGame: () => void
  confirmBorn: () => void
  handleChoice: (idx: number) => void
  toggleAuto: () => void
  setSpeedFromSlider: (val: string | number) => void
  restart: () => void
  restartAuto: () => void
  keepTalent: (idx: number) => void
  skipKeepTalent: () => void
  setSpeed: (s: number) => void
  updateParticlesTheme: (theme: string) => void
  _currentChoices: any[] | null
  _watchdog: any
  _tipTimer: any
  _achievePopupTimer: any
  webkitAudioContext: typeof AudioContext
}
