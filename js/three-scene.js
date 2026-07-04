(function(){
  const container=document.getElementById('canvas-container');
  if(!container)return;

  const scene=new THREE.Scene();
  scene.fog=new THREE.FogExp2(0x070b15,.0008);

  const camera=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,.1,1000);
  camera.position.z=50;

  const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  container.appendChild(renderer.domElement);

  // --- Geometry Group ---
  const group=new THREE.Group();
  scene.add(group);

  const geometries=[
    new THREE.BoxGeometry(1,1,1),
    new THREE.IcosahedronGeometry(.7,0),
    new THREE.TorusGeometry(.8,.25,16,32),
    new THREE.OctahedronGeometry(.8,0),
    new THREE.TorusKnotGeometry(.6,.2,64,8),
    new THREE.ConeGeometry(.9,.9,6),
  ];

  const colors=[0xf7a600,0xff6b35,0x4a9eff,0x00d4aa,0xf7a60088,0xff6b3588];
  const meshes=[];

  for(let i=0;i<45;i++){
    const geo=geometries[i%geometries.length];
    const mat=new THREE.MeshBasicMaterial({
      color:colors[i%colors.length],
      wireframe:true,
      transparent:true,
      opacity:.08+Math.random()*.12,
    });
    const mesh=new THREE.Mesh(geo,mat);
    mesh.position.set(
      (Math.random()-.5)*120,
      (Math.random()-.5)*80,
      (Math.random()-.5)*60-20
    );
    mesh.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,0);
    const s=.5+Math.random()*2;
    mesh.scale.set(s,s,s);
    mesh.userData={rotSpeed:{x:(Math.random()-.5)*.008,y:(Math.random()-.5)*.008,z:(Math.random()-.5)*.004}};
    group.add(mesh);
    meshes.push(mesh);
  }

  // --- Particles ---
  const particleCount=800;
  const pos=new Float32Array(particleCount*3);
  for(let i=0;i<particleCount*3;i++)pos[i]=(Math.random()-.5)*200;
  const particleGeo=new THREE.BufferGeometry();
  particleGeo.setAttribute('position',new THREE.BufferAttribute(pos,3));
  const particleMat=new THREE.PointsMaterial({
    color:0xf7a600,
    size:.12,
    transparent:true,
    opacity:.3,
    blending:THREE.AdditiveBlending,
  });
  const particles=new THREE.Points(particleGeo,particleMat);
  scene.add(particles);

  // --- Grid (engineering feel) ---
  const gridHelper=new THREE.GridHelper(200,40,0xf7a60022,0x4a9eff11);
  gridHelper.position.y=-30;
  scene.add(gridHelper);

  // --- Lines ---
  const lineMat=new THREE.LineBasicMaterial({color:0xf7a60011,transparent:true});
  for(let i=0;i<12;i++){
    const pts=[];
    for(let j=0;j<=20;j++){
      const t=j/20;
      pts.push(new THREE.Vector3(
        (Math.random()-.5)*10+t*(Math.random()-.5)*80,
        (Math.random()-.5)*10+Math.sin(t*Math.PI*2)*5,
        (Math.random()-.5)*10+t*(Math.random()-.5)*80
      ));
    }
    const g=new THREE.BufferGeometry().setFromPoints(pts);
    const line=new THREE.Line(g,lineMat);
    scene.add(line);
  }

  // --- Mouse tracking ---
  let mouseX=0,mouseY=0;
  let targetX=0,targetY=0;
  document.addEventListener('mousemove',e=>{
    mouseX=(e.clientX/window.innerWidth-.5)*2;
    mouseY=(e.clientY/window.innerHeight-.5)*2;
  });

  // --- Resize ---
  window.addEventListener('resize',()=>{
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
  });

  // --- Render loop ---
  function animate(){
    requestAnimationFrame(animate);

    targetX+=(mouseX-targetX)*.02;
    targetY+=(mouseY-targetY)*.02;

    group.rotation.x+=.0004+targetY*.0003;
    group.rotation.y+=.0008+targetX*.0003;

    meshes.forEach(m=>{
      m.rotation.x+=m.userData.rotSpeed.x;
      m.rotation.y+=m.userData.rotSpeed.y;
      m.rotation.z+=m.userData.rotSpeed.z;
    });

    particles.rotation.y+=.0002;

    renderer.render(scene,camera);
  }
  animate();

  // --- Expose fade control ---
  window.__sceneGroup=group;
  window.__sceneOpacity=1;
})();

if(typeof THREE==='undefined'){
  document.getElementById('canvas-container').style.display='none';
}
