import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DeskSpinner, DeskContainer } from './voxel-desk-loader'

const VoxelDesk = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)

  const rendererRef = useRef(null)
  const cameraRef = useRef(null)
  const controlsRef = useRef(null)
  const scene = useRef(new THREE.Scene())
  const target = useRef(new THREE.Vector3(-0.5, 1.2, 0))
  const initialCameraPosition = useRef(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )

  const handleWindowResize = useCallback(() => {
    if (refContainer.current && rendererRef.current) {
      const scW = refContainer.current.clientWidth
      const scH = refContainer.current.clientHeight
      rendererRef.current.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer

    if (container && !rendererRef.current) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      rendererRef.current = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      rendererRef.current.setPixelRatio(window.devicePixelRatio)
      rendererRef.current.setSize(scW, scH)
      rendererRef.current.outputColorSpace = THREE.SRGBColorSpace
      rendererRef.current.toneMapping = THREE.ACESFilmicToneMapping
      rendererRef.current.toneMappingExposure = 1.5
      container.appendChild(rendererRef.current.domElement)

      const scale = scH * 0.005
      cameraRef.current = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      cameraRef.current.position.copy(initialCameraPosition.current)
      cameraRef.current.lookAt(target.current)

      const ambientLight = new THREE.AmbientLight(0xffffff)
      scene.current.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
      directionalLight.position.set(0, 120, 0)
      scene.current.add(directionalLight)

      controlsRef.current = new OrbitControls(
        cameraRef.current,
        rendererRef.current.domElement
      )
      controlsRef.current.autoRotate = true
      controlsRef.current.autoRotateSpeed = 1
      controlsRef.current.target = target.current

      loadGLTFModel(scene.current, '/desk.glb', {
        receiveShadow: false,
        castShadow: false
      })
        .then(() => setLoading(false))
        .catch((e) => {
          console.error('Failed to load 3D model:', e)
          setLoading(false)
        })

      let frameId
      const animate = () => {
        frameId = requestAnimationFrame(animate)
        controlsRef.current?.update()
        rendererRef.current?.render(scene.current, cameraRef.current)
      }
      animate()

      const localScene = scene.current

      return () => {
        cancelAnimationFrame(frameId)
        rendererRef.current.domElement.remove()
        rendererRef.current.dispose()
        rendererRef.current = null
        controlsRef.current.dispose()
        controlsRef.current = null
        localScene.clear()
        scene.current = new THREE.Scene()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [handleWindowResize])

  return (
    <DeskContainer ref={refContainer} aria-label="3D voxel desk model" role="img">
      {loading && <DeskSpinner />}
    </DeskContainer>
  )
}

export default VoxelDesk
