// src/fabricSetup.js
let fabric;

async function initFabric() {
  if (typeof window !== 'undefined') {
    const module = await import('fabric');
    fabric = module.fabric;
    window.fabric = fabric;
  }
}

initFabric();

export { fabric };