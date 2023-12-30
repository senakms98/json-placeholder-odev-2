const jsonplaceholder_url = "https://jsonplaceholder.typicode.com";

const wrapper = document.getElementById("posts-wrapper");

const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

console.log("userId", userId);

console.log(window.location.origin);

async function getPosts(uId) {
if (!uId || uId === "") {
    const userId = prompt("Lütfen geçerli bir userId girin: ");
    const parsedUserId = parseInt(userId);
    if (parsedUserId < 11 && parsedUserId > 0){
        return (window.location.href = 
            window.location.origin + "/posts.html?userId=" + parsedUserId);
    }
    return getPosts(null);
}

    const res = await fetch(jsonplaceholder_url + "/posts?userId=" + uId);
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

getPosts(userId);