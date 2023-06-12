const quantity = document.querySelectorAll('#categories .item')

console.log(`Number of categories: ${quantity.length}`);

quantity.forEach ((category) => {
    let title = category.querySelector('h2').textContent;
    let eachEl = category.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${eachEl}`);
})