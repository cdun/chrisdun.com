// JS Goes here - ES6 supported
// import {Scene, PerspectiveCamera, WebGLRenderer, AnimationMixer} from 'three';
// import 'three/GLTFLoader';
// import 'three/OrbitControls';

// const scene = new Scene();
// const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const controls = new THREE.OrbitControls(camera);
// const clock = new THREE.Clock();

// let animationMixer;

// const size = window.innerWidth;
// const renderer = new WebGLRenderer();
// renderer.setClearColor("#394020", 1);
// renderer.setPixelRatio(devicePixelRatio || 1);
// renderer.setSize(size, size);
// document.body.appendChild(renderer.domElement);

// const light = new THREE.AmbientLight( 0xffffff ); // soft white light
// scene.add( light );

// const loader = new THREE.GLTFLoader();
// loader.load(
//     '/Lift.glb',
//     (lift) => {

//         animationMixer = new AnimationMixer(lift.scene);
//         lift.animations.forEach((anim) => {
//             animationMixer.clipAction(anim).play();
//         })

//         scene.add(lift.scene);

//     },
//     () => {},
//     (err) => { console.error('Failwhale.', err) },
// )

// camera.position.z = 5;

// function render(){
//     requestAnimationFrame(render);
//     if (animationMixer) animationMixer.update(clock.getDelta());
//     controls.update();
// 	renderer.render(scene, camera);
// }

// render();