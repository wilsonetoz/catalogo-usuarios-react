export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Erro ao carregar usuários.");
  return res.json();
}

export async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Erro ao carregar usuário.");
  return res.json();
}

export async function getUserPosts(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`
  );
  if (!res.ok) throw new Error("Erro ao carregar posts.");
  return res.json();
}
