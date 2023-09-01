//https://www.youtube.com/watch?v=_OwJV2xL8M8

import * as THREE from 'three';
const scene = new THREE.Scene();

//mesh
const geometry = new THREE.SphereGeometry(3, 64, 64)

const material = new THREE.MeshStandardMaterial({
    color: '00ff83'
})
const mesh = new THREE.mesh(geometry, material)
scene.add(mesh)

//camera
const camera = new THREE.PerspectiveCamera(45, 800, 600)
scene.add(camera)

//renderer
const canvas = document.querySelector(.'webgl')
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(800, 600)
renderer.render(scene, camera)