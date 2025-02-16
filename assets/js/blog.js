document.addEventListener("DOMContentLoaded", loadPosts);

function toggleModal() {
    document.getElementById('post-modal').classList.toggle('hidden');
}

function addPost() {
    let title = document.getElementById('title').value.trim();
    let email = document.getElementById('email').value.trim();
    let content = document.getElementById('content').value.trim();
    let timestamp = new Date().toLocaleString(); // Adds time and date

    if (title && email && content) {
        let post = { title, email, content, timestamp };
        savePost(post);
        displayPost(post);

        // Clear input fields
        document.getElementById('title').value = '';
        document.getElementById('email').value = '';
        document.getElementById('content').value = '';

        toggleModal();
    }
}

function savePost(post) {
    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    posts.unshift(post); // Add new post at the beginning
    localStorage.setItem("blogPosts", JSON.stringify(posts));
}

function loadPosts() {
    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    posts.forEach(post => displayPost(post));
}

function displayPost(post) {
    let postContainer = document.getElementById('posts');
    let postDiv = document.createElement('div');

    postDiv.classList.add(
        'w-full', 'bg-white', 'p-6', 'rounded-xl', 'shadow-md', 'border', 'border-gray-300', 'transition-all',
        'hover:shadow-lg', 'hover:border-[#31473a]'
    );



    postDiv.innerHTML = `
<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-xl"></div>
<div class="flex justify-between items-center">
    <h3 class="text-2xl font-semibold text-gray-800">${post.title}</h3>
    <span class="text-sm text-gray-500">${post.timestamp}</span>
</div>
<p class="mt-2 text-gray-600 italic">By: 
    <span class="font-semibold text-[#31473a]">${post.email}</span>
</p>
<p class="mt-3 text-gray-700 leading-relaxed">${post.content}</p>
<div class="mt-4 flex justify-end">
    <button onclick="deletePost(this)" 
        class="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition-all">
        Delete
    </button>
</div>
`;

    postContainer.prepend(postDiv);
}

function deletePost(button) {
    let postDiv = button.parentElement.parentElement;
    postDiv.remove();

    // Remove from localStorage
    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    let title = postDiv.querySelector('h3').innerText;
    posts = posts.filter(post => post.title !== title);
    localStorage.setItem("blogPosts", JSON.stringify(posts));
}