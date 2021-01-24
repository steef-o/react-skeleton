import useFetch from "../hooks/useFetch";
import SkeletonArticle from "../skeletons/SkeletonArticle";

const Articles = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="articles">
      <h2>Articles</h2>
      {data &&
        data.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}
      {loading && [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} />)}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Articles;
