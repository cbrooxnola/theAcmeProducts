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
  {name: 'foo', price: 30},
  {name: 'bar', price: 40},
  {name: 'bazz', price: 5},
  {name: 'quq', price: 10}
];

function render (){
  const html = products.map((product) => {
    return `<li>
    <h2>${product.name}</h2>
    $${product.price}
    </li>`
  }).join('');
  ul.innerHTML = html;
}
render();