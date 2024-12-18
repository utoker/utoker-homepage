import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()

    // Set the decoder path for Draco Loader
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
    loader.setDRACOLoader(dracoLoader) // Attach DRACOLoader to GLTFLoader

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'desk'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })

        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
