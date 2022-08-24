const button = document.getElementById('btn');


button.addEventListener('click', handleClick);

async function handleClick() {
  const module = await import('./module.js');
  console.log(module)
  module.hello();
}