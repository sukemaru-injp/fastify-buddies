import { createCanvas } from 'canvas'

const createImgService = () => {
  const canvas = createCanvas(640, 480)
  const ctx = canvas.getContext('2d')
}

export default createImgService
