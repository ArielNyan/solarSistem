import * as three from 'three'
import {OrbitControl, OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

import starsTexture from '../img/stars.jpg';
import sunTexture from '../img/sun.jpg';
import mercuryTexture from '../img/mercury.jpg';
import venusTexture from '../img/venus.jpg';
import earthTexture from '../img/earth.jpg';
import marsTexture from '../img/mars.jpg';
import jupiterTexture from '../img/jupiter.jpg';
import saturnTexture from '../img/saturn.jpg';
import saturnRingTexture from '../img/saturn ring.png';
import uranusTexture from '../img/uranus.jpg';
import uranusRingTexture from '../img/uranus ring.png';
import neptuneTexture from '../img/neptune.jpg';
import plutoTexture from '../img/pluto.jpg';

const wWidth = window.innerWidth
const wHeight = window.innerHeight

const render = new three.WebGLRenderer()
render.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(render.domElement)

const scene = new three.Scene()
const camera = new three.PerspectiveCamera(
  45,
  wWidth/wHeight,
  0.1,
  1000
)

const orbit = new OrbitControls(camera, render.domElement)

camera.position.set(-90, 140, 140)
orbit.update()

const aLight = new three.AmbientLight(0x333333)
scene.add(aLight)

const cubeTLoader = new three.CubeTextureLoader()

scene.background = cubeTLoader.load([
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
])

const tLoader = new three.TextureLoader()

const geoSol = new three.SphereGeometry(16, 30, 30)
const matSol = new three.MeshBasicMaterial({
  map: tLoader.load(sunTexture)
})

const sol = new three.Mesh(geoSol, matSol)
scene.add(sol)

const geoMerc = new three.SphereGeometry(3, 30, 30)
const matMerc = new three.MeshStandardMaterial({
  map: tLoader.load(mercuryTexture)
})
const parMerc = new three.Object3D()
const mercurio = new three.Mesh(geoMerc, matMerc)
parMerc.add(mercurio)
scene.add(parMerc)
mercurio.position.x = 28


const geoSat = new three.SphereGeometry(10, 30, 30)
const matSat = new three.MeshStandardMaterial({
  map: tLoader.load(saturnTexture)
})
const parSat = new three.Object3D()
const sat = new three.Mesh(geoSat, matSat)
parSat.add(sat)
scene.add(parSat)
sat.position.x = 138


const geoSatRing = new three.RingGeometry(12, 20, 32)
const matSatRing = new three.MeshBasicMaterial({
  map: tLoader.load(saturnRingTexture),
  side: three.DoubleSide
})
//const parSatRing = new three.Object3D()
const satRing = new three.Mesh(geoSatRing, matSatRing)
sat.add(satRing)
satRing.rotateX(-0.5 * Math.PI)
//scene.add(parSatRing)

const geoVenus = new three.SphereGeometry(5, 30, 30)
const matVenus = new three.MeshStandardMaterial({
  map: tLoader.load(venusTexture)
})
const parVenus = new three.Object3D()
const venus = new three.Mesh(geoVenus, matVenus)
parVenus.add(venus)
scene.add(parVenus)
venus.position.x = 45

const geoTerra = new three.SphereGeometry(5.5, 30, 30)
const matTerra = new three.MeshStandardMaterial({
  map: tLoader.load(earthTexture)
})
const parTerra = new three.Object3D()
const terra = new three.Mesh(geoTerra, matTerra)
parTerra.add(terra)
scene.add(parTerra)
terra.position.x = 60

const geoMarte = new three.SphereGeometry(4, 30, 30)
const matMarte = new three.MeshStandardMaterial({
  map: tLoader.load(marsTexture)
})
const parMarte = new three.Object3D()
const marte = new three.Mesh(geoMarte, matMarte)
parMarte.add(marte)
scene.add(parMarte)
marte.position.x = 78

const geoJupiter = new three.SphereGeometry(8, 30, 30)
const matJupiter = new three.MeshStandardMaterial({
  map: tLoader.load(jupiterTexture)
})
const parJup = new three.Object3D()
const jupiter = new three.Mesh(geoJupiter, matJupiter)
parJup.add(jupiter)
scene.add(parJup)
jupiter.position.x = 100

const geoUr = new three.SphereGeometry(6, 30, 30)
const matUr = new three.MeshStandardMaterial({
  map: tLoader.load(uranusTexture)
})
const parUr = new three.Object3D()
const uranus = new three.Mesh(geoUr, matUr)
parUr.add(uranus)
scene.add(parUr)
uranus.position.x = 175

const geoUrRing = new three.RingGeometry(9, 10)
const matUrRing = new three.MeshBasicMaterial({
  map: tLoader.load(uranusRingTexture),
  side: three.DoubleSide
})
const urRing = new three.Mesh(geoUrRing, matUrRing)
uranus.add(urRing)

const geoNep = new three.SphereGeometry(6, 30, 30)
const matNep = new three.MeshStandardMaterial({
  map: tLoader.load(neptuneTexture)
})
const parNep = new three.Object3D()
const netuno = new three.Mesh(geoNep, matNep)
parNep.add(netuno)
scene.add(parNep)
netuno.position.x = 200

const pointLight = new three.PointLight(0xffffff, 1000, 300, 1.3)
scene.add(pointLight)

const animate = () => {
  sol.rotateY(0.004)
  parMerc.rotateY(0.05)
  parSat.rotateY(0.004)
  sat.rotateY(0.008)
  venus.rotateY(0.004)
  parVenus.rotateY(0.015)
  mercurio.rotateY(0.04)
  terra.rotateY(0.005)
  parTerra.rotateY(0.01)
  marte.rotateY(0.01)
  parMarte.rotateY(0.007)
  parJup.rotateY(0.005)
  parUr.rotateY(0.0035)
  parNep.rotateY(0.0033)
  render.render(scene, camera)
}
render.setAnimationLoop(animate)

window.addEventListener('resize', () => {
  camera.aspect = wWidth/wHeight
  camera.updateProjectionMatrix()
  render.setSize(wWidth, wHeight)
})
