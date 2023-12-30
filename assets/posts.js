const jsonplaceholder_url = "https://jsonplaceholder.typicode.com";

const wrapper = document.getElementById("posts-wrapper");

const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

async function getPosts() {
    const res = await fetch(jsonplaceholder_url + "/posts?userId=" + userId);
    const data = await res.json();

    for (const post of data) { 
    wrapper.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
    <div class="card mb-3">
    <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${post.body.slice(0, 20)}</p>
    <p>${post.id}</p>
    </div>
    </div>
    </div>`;
}
}


if (!userId || userId === "" || userId > 10 || userId < 1) {
    const userId = prompt("Lütfen geçerli bir userId girin: ");
    const parsedUserId = parseInt(userId);
    if (parsedUserId < 11 && parsedUserId > 0){
         window.location.href = 
            window.location.origin + "/posts.html?userId=" + parsedUserId;
    } else{ 
     window.location.reload();
    }
}

else {
    getPosts();
}



