import confetti from 'canvas-confetti'

const defaults = {
    disableForReducedMotion: true
}

function fire(particleRatio, opts) {
    confetti(
        Object.assign({}, defaults, opts, {
            particleCount: Math.floor(200 * particleRatio)
        })
    )
}

function confettiExplosion(origin) {
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
        origin
    })
    fire(0.2, {
        spread: 60,
        origin
    })
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        origin
    })
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        origin
    })
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
        origin
    })
}

const sound = document.querySelector('.js-confetti-whistle')
const triggers = document.querySelectorAll('.js-confetti-cannon')

Array.from(triggers).forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const rect = trigger.getBoundingClientRect()
        const center = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        }
        const origin = {
            x: center.x / window.innerWidth,
            y: center.y / window.innerHeight
        }

        if (sound) {
            sound.currentTime = 0
            sound.play()
        }
        confettiExplosion(origin)
    })
})
