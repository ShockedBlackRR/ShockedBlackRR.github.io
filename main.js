import * as THREE from "https://unpkg.com/three@0.138.0/build/three.module.js";
import './style.css'
import * as dat from "dat.gui"

import gsap from './node_modules/gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// Scene
const scene = new THREE.Scene()

// Loader
const gltfLoader = new GLTFLoader();
gltfLoader.load('./public/figuredoutexport/mayybetryagain.gltf', (gltfScene) => {
    scene.add(gltfScene.scene)
});

// Lighting
const createSpotLight = (color, intensity, position) => {
    const light = new THREE.SpotLight(color, intensity);
    light.position.set(...position);
    light.target.position.set(0, 0, 0); // make it look at 0,0,0
    scene.add(light);
    scene.add(light.target);
    return light;
}
let disable = false
// Create lights and store them in variables
const blueLight = createSpotLight(0x0b00c1, 500, [0, 5, 130]);
const redLight = createSpotLight(0xb60002, 500, [130, 5, 0]);
const yellowLight = createSpotLight(0xe8ef40, 500, [-130, 5, 0]);
const greenLight = createSpotLight(0x007500, 500, [0, 5, -130]);

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.set(2, 4, 8);
camera.lookAt(0, 0, 0);   // Ensure the camera is facing the origin
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);

// Controls
//const controls = new OrbitControls(camera, canvas);
//controls.enableDamping = true;
//controls.enablePan = true;
//controls.enableZoom = false;

// Handle Resize
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
});

// Main Loop
const loop = () => {
    renderer.render(scene, camera);
    // controls.update();  // Comment this out temporarily
    window.requestAnimationFrame(loop);
};
loop();

// Camera movement points
const p1 = new THREE.Vector3(0, 5, 8);
const p2 = new THREE.Vector3(8, 5, 0);
const p3 = new THREE.Vector3(0, 5, -8);
const p4 = new THREE.Vector3(-8, 5, 0);

const yellowlightClose = new THREE.Vector3(-10, 5, 0);
const yellowlightFar = new THREE.Vector3(-100, 5, 0);

const bluelightClose = new THREE.Vector3(0, 5, 10);
const bluelightFar = new THREE.Vector3(0, 5, 100);

const greenlightClose = new THREE.Vector3(0, 5, -10);
const greenlightFar = new THREE.Vector3(0, 5, -100);

const redlightClose = new THREE.Vector3(10, 5, 0);
const redlightFar = new THREE.Vector3(100, 5, 0);

// GSAP Movement
const moveCameraWithGSAP = (targetPosition, logMessage) => {
    console.log(logMessage);
    gsap.to(camera.position, {
        duration: 1,
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        onUpdate: () => camera.lookAt(0, 0, 0),
        ease: "power3.out"
    });
};


//ABOUT
const tiltCameraUpwardsWithGSAP_ABOUT = (logMessage) => {
    console.log(logMessage);

    const targetRotationX = (.035) * (180/Math.PI);  // Tilt 45 degrees upwards.

    gsap.to(camera.rotation, {
        duration: 4,
        x: targetRotationX,
        onUpdate: () => camera.updateProjectionMatrix(),
        ease: "power3.out"
    });
};
//
////ART
const tiltCameraUpwardsWithGSAP_ART = (logMessage) => {
    console.log(logMessage);

    const targetRotationY = -(.05) * (180/Math.PI);  // Tilt 45 degrees to the left.

    gsap.to(camera.rotation, {
        duration: 4,
        y: targetRotationY,
        onUpdate: () => camera.updateProjectionMatrix(),
        ease: "power3.out"
    });
};
//
////PROJECTS
const tiltCameraUpwardsWithGSAP_PROJECTS = (logMessage) => {
    console.log(logMessage);

    const targetRotationY = (.05) * (180/Math.PI);  // Tilt 45 degrees to the right.

    gsap.to(camera.rotation, {
        duration: 4,
        y: targetRotationY,
        onUpdate: () => camera.updateProjectionMatrix(),
        ease: "power3.out"
    });
};

//CONTACT
const tiltCameraUpwardsWithGSAP_CONTACT = (logMessage) => {
    
    console.log(logMessage);

    const targetRotationX = -(.07) * (180/Math.PI);  // Tilt 45 degrees downwards.

    gsap.to(camera.rotation, {
        duration: 4,
        x: targetRotationX,
        onUpdate: () => 
        camera.updateProjectionMatrix(),
        ease: "power3.out"
    });
};











// Event handlers for sections
document.getElementById("top").addEventListener("click", () => {
    if (!disable) {
        tiltCameraUpwardsWithGSAP_ABOUT("Tilt up");
        up();
    }
});
document.getElementById("midr").addEventListener("click", () => {
    if (!disable) {
        tiltCameraUpwardsWithGSAP_PROJECTS("Tilt up");
        down();
    }
});
document.getElementById("midl").addEventListener("click", () => {
    if (!disable) {
        tiltCameraUpwardsWithGSAP_ART("Tilt up");
        left();
    }
});
document.getElementById("bottom").addEventListener("click", () => {
    if (!disable) {
        tiltCameraUpwardsWithGSAP_CONTACT("Tilt up");
        right();
    }
});


let up = function (){
    disable = true
    setTimeout(function() {
        window.location.href = "./navigation/about_me/aboutme.html"
    }, 1500)
}

let down = function (){
    disable = true
    setTimeout(function() {
        window.location.href = "./navigation/contacts/contacts.html"
    }, 1500)
}

let left = function (){
    disable = true
    setTimeout(function() {
        window.location.href = "./navigation/art/art.html"
    }, 1500)
}

let right = function (){
    disable = true
    setTimeout(function() {
        window.location.href = "./navigation/projects/projects.html"
    }, 1500)
}




    // Mouse enter and leave handlers for "top"
    document.getElementById("top").addEventListener("mouseenter", () => {
        if (!disable) {
            gsap.to(blueLight.position, {
                duration: .5,
                x: bluelightClose.x,
                y: bluelightClose.y,
                z: bluelightClose.z,
                ease: "power3.out"
            });
            moveCameraWithGSAP(p1, "up");
        }
    });
    document.getElementById("top").addEventListener("mouseleave", () => {
        if (!disable) {
            gsap.to(blueLight.position, {
                duration: .5,
                x: bluelightFar.x,
                y: bluelightFar.y,
                z: bluelightFar.z,
                ease: "power3.out"
            });
        }
    });
    
    // Mouse enter and leave handlers for "midr"
    document.getElementById("midr").addEventListener("mouseenter", () => {
        if (!disable) {
            gsap.to(redLight.position, {
                duration: .5,
                x: redlightClose.x,
                y: redlightClose.y,
                z: redlightClose.z,
                ease: "power3.out"
            });
            moveCameraWithGSAP(p2, "right");
        }
    });
    document.getElementById("midr").addEventListener("mouseleave", () => {
        if (!disable) {
            gsap.to(redLight.position, {
                duration: .5,
                x: redlightFar.x,
                y: redlightFar.y,
                z: redlightFar.z,
                ease: "power3.out"
            });
        }
    });
    
    // Mouse enter and leave handlers for "midl"
    document.getElementById("midl").addEventListener("mouseenter", () => {
        if (!disable) {
            gsap.to(yellowLight.position, {
                duration: .5,
                x: yellowlightClose.x,
                y: yellowlightClose.y,
                z: yellowlightClose.z,
                ease: "power3.out"
            });
            moveCameraWithGSAP(p4, "left");
        }
    });
    document.getElementById("midl").addEventListener("mouseleave", () => {
        if (!disable) {
            gsap.to(yellowLight.position, {
                duration: .5,
                x: yellowlightFar.x,
                y: yellowlightFar.y,
                z: yellowlightFar.z,
                ease: "power3.out"
            });
        }
    });
    
    // Mouse enter and leave handlers for "bottom"
    document.getElementById("bottom").addEventListener("mouseenter", () => {
        if (!disable) {
            gsap.to(greenLight.position, {
                duration: .5,
                x: greenlightClose.x,
                y: greenlightClose.y,
                z: greenlightClose.z,
                ease: "power3.out"
            });
            moveCameraWithGSAP(p3, "down");
        }
    });
    document.getElementById("bottom").addEventListener("mouseleave", () => {
        if (!disable) {
            gsap.to(greenLight.position, {
                duration: .5,
                x: greenlightFar.x,
                y: greenlightFar.y,
                z: greenlightFar.z,
                ease: "power3.out"
            });
        }
    });