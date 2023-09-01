import * as THREE from 'three';
import './style.css'
import gsap from 'gsap'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
//scene
const scene = new THREE.Scene()


//variables
let verytop = document.getElementById("top")
let midr = document.getElementById("midr")
let midl = document.getElementById("midl")
let bottom = document.getElementById("bottom")


let ongoingup = false
let ongoingdown = false
let ongoingleft = false
let ongoingright = false
let ongoingcheck = false
let checkongoing = false



//creating the plane
const nameplane_geometry = new THREE.PlaneGeometry(1, 1)
const nameplane_material = new THREE.MeshStandardMaterial( {
  color: "#ffffff",
  roughness: 0.5,
})

const mesh = new THREE.Mesh(nameplane_geometry, nameplane_material)
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
controls.enablePan = true
controls.enableZoom = false








//resize
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerWidth
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

});



//loop
const loop = () => {
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop);
  controls.update()
};
loop()






verytop.addEventListener("click", function(){
  howdidinotcatchthis()
  move_up()
  console.log("up")
});

midr.addEventListener("click", function() {
  howdidinotcatchthis()
  move_right()
  console.log("right")
});
midl.addEventListener("click", function() {
  howdidinotcatchthis()
  move_left()
  console.log("left")
});
bottom.addEventListener("click", function() {
  howdidinotcatchthis()
  move_down()
  console.log("down")
});




//Camera rotation help, https://dustinpfister.github.io/2022/04/08/threejs-object3d-rotation/

const p0 = new THREE.Vector3(0, 0, 10)
//up
const p1 = new THREE.Vector3(0, 8, 10)
//right
const p2 = new THREE.Vector3(8, 0, 10)
//down
const p3 = new THREE.Vector3(0, -8, 10)
//left
const p4 = new THREE.Vector3(-8, 0, 10)


camera.position.set(2, 4, 8);

let fix = 0
let elaboration = 0


//the function is placed before any of the other
//functions, so if ran, it will check if any of the 
//move_up/move_right things are running,

//but its not running this function at all
function howdidinotcatchthis() {
  
  if (ongoingdown) {
  checkongoing = true
  };
  if (ongoingright) {
    checkongoing = true
    };
  if (ongoingleft) {
  checkongoing = true
  };
  if (ongoingup) {
    checkongoing = true
    };
  return
};

function move_up() {
  if (ongoingcheck) {
    console.log("Interrupting the loop.");
    ongoingcheck = false;
    return;
  }
  console.log("HEY")

  let i = 1;

  function iterate_up() {
    if (i < 100 && !ongoingcheck) {
      const fix = i / 100;
      const elaboration = -(Math.exp(-4 * fix)) + 0.99;
      camera.position.lerpVectors(p0, p1, elaboration);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      i++;

      if (i >= 100) {
        ongoingup = false;
      } else {
        ongoingup = true;
      }

      console.log(ongoingcheck);
      setTimeout(iterate_up, 10); // 10 milliseconds delay
    }
  }

  console.log("???");
  iterate_up();
}

function move_right() {
  let i = 1;
  

  function iterate_right() {
    
    if (i < 100) {
      const fix = i / 100;
      const elaboration = -(Math.exp(-4 * fix)) + 0.99;
      camera.position.lerpVectors(p0, p2, elaboration);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      i++;
      // Call the next iteration after a delay
      setTimeout(iterate_right, 10); // 10 milliseconds delay
      if (i >= 100) {
        ongoingright = false
      }
      else {
        ongoingright = true
      };
      if (ongoingcheck) {
        console.log("Why is this broken??")
        ongoingcheck = false
        return
      };
    };
  };
  iterate_right();
};

function move_down() {
  let i = 1;

  function iterate_down() {
    if (i < 100) {
      const fix = i / 100;
      const elaboration = -(Math.exp(-4 * fix)) + 0.99;
      camera.position.lerpVectors(p0, p3, elaboration);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      i++;
      // Call the next iteration after a delay
      setTimeout(iterate_down, 10); // 10 milliseconds delay
      console.log(ongoingdown)
      if (i >= 100) {
        ongoingdown = false
      }
      else {
        ongoingdown = true
      };
      if (ongoingcheck) {
        console.log("Why is this broken??")
        ongoingcheck = false
        return
      };
    };
  };
  
  iterate_down();
};

function move_left() {
  let i = 1;

  function iterate_left() {
    if (i < 100) {
      const fix = i / 100;
      const elaboration = -(Math.exp(-4 * fix)) + 0.99;
      camera.position.lerpVectors(p0, p4, elaboration);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      i++;
      // Call the next iteration after a delay
      setTimeout(iterate_left, 10); // 10 milliseconds delay
      if (i >= 100) {
        ongoingleft = false
      }
      else {
        ongoingleft = true
      };
      console.log(ongoingleft)
      if (ongoingcheck) {
        console.log("Why is this broken??")
        ongoingcheck = false
        return
    };
    };
  };
  iterate_left();
};
