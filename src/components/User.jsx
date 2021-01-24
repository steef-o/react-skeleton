import useFetch from "../hooks/useFetch";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const User = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  return (
    <div className="user">
      <h2>User Profiles</h2>
      {data && (
        <div className="profile">
          <h3> {data.username}</h3>
          <p>{data.email}</p>
          <a href={data.website}>{data.website}</a>
        </div>
      )}
      {loading && <SkeletonProfile theme="dark" />}
      {error && <p>{error.message}</p>}
    </div>
  );
};
export default User;
