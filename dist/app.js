/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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


/***/ })
/******/ ]);