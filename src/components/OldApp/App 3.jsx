import { useState, useEffect } from "react";

export default function App() {
  const [blogPostData, setBlogPostData] = useState({
    title: "",
    body: "",
  });

  console.log(blogPostData);
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (blogPostData.title && blogPostData.body) {
            try {
              const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(blogPostData),
                }
              );
              const data = await response.json();
              console.log(data);
            } catch (error) {
              console.log(error);
            }
          }
        }}
      >
        <div>
          <label htmlFor="title">Titile</label>
          <input
            type="text"
            name="title"
            id="title"
            value={blogPostData.title}
            onChange={(e) => {
              setBlogPostData((currentBlogPost) => ({
                ...currentBlogPost,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            name="body"
            id="body"
            value={blogPostData.body}
            onChange={(e) => {
              setBlogPostData((currentBlogPost) => ({
                ...currentBlogPost,
                body: e.target.value,
              }));
            }}
          />
        </div>
        <button>Create Post</button>
      </form>
    </div>
  );
}
