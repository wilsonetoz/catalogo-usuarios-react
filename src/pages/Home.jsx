import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getUsers, getUserPosts } from "../services/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(localStorage.getItem("search") || "");
  const [city, setCity] = useState(localStorage.getItem("city") || "");
  const [postsCount, setPostsCount] = useState({});  const [page, setPage] = useState(1);
  
  const usersPerPage = 5;
  
  useEffect(() => {
    async function load() {
      try {
        const data = await getUsers();
        setUsers(data);
        setFiltered(data);
        await loadPostsCount(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  useEffect(() => {
    let data = users.filter(
      (u) => {
        const pesquisa = search.toLowerCase();
        return (
            u.name.toLowerCase().includes(pesquisa) ||
            u.email.toLowerCase().includes(pesquisa) || 
            u.address.city.toLowerCase().includes(pesquisa)
        )
    });
    if (city) data = data.filter((u) => u.address.city === city);
    setFiltered(data);
    setPage(1);
  }, [search, city, users]);

  useEffect(() => {
  localStorage.setItem("search", search);
  localStorage.setItem("city", city);
}, [search, city]);

  async function loadPostsCount(usersList) {
    const counts = {};
    for (const user of usersList) {
      const posts = await getUserPosts(user.id);
      counts[user.id] = posts.length;
    }
    setPostsCount(counts);
  }

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  const cities = [...new Set(users.map((u) => u.address.city))];
  const totalPages = Math.ceil(filtered.length / usersPerPage);
  const startIndex = (page - 1) * usersPerPage;
  const currentUsers = filtered.slice(startIndex, startIndex + usersPerPage);

  return (
    <div className="container">
      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar por nome, e-mail ou cidade"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Todas as cidades</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <p>Exibindo {currentUsers.length} de {filtered.length} usuarios {" "}- Pagina {page} de {totalPages}</p>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cidade</th>
            <th>Posts</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, i) => (
            <tr key={user.id} className={i % 2 === 0 ? "linha-par" : ""}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{postsCount[user.id] ?? "..."}</td>
              <td>
                <Link to={`/usuario/${user.id}`} className="botao">
                  Ver detalhes
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

       {/* Controles de Paginação */}
      <div className="paginacao">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Anterior
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
