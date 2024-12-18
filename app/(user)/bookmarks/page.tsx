"use client";

import React from "react";
import image1 from "../../../assets/post1.webp";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Preloader from "@/components/Loader/Preloader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { GetSession } from "@/utils/GetSession";
import { useSession } from "next-auth/react";
import BookmarkTable from "./_components/BookmarkTable";

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

const LOGGED_IN_USER = gql`
  query User($userId: String!) {
  user(id: $userId) {
    bookmarks {
      id
      title
      description
      imageURL
      createdAt
      categories
      userId
      }
    }
  }
`


const Bookmarks = () => {

  const { data: session } = useSession();
  const id: string | undefined = session?.user?.id

  const { data, loading, error } = useQuery(LOGGED_IN_USER, {
    variables: { userId: id },
  });


  if (loading) return <Preloader />;
  if (error) return <p>{error.message}</p>

  const { user } = data;
  const { bookmarks } = user;

  return (
    <div
      className="relative pt-2 lg:pt-2 min-h-screen"
      suppressHydrationWarning
    >
      <div className="bg-cover w-full flex justify-center items-center">
        <div className="w-full bg-opacity-40 backdrop-filter backdrop-blur-lg">
          <div className="w-12/12 mx-auto rounded-2xl bg-opacity-40 backdrop-filter backdrop-blur-lg">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-8">
              My Bookmarked
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 text-center mx-auto">
              {bookmarks?.map((post) => (
                <BookmarkTable post={post} key={post.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
