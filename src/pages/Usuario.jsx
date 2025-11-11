import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, getUserPosts } from "../services/api";

export default function Usuario() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const [u, p] = await Promise.all([getUser(id), getUserPosts(id)]);
        setUser(u);
        setPosts(p);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return <p>Usuário não encontrado.</p>;

  return (
    <div className="container">
      <h2>{user.name}</h2>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Telefone:</b> {user.phone}</p>
      <p><b>Empresa:</b> {user.company.name}</p>
      <p><b>Website:</b> {user.website}</p>
      <p><b>Endereço:</b> {user.address.street}, {user.address.city}</p>

      <h3>Posts</h3>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <p>
            <b>{post.title}</b>{" "}
            <button
              onClick={() =>
                setSelectedPost(selectedPost === post.id ? null : post.id)
              }
            >
              Ver conteúdo
            </button>
          </p>
          {selectedPost === post.id && <p>{post.body}</p>}
        </div>
      ))}
    </div>
  );
}
