const loadCategories = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    
    displayCategories(data.data.news_category);
   
}

const displayCategories = categories =>{
    const categoryContainer = document.getElementById('category-container');
    categories.forEach(category =>{
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('cat-btn')
        categoryDiv.innerHTML =`
            <button type="button" class="m-4 p-3 border-0 bg-transparent"><span class="text-secondary fw-semibold">${category.category_name}</span> </button>
        `;
        

        categoryContainer.appendChild(categoryDiv);
    });
};


loadCategories();