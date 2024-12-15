"use client";

import React from "react";
import image1 from "../../../assets/post1.webp";
import Image from "next/image";
import { Card } from "@/components/ui/card";



type Props = {
  post: {
    title: string;
    description: string;
    imageURL: string;
    url: string;
    category: string;
    users: Array<string | number>;
  };
  i: number;
};

const posts = [
  {
    title: "Blog Post 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ex tincidunt, dignissim purus non, dictum lectus. Sed et massa id nisl sagittis lobortis. Nullam vel enim at neque rutrum vestibulum. Sed auctor quam vel nunc lobortis, ac pulvinar orci semper. Sed ultrices, mi vel mattis consectetur, urna felis viverra ex, at tristique est ipsum ac eros. Sed at arcu vel sapien varius consectetur eu ac lectus. Nullam vel libero et lectus efficitur porttitor. Donec auctor nunc vel justo malesuada, et egestas nunc fermentum. Integer eleifend, purus in commodo consectetur, turpis ex dignissim velit, vel elementum neque ex id urna.",
    users: "Ryan Dangan",
    createdAt: "2022-01-01",
    imageURL: image1,
  },
  {
    title: "Blog Post 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ex tincidunt, dignissim purus non, dictum lectus. Sed et massa id nisl sagittis lobortis. Nullam vel enim at neque rutrum vestibulum. Sed auctor quam vel nunc lobortis, ac pulvinar orci semper. Sed ultrices, mi vel mattis consectetur, urna felis viverra ex, at tristique est ipsum ac eros. Sed at arcu vel sapien varius consectetur eu ac lectus. Nullam vel libero et lectus efficitur porttitor. Donec auctor nunc vel justo malesuada, et egestas nunc fermentum. Integer eleifend, purus in commodo consectetur, turpis ex dignissim velit, vel elementum neque ex id urna.",
    users: "John Doe",
    createdAt: "2022-01-01",
    imageURL: image1,
  },
  {
    title: "Blog Post 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ex tincidunt, dignissim purus non, dictum lectus. Sed et massa id nisl sagittis lobortis. Nullam vel enim at neque rutrum vestibulum. Sed auctor quam vel nunc lobortis, ac pulvinar orci semper. Sed ultrices, mi vel mattis consectetur, urna felis viverra ex, at tristique est ipsum ac eros. Sed at arcu vel sapien varius consectetur eu ac lectus. Nullam vel libero et lectus efficitur porttitor. Donec auctor nunc vel justo malesuada, et egestas nunc fermentum. Integer eleifend, purus in commodo consectetur, turpis ex dignissim velit, vel elementum neque ex id urna.",
    users: "Joseph Sim",
    createdAt: "2022-01-01",
    imageURL: image1,
  },
  {
    title: "Blog Post 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ex tincidunt, dignissim purus non, dictum lectus. Sed et massa id nisl sagittis lobortis. Nullam vel enim at neque rutrum vestibulum. Sed auctor quam vel nunc lobortis, ac pulvinar orci semper. Sed ultrices, mi vel mattis consectetur, urna felis viverra ex, at tristique est ipsum ac eros. Sed at arcu vel sapien varius consectetur eu ac lectus. Nullam vel libero et lectus efficitur porttitor. Donec auctor nunc vel justo malesuada, et egestas nunc fermentum. Integer eleifend, purus in commodo consectetur, turpis ex dignissim velit, vel elementum neque ex id urna.",
    users: "Joseph Sim",
    createdAt: "2022-01-01",
    imageURL: image1,
  },
  {
    title: "Blog Post 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ex tincidunt, dignissim purus non, dictum lectus. Sed et massa id nisl sagittis lobortis. Nullam vel enim at neque rutrum vestibulum. Sed auctor quam vel nunc lobortis, ac pulvinar orci semper. Sed ultrices, mi vel mattis consectetur, urna felis viverra ex, at tristique est ipsum ac eros. Sed at arcu vel sapien varius consectetur eu ac lectus. Nullam vel libero et lectus efficitur porttitor. Donec auctor nunc vel justo malesuada, et egestas nunc fermentum. Integer eleifend, purus in commodo consectetur, turpis ex dignissim velit, vel elementum neque ex id urna.",
    users: "Joseph Sim",
    createdAt: "2022-01-01",
    imageURL: image1,
  },
];

const Bookmarks = () => {
  return (
    <div
      className="relative pt-2 lg:pt-2 min-h-screen"
      suppressHydrationWarning
    >
      <div
        className="bg-cover w-full flex justify-center items-center"
      >
        <div className="w-full bg-opacity-40 backdrop-filter backdrop-blur-lg">
          <div className="w-12/12 mx-auto rounded-2xl bg-opacity-40 backdrop-filter backdrop-blur-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center mx-auto">
              {posts?.map((post, i) => (
                <>
                  <Card
                    key={i}
                    className="p-4 border mb-3 shadow-md transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <a
                      target="_self"
                      href="/blog/slug"
                      className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                    />
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={post?.imageURL}
                        alt={post?.title}
                        />
                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 text-red-700"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                        <span className="ml-1 text-sm text-slate-400">2</span>
                      </div>
                      <a
                        className="flex justify-center items-center bg-purple-700 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                        href="/blog/slug"
                        target="_self"
                        rel="noopener noreferrer"
                      >
                        Read article
                        <svg
                          className="ml-2 w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="flex flex-col gap-3 text-start py-3">
                      <h3 className="text-xl text-[20px] font-semibold">{post?.title}</h3>
                      <p className="text-[14px] line-clamp-3">{post?.description}</p>
                    </div>

                    <div className="flex justify-between items-center w-full pb-4 mb-auto">
                      <div className="flex items-center">
                        <div className="pr-3">
                          <Image
                            className="h-12 w-12 rounded-full object-cover"
                            src={post?.imageURL}
                            alt={post?.title}
                          />
                        </div>

                        <div className="flex flex-1">
                          <div>
                            <p className="text-sm font-semibold text-start">
                              {post?.users}
                            </p>
                            <p className="text-sm text-gray-500 text-start">
                              {post?.createdAt}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="text-sm flex items-center text-gray-500 ">
                          {post?.createdAt}
                          <svg
                            className="ml-1 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Card>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookmarks