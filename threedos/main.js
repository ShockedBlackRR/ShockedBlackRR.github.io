import * as THREE from 'three';
import './style.css'
import gsap from 'gsap'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
//scene
const scene = new THREE.Scene()

//create our sphere
const geometry = new THREE.SphereGeometry(3, 64, 64)

const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
  roughness:0.5,
})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//light
const light = new THREE.PointLight(0xffffff, 200, 100)
light.position.set(0, 10, 10)
light.intensity= 500
scene.add(light)


const light2 = new THREE.PointLight(0xffffff, 200, 100)
light2.position.set(10, -10, -10)
light2.intensity= 30
scene.add(light2)

//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}
//camera
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100)
camera.position.z = 10
camera.setRotationFromEuler(0, 0, 1)
scene.add(camera)



//Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)



//controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 100







//resize
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerWidth
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

})



//loop
const loop = () => {
  if (controls.autoRotateSpeed > 3) {
    controls.autoRotateSpeed -= 1
  }
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop);
  controls.update()
}
loop()


const tl = gsap.timeline({defaults: {duration: 1} })
tl.fromTo(mesh.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1})
tl.fromTo('nav', {y:"-100%"}, {y:"0%"})
tl.fromTo(".title", {opacity: 0}, {opacity: 1})


//mous animation colorr
let rgb = []
let mouseDown = false
window.addEventListener('mousedown', () => (mouseDown = true))
window.addEventListener('mouseup', () => (mouseup = false))

window.addEventListener('mousemove', (e) => {
  if(mouseDown){
    rgb = [
      Math.round((e.pageX / sizes.width*255)),
      Math.round((e.pageY / sizes.height*255)),
      150
    ]
    //lets animate!
    let newColor = new THREE.Color(`rgb(${rgb.join(",")})`)
    gsap.to(mesh.material.color, {r: newColor.r, g: newColor.g, b: newColor.b})
  }
})
console.log("WHat?")
camera.position.set(2, 4, 8);
camera.lookAt(0,0,0);
renderer.render(scene, camera);