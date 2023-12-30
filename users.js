const jsonplaceholder_url = "https://jsonplaceholder.typicode.com";
 
const users_wrapper = document.getElementById("users-wrapper");
 
async function getUsers() {



const res = await fetch(jsonplaceholder_url + "/users");
const data = await res.json();
for (user of data) {
users_wrapper.innerHTML += `
<div class="col-12 col-md-6 col-lg-4 col-xl-3">
<div class="card mb-3">
<div class="card-body">
<h5 class="card-title">${user.name}</h5>
<p class="card-text">${user.company.name}</p>
<p class="card-text">${user.email}</p>
<p>${user.id}</p>
<a href="/posts.html?userId=${user.id}" class="btn btn-primary">Go Posts</a>
</div>
</div>
</div>
`;
}
}
 
getUsers();