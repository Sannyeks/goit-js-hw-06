const listEl = document.querySelector('#categories');
console.log(`Number of categories:`, listEl.children.length)
const items = listEl.children;
for (const item of items) {
    console.log(`Category:`, item.firstElementChild.textContent);
    const itemListEl = item.lastElementChild.children;
    console.log(`Elements:`, itemListEl.length);
}