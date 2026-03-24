"use client"
import { useRef, useMemo, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import * as THREE from "three"

const IS_MOBILE   = typeof window !== "undefined" && window.innerWidth < 768
const NODE_COUNT  = IS_MOBILE ? 70 : 260
const MAX_CONNECTIONS = IS_MOBILE ? 80 : 500
const CONNECT_DIST = IS_MOBILE ? 2.8 : 3.2

/* ─── Neural nodes + live connection lines ───────────────────── */
function NeuralNet({ mouse, burst }: {
  mouse: { current: THREE.Vector2 }
  burst: { current: number }
}) {
  // All physics state in typed arrays — no React re-renders on mutation
  const pos = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3)
    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 2.5 + Math.random() * 7.5
      arr[i*3]   = r * Math.sin(phi) * Math.cos(theta)
      arr[i*3+1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i*3+2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  const vel = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3)
    for (let i = 0; i < NODE_COUNT * 3; i++) arr[i] = (Math.random() - 0.5) * 0.007
    return arr
  }, [])

  const ptColors = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3)
    for (let i = 0; i < NODE_COUNT; i++) {
      const t = Math.random()
      arr[i*3]   = 0.38*(1-t) + 0.13*t
      arr[i*3+1] = 0.40*(1-t) + 0.83*t
      arr[i*3+2] = 0.94*(1-t) + 0.93*t
    }
    return arr
  }, [])

  // Point cloud geometry (positions mutated each frame)
  const ptGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    g.setAttribute("color",    new THREE.BufferAttribute(ptColors, 3))
    return g
  }, [pos, ptColors])

  // Pre-allocated line buffers
  const lineBuf    = useMemo(() => new Float32Array(MAX_CONNECTIONS * 6), [])
  const lineColBuf = useMemo(() => new Float32Array(MAX_CONNECTIONS * 6), [])

  const lineGeo = useMemo(() => {
    const g  = new THREE.BufferGeometry()
    const pa = new THREE.BufferAttribute(lineBuf,    3); pa.setUsage(THREE.DynamicDrawUsage)
    const ca = new THREE.BufferAttribute(lineColBuf, 3); ca.setUsage(THREE.DynamicDrawUsage)
    g.setAttribute("position", pa)
    g.setAttribute("color",    ca)
    g.setDrawRange(0, 0)
    return g
  }, [lineBuf, lineColBuf])

  useFrame(() => {
    const mx = mouse.current.x * 11
    const my = mouse.current.y * 7
    const b  = burst.current

    // Physics update
    for (let i = 0; i < NODE_COUNT; i++) {
      const x = i*3, y = x+1, z = x+2
      const dx = pos[x] - mx
      const dy = pos[y] - my
      const d2 = dx*dx + dy*dy
      if (d2 < 22 && d2 > 0.01) {
        const f = 0.0035 / d2
        vel[x] += dx*f; vel[y] += dy*f
      }
      // Burst outward impulse on click/tap
      if (b > 0.01) {
        vel[x] += pos[x] * b * 0.018 * Math.random()
        vel[y] += pos[y] * b * 0.018 * Math.random()
        vel[z] += pos[z] * b * 0.018 * Math.random()
      }
      vel[x] *= 0.978; vel[y] *= 0.978; vel[z] *= 0.978
      pos[x] += vel[x]; pos[y] += vel[y]; pos[z] += vel[z]
      const r2 = pos[x]**2 + pos[y]**2 + pos[z]**2
      if (r2 > 105) {
        vel[x] -= pos[x]*0.0015; vel[y] -= pos[y]*0.0015; vel[z] -= pos[z]*0.0015
      }
    }
    if (burst.current > 0) burst.current = Math.max(0, burst.current - 0.038)
    ;(ptGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true

    // Rebuild connection line pairs
    let c = 0
    for (let i = 0; i < NODE_COUNT && c < MAX_CONNECTIONS; i++) {
      for (let j = i+1; j < NODE_COUNT && c < MAX_CONNECTIONS; j++) {
        const dx   = pos[i*3]   - pos[j*3]
        const dy   = pos[i*3+1] - pos[j*3+1]
        const dz   = pos[i*3+2] - pos[j*3+2]
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz)
        if (dist < CONNECT_DIST) {
          const a = (1 - dist / CONNECT_DIST) * 0.75
          const b = c * 6
          lineBuf[b]   = pos[i*3];   lineBuf[b+1] = pos[i*3+1]; lineBuf[b+2] = pos[i*3+2]
          lineBuf[b+3] = pos[j*3];   lineBuf[b+4] = pos[j*3+1]; lineBuf[b+5] = pos[j*3+2]
          lineColBuf[b]=lineColBuf[b+3] = 0.38*a
          lineColBuf[b+1]=lineColBuf[b+4] = 0.7*a
          lineColBuf[b+2]=lineColBuf[b+5] = 1.0*a
          c++
        }
      }
    }
    ;(lineGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true
    ;(lineGeo.attributes.color    as THREE.BufferAttribute).needsUpdate = true
    lineGeo.setDrawRange(0, c * 2)
  })

  return (
    <group>
      <points geometry={ptGeo}>
        <pointsMaterial size={IS_MOBILE ? 0.13 : 0.1} vertexColors transparent opacity={0.88} sizeAttenuation depthWrite={false} />
      </points>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial vertexColors transparent opacity={0.42} depthWrite={false} />
      </lineSegments>
    </group>
  )
}

/* ─── Central pulsing icosahedron core ───────────────────────── */
function NeuralCore() {
  const innerRef = useRef<THREE.Mesh>(null)
  const outerRef = useRef<THREE.Mesh>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (innerRef.current) {
      innerRef.current.rotation.x = t * 0.22
      innerRef.current.rotation.y = t * 0.31
      innerRef.current.scale.setScalar(1 + Math.sin(t * 2.1) * 0.07)
    }
    if (outerRef.current) {
      outerRef.current.rotation.x = -t * 0.11
      outerRef.current.rotation.y =  t * 0.16
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z =  t * 0.45
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.28) * 0.18
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.30
      ring2Ref.current.rotation.y =  t * 0.20
    }
  })

  return (
    <group>
      {/* Glowing solid core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial
          color="#6366f1" emissive="#3730a3" emissiveIntensity={1.8}
          transparent opacity={0.20} metalness={0.9} roughness={0.05}
        />
      </mesh>
      {/* Outer wireframe shell */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.75, 2]} />
        <meshBasicMaterial color="#67e8f9" wireframe transparent opacity={0.30} />
      </mesh>
      {/* Two orbiting torus rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.3, 0.018, 8, 90]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.55} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.7, 0.012, 8, 90]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.35} />
      </mesh>
      {/* Core glow light */}
      <pointLight color="#6366f1" intensity={5} distance={16} decay={2} />
    </group>
  )
}

/* ─── Scattered floating rings in the background ─────────────── */
function FloatingRings() {
  const data = useMemo(() =>
    [
      { pos: [-7,  3, -4] as [number,number,number], radius: 1.1, color: "#818cf8", speed: 0.18 },
      { pos: [ 8, -2, -5] as [number,number,number], radius: 0.7, color: "#22d3ee", speed: 0.24 },
      { pos: [-5, -4, -3] as [number,number,number], radius: 0.5, color: "#a78bfa", speed: 0.32 },
      { pos: [ 6,  4, -6] as [number,number,number], radius: 0.9, color: "#34d399", speed: 0.20 },
      { pos: [ 0, -5, -5] as [number,number,number], radius: 1.3, color: "#f472b6", speed: 0.14 },
    ], [])

  const refs = useRef<(THREE.Mesh | null)[]>([])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    data.forEach((d, i) => {
      const m = refs.current[i]; if (!m) return
      m.rotation.x = t * d.speed * 0.65
      m.rotation.y = t * d.speed
      m.position.y = d.pos[1] + Math.sin(t * d.speed * 0.55) * 0.45
    })
  })

  return (
    <>
      {data.map((d, i) => (
        <mesh key={i} ref={el => { refs.current[i] = el }} position={d.pos}>
          <torusGeometry args={[d.radius, 0.022, 8, 56]} />
          <meshBasicMaterial color={d.color} transparent opacity={0.38} />
        </mesh>
      ))}
    </>
  )
}

/* ─── Root export ────────────────────────────────────────────── */
export default function ParticleField() {
  const mouse = useRef(new THREE.Vector2(0, 0))
  const burst = useRef(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x =  (e.clientX / window.innerWidth)  * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    const onTouch = (e: TouchEvent) => {
      if (!e.touches.length) return
      mouse.current.x =  (e.touches[0].clientX / window.innerWidth)  * 2 - 1
      mouse.current.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1
    }
    const onBurst = () => { burst.current = 1.0 }
    const onTouchEnd = () => {
      // Drift mouse back to center over time
      const decay = () => {
        mouse.current.x *= 0.92
        mouse.current.y *= 0.92
        if (Math.abs(mouse.current.x) > 0.01 || Math.abs(mouse.current.y) > 0.01)
          requestAnimationFrame(decay)
      }
      requestAnimationFrame(decay)
    }
    window.addEventListener("mousemove",  onMove,  { passive: true })
    window.addEventListener("touchmove",  onTouch, { passive: true })
    window.addEventListener("touchend",   onTouchEnd, { passive: true })
    window.addEventListener("click",      onBurst)
    window.addEventListener("touchstart", onBurst, { passive: true })
    return () => {
      window.removeEventListener("mousemove",  onMove)
      window.removeEventListener("touchmove",  onTouch)
      window.removeEventListener("touchend",   onTouchEnd)
      window.removeEventListener("click",      onBurst)
      window.removeEventListener("touchstart", onBurst)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas dpr={IS_MOBILE ? 1 : [1, 2]} camera={{ position: [0, 0, IS_MOBILE ? 16 : 14], fov: IS_MOBILE ? 65 : 60 }} gl={{ alpha: true, antialias: false }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 8, 5]} intensity={0.6} color="#6366f1" />
        <Stars radius={90} depth={50} count={IS_MOBILE ? 2000 : 4000} factor={3} saturation={0} fade speed={0.3} />
        <NeuralCore />
        <NeuralNet mouse={mouse} burst={burst} />
        {!IS_MOBILE && <FloatingRings />}
      </Canvas>
    </div>
  )
}
