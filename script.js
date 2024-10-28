// sceen : Sob kichu but jeita tumi even dekhteso na sob kichu milye scene
// camera : Jeita tumi dekhteso vision e  or field of view te sheituk e tumi dekhte paba
// mesh-> geometry and material : jeta light chara dekha jay
// renderer
//requeste animation frame

// 1. Creating the scene
let scene = new THREE.Scene();
// 2. Creating the camera
// the arguments of camera (pov, aspect ratio, near, far)  .1 er cheye kom durer jinis dekha jabe na abar 100 er cheye besi kacher jinis dekha jabe na
let camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 5;
scene.add(camera);

let box = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: "red" });
let mesh = new THREE.Mesh(box, material);

scene.add(mesh);

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera); // 5. Rendering the scene, scene gulo dekacche basically like fps ektar por ekta

//  onek somoy emon hoy slow laptop e fps kom hoy fast laptop e fps besi hoy so amra sob laptop e same fps dekhanor jonno amra  clock use korbo sob laptop e

let clock = new THREE.Clock();
function animate() {
  window.requestAnimationFrame(animate); // computer er joto fps speed hok function oto bar cholbe infinitly
  renderer.render(scene, camera); // renderer hocche print orthat prottekbar print koro or jinista dekhao
  mesh.rotation.x = clock.getElapsedTime();
}
animate();
