// Utility functions for the background color animation
const interpolateColor = (color1, color2, factor) => {
    const result = color1.slice()
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]))
    }
    return result
}

const rgbToCSSColor = (rgbArray) => {
    return `rgb(${rgbArray.join(',')})`
}

const easeInOutCubic = (t) => {
    return t < 0.5
        ? 4 * t * t * t
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

let colorList = [
    [5, 5, 13],         // Dark blueish
    [38, 50, 56],      // Teal-like
    [123, 31, 162],    // Purple
    [250, 250, 250],   // Nearly white
    [252, 163, 17]     // Orange-yellow
]

let currentColorIndex = 0
let factor = 0

export const animateBackgroundColor = () => {
    let startColors = colorList[currentColorIndex]
    let endColors = colorList[(currentColorIndex + 1) % colorList.length]

    if (factor > 1) {
        factor = 0
        currentColorIndex = (currentColorIndex + 1) % colorList.length
    }

    const newColor = interpolateColor(startColors, endColors, easeInOutCubic(factor))
    document.body.style.backgroundColor = rgbToCSSColor(newColor)

    factor += 0.005
    requestAnimationFrame(animateBackgroundColor)
}
