const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const rnd = Math.ceil(Math.random()*1000);
  const name = `Product-${rnd}`;
  products.push({name: name});
  console.log(products);
  render();
})

const products = [
  {name: 'foo'},
  {name: 'bar'},
  {name: 'bazz'},
  {name: 'quq'}
];

function render (){
  const html = products.map((product) => {
    return `<li>${product.name}</li>`
  }).join('');
  ul.innerHTML = html;
}
render();