import './styles/style.css';
import * as THREE from 'three';
import vertexShader from "./shaders/vertexParticles.glsl"
import fragmentShader from "./shaders/fragment.glsl"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const mobile = window.matchMedia("(max-width: 480px)").matches;
const canvas = document.querySelector('canvas.webgl');


/*
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
        Scene
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= 
*/
const scene = new THREE.Scene();

/*
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
        Mesh
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= 
*/
let number = 10000;
const Wgeometry = new THREE.BufferGeometry();
const Wpositions = new Float32Array(number * 3);
const Wrandoms = new Float32Array(number * 3);
const Wsizes = new Float32Array(number);
for (let i = 0; i < number * 3; i += 3) {
        Wpositions[i] = (Math.random() - 0.5) * 10;
        Wpositions[i + 1] = (Math.random() - 0.5) * 10;
        Wpositions[i + 2] = (Math.random() - 0.5) * 10;

        Wrandoms[i] = Math.random();
        Wrandoms[i + 1] = Math.random();
        Wrandoms[i + 2] = Math.random();

        Wsizes[i] = 0.5 * Math.random();
}
Wgeometry.setAttribute('position', new THREE.BufferAttribute(Wpositions, 3));
Wgeometry.setAttribute('aRandom', new THREE.BufferAttribute(Wrandoms, 3));
Wgeometry.setAttribute('aSize', new THREE.BufferAttribute(Wsizes, 1));
const Wmaterial = new THREE.ShaderMaterial({
        uniforms: {
                time: { value: 1.0 },
                resolution: { value: new THREE.Vector4() },
                normals: { value: new THREE.TextureLoader().load('textures/normal.jpg') }
        },
        vertexShader,
        fragmentShader
});
Wmaterial.needsUpdate = true;
const Wmesh = new THREE.Points(Wgeometry, Wmaterial);
scene.add(Wmesh);


/*
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
        Light
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= 
*/
const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);
// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);

const hemisphereLight = new THREE.HemisphereLight(0x7444ff, 0xff00bb, 0.5);
scene.add(hemisphereLight);

const pointLight = new THREE.PointLight(0x7444ff, 1, 100);
pointLight.position.set(0, 3, 4);
scene.add(pointLight);

/*
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
        Resizing
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= 
*/
const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
};

window.addEventListener('resize', () => {
        // Update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

/*
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
        Cameras
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= 
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
});
renderer.setClearColor(0x000000, 0);
renderer.setSize(sizes.width, sizes.height);

/*
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
        Controls
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= 
*/
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/*
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
        Animation Frame
=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= 
*/
const clock = new THREE.Clock();
let previousTime = 0;
const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        const deltaTime = elapsedTime - previousTime;
        previousTime = elapsedTime;

        // Update material
        Wmesh.material.uniforms.time.value = elapsedTime;
        Wmesh.rotation.x += 0.005 * Math.PI;
        Wmesh.rotation.y += 0.005 * Math.PI;

        // Update controls
        controls.update();

        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
}
tick();
