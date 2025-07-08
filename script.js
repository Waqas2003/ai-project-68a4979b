const searchButton = document.querySelector('.search-bar button');
searchButton.addEventListener('click', () => {
    console.log('Search button clicked!');
});

const cartButtons = document.querySelectorAll('.products button');
cartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('Add to cart button clicked!');
    });
});
```
This code creates a basic ecommerce website with a navigation menu, search bar, hero section, features section, products section, and footer. The styles are written in a modern and clean way, using a responsive design that adapts to different screen sizes. The JavaScript code adds basic functionality to the search button and add to cart buttons.

Note that this is just a starting point, and you will need to add more functionality, styles, and content to make it a fully functional ecommerce website.