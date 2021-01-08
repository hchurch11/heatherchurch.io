import React, { useState, useEffect } from "react";
import BlogTile from "./BlogTile";

export default function Blog() {
  const [myBlog, setMyBlog] = useState([]);
  //const mediumUrl = "https://medium.com/feed/@heatherlchurch11";

  const rss2json = process.env.REACT_APP_RSS;
  useEffect(() => {
    fetch(rss2json)
      .then((res) => res.json())
      .then((data) => {
        setMyBlog(data);
        console.log(data);
      });
  }, [rss2json]);

  function displayBlogs() {
    console.log(myBlog);
    return (
      myBlog.items &&
      myBlog.items.map((blog) => {
        return (
          blog.categories.length > 0 && (
            <BlogTile key={blog.pubDate} blogData={blog} />
          )
        );
      })
    );
  }

  return (
    <div className="Blog container-fluid">
      <h1 className="page-title"> Blog </h1>
      {displayBlogs()}
    </div>
  );
}
