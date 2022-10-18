const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();

    displayCategories(data.data.news_category);

}

const displayCategories = categories => {
    const categoryContainer = document.getElementById('category-container');

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');

        categoryDiv.classList.add('cat-btn')
        categoryDiv.innerHTML = `
            <button onclick="loadNews(${category.category_id})" id=${category.category_id} type="button" class="m-4 p-3 border-0 bg-transparent"><span class="text-secondary fw-semibold">${category.category_name}</span></button>
            
            
        `;

        // start loader



        categoryContainer.appendChild(categoryDiv);
        toggleSpinner(true);
    });

    // stop loader
    toggleSpinner(false);

};

// start loader
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

const loadNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`

    const res = await fetch(url)
    const data = await res.json()
    displayNews(data.data)
    // console.log(newsUrl);
}

const displayNews = news => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerText = '';
    news.forEach(singleNews => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        <div class="card mb-3 shadow-lg border-0" style="max-width: 1220px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${singleNews.thumbnail_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title fw-bold">${singleNews.title}</h5>
              <p class="card-text mt-3">${singleNews.details}</p>
              <div class="d-flex">
                <img style="width:80px" src="${singleNews.author.img}" class="rounded-circle " alt="...">
                <h5 class="mx-3 mt-4">${singleNews.author.name}</h5>
              <h5 class="mx-5 mt-4 m">view: ${singleNews.total_view}</h5>
              <div class="mt-4">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal">
  read more
</button>

              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
         `;

        newsContainer.appendChild(newsDiv)


    })
}

loadNews();

loadCategories();


