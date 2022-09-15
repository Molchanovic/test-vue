export async function getPostList() {
    const apiPost = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dataPosts = await apiPost.json();
    return dataPosts;
}

export async function getUserList() {
    const apiUser = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataUser = await apiUser.json();
    return dataUser;
}
