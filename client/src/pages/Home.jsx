import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-10 p-10 md:py-28  max-w-6xl mx-auto ">
        <div className="m-auto [@media(max-width:768px)]:text-center  md:w-2/3">
          <h1 className="text-2xl mb-5 font-bold  lg:text-4xl">Welcome to Our Blog!</h1>
          <p className=" text-sm sm:text-xl">
            Dive into a world of insightful articles and tutorials on topics
            such as web development, software engineering, and programming
            languages. Whether you're here to stay updated, get inspired, or
            learn something new, our blog offers a diverse collection of content
            crafted to engage.
          </p>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dolej50tb/image/upload/v1718736891/Blog/undraw_world_re_768g_fyfqmm.svg"
            alt=""
          />
        </div>
      </div>
      <div className="max-w-6xl m-auto p-1 flex flex-col gap-10 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Popular Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
