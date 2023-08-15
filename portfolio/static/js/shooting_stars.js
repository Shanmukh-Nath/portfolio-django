// Create starfield particles
  const starCount = 500;
  const starGeometry = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;

    starPositions[i * 3] = x;
    starPositions[i * 3 + 1] = y;
    starPositions[i * 3 + 2] = z;
  }

  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 3 }); // Increase size here

  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

// Create shooting star particles
  const shootingStarCount = 10;
  const shootingStarGeometry = new THREE.BufferGeometry();
  const shootingStarPositions = new Float32Array(shootingStarCount * 3);

  for (let i = 0; i < shootingStarCount; i++) {
    const x = (Math.random() - 0.5) * 1000;
    const y = (Math.random() - 0.5) * 1000;
    const z = (Math.random() - 0.5) * 1000;

    shootingStarPositions[i * 3] = x;
    shootingStarPositions[i * 3 + 1] = y;
    shootingStarPositions[i * 3 + 2] = z;
  }

  shootingStarGeometry.setAttribute('position', new THREE.BufferAttribute(shootingStarPositions, 3));
  const shootingStarMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 3 });

  const shootingStars = new THREE.Points(shootingStarGeometry, shootingStarMaterial);
  scene.add(shootingStars);

  // Animate shooting stars
  function animateShootingStars() {
    for (let i = 0; i < shootingStars.geometry.attributes.position.array.length; i += 3) {
      const z = shootingStars.geometry.attributes.position.array[i + 2];
      if (z > -500) {
        shootingStars.geometry.attributes.position.array[i + 2] -= 5;
      } else {
        shootingStars.geometry.attributes.position.array[i] = (Math.random() - 0.5) * 1000;
        shootingStars.geometry.attributes.position.array[i + 1] = (Math.random() - 0.5) * 1000;
        shootingStars.geometry.attributes.position.array[i + 2] = 1000;
      }
    }
    shootingStars.geometry.attributes.position.needsUpdate = true;
  }

// Animate function
  function animate() {
    requestAnimationFrame(animate);

    // Update planet positions for orbit
    mercury.rotation.y += 0.005;
    venus.rotation.y += 0.003;
    // Update other planets

    animateShootingStars(); // Add this line to update shooting stars

    renderer.render(scene, camera);
  }

  // Call animate function
  animate();