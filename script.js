var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 6;

var renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize',()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectMatrix();
})




// Koło
var geometry = new THREE.SphereGeometry(1, 10, 10);
var material = new THREE.MeshLambertMaterial({color:0xffcc00})
var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

var light = new THREE.PointLight(0xffffff, 1, 500)
light.position.set(10,0,25);
scene.add(light)


renderer.render(scene,camera)