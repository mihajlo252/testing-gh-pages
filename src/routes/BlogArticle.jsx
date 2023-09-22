import MarkDown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const BlogArticle = () => {
  const location = useLocation();
  const { post } = location.state;

  const [markdown, setMarkdown] = useState("");
  const fetchMarkdown = async () => {
    try {
      const response = await fetch(`/markdown/${post.file}`);
      //   console.log(await response.text());
      setMarkdown(await response.text());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMarkdown();
    console.log(markdown);
  }, []);

  return (
    <div className="hero min-h-screen py-20 min-[1450px]:px-44 lg:px-32 md:px-28">
      <div className="hero-content flex-col lg:flex-row p-0 max-w-full">
          <MarkDown
            options={{
              overrides: {
                h1: {
                  component: (props) => (
                      <h1 className="text-5xl text-primary mb-10 font-bold">
                        {props.children}
                      </h1>
                  ),
                },
                p: {
                    component: (props) => (
                      <p className="py-6">{props.children}</p>
                    )
                },                
              },
            }}
          >
            {markdown}
          </MarkDown>
      </div>
    </div>
  );
};