import styles from './HorseshoesBackground.module.scss';
import { ReactNode, useEffect, useRef } from "react"

interface HorseshoesBackgroundConfig {
  count: number
  min: number
  max: number
  opacity: number
}

interface HorseshoesBackgroundProps {
  config: HorseshoesBackgroundConfig;
  className?: string;
  children?: ReactNode;
}

export default function HorseshoesBackground({ className, config, children }: HorseshoesBackgroundProps) {
  const combinedClassName = [styles.horseshoesBackground, className].filter(Boolean).join(' ');

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    let animationFrameId: number

    const svgPath =
        "M100.7 94.6c-2.4-2.1-7-3.9-4.4-7.8 18.8-27.1 10.9-70.4-22.4-81.6C67.5 2.9 60.7 1.8 54 1.8S40.4 3 34.1 5.2C.7 16.5-7.1 59.8 11.7 86.8c2.6 3.8-2 5.7-4.4 7.8-1.6 1.3-1.8 3.5-.5 5 2.8 3.2 5.7 6.4 8.6 9.5 1.4 1.7 3.6 1.2 5.1 0 7.1-4.7 14.1-9.4 21.2-14.1.8-.5 1.3-1.2 1.5-2.1.3-1.3 0-2.4-1.1-3.3-3.1-2.9-5.5-6.2-7.3-10.1-3.9-8.8-5-20.5-2-29.7 3.1-9.9 11.8-15.3 21.2-15.3s18.1 5.4 21.2 15.3c2.9 9.2 1.9 20.9-2 29.7-1.8 3.8-4.2 7.2-7.3 10.1-1 .9-1.4 2-1.1 3.3.2.9.7 1.6 1.5 2.1 7.1 4.7 14.1 9.4 21.2 14.1 1.5 1.2 3.7 1.6 5.1 0 2.9-3.2 5.7-6.3 8.6-9.5 1.4-1.5 1.1-3.7-.5-5"

    const masterImg = new window.Image()
    masterImg.src = `data:image/svg+xml;base64,${btoa(`
      <svg xmlns='http://www.w3.org/2000/svg'
      width='108'
      height='112'>
      <path d='${svgPath}' fill='black'/>
      </svg>
    `)}`

    class Particle {
      size: number
      x: number
      y: number
      vX: number
      vY: number
      angle: number
      rot: number
      color: string
      buffer: HTMLCanvasElement

      constructor(canvasWidth: number, canvasHeight: number, config: HorseshoesBackgroundConfig, masterImg: HTMLImageElement) {
        this.size = Math.random() * (config.max - config.min) + config.min
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.vX = (Math.random() - 0.5) * 0.3
        this.vY = (Math.random() - 0.5) * 0.3
        this.angle = Math.random() * Math.PI * 2
        this.rot = (Math.random() - 0.5) * 0.01
        this.color = `hsla(${Math.floor(Math.random() * 360)}, 35%, 75%, ${config.opacity})`

        this.buffer = document.createElement("canvas")
        this.buffer.width = 110
        this.buffer.height = 115

        const bufferCtx = this.buffer.getContext("2d")
        if (bufferCtx) {
          bufferCtx.drawImage(masterImg, 0, 0)
          bufferCtx.globalCompositeOperation = "source-in"
          bufferCtx.fillStyle = this.color
          bufferCtx.fillRect(0, 0, 110, 115)
        }
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vX
        this.y += this.vY
        this.angle += this.rot

        if (this.x < -this.size) this.x = canvasWidth + this.size
        if (this.x > canvasWidth + this.size) this.x = -this.size
        if (this.y < -this.size) this.y = canvasHeight + this.size
        if (this.y > canvasHeight + this.size) this.y = -this.size
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        ctx.drawImage(
          this.buffer,
          -this.size / 2,
          -this.size / 2,
          this.size,
          this.size,
        )
        ctx.restore()
      }
    }

    function initParticles() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles = Array.from({ length: config.count }, () => new Particle(canvas.width, canvas.height, config, masterImg))
    }

    function animateParticles() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height)
        p.draw(ctx)
      })
      animationFrameId = requestAnimationFrame(animateParticles)
    }

    const handleResize = () => {
      initParticles()
    }

    window.addEventListener("resize", handleResize)

    masterImg.onload = () => {
      initParticles()
      animateParticles()
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [config])

  return <>
    <canvas ref={canvasRef} className={combinedClassName}  />
    {children}
  </>;
}
