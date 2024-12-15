//1.
// const categoriesList = document.querySelector('#categories');
// const categoryItems = categoriesList.querySelectorAll('.item');
// console.log(`У списку ${categoryItems.length} категорії.`);

// categoryItems.forEach(item => {
//     const categoryTitle = item.querySelector('h2').textContent;
//     const categoryElements = item.querySelectorAll('ul li');
//     console.log(`Категорія: ${categoryTitle}`);
//     console.log(`Кількість елементів: ${categoryElements.length}`);
//});

//2.


// const ingredients = [
//     'Картопля',
//     'Гриби',
//     'Часник',
//     'Помідори',
//     'Зелень',
//     'Приправи',
//   ];

//   const ingredientsList = document.querySelector('#ingredients');

//   const items = ingredients.map(ingredient => {
//     const li = document.createElement('li');
//     li.textContent = ingredient;
//     return li;
//   });

// ingredientsList.append(...items);

// 3.
// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];
// const gallery = document.querySelector('#gallery');

// const galleryMarkup = images
//   .map(
//     ({ url, alt }) =>
//       `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-image"></li>`
//   )
//   .join('');

//   gallery.insertAdjacentHTML('beforeend', galleryMarkup);

  //4

  let counterValue = 0;

  const valueElement = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const increment = () => {
    counterValue += 1;
    updateValue();
  };
  const decrement = () => {
    counterValue -= 1;
    updateValue();
  };

  const updateValue = () => {
    valueElement.textContent = counterValue;
  };
  
  decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);