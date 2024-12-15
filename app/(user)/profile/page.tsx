import Image from "next/image";
import React from "react";
import image from "../../../assets/post1.webp";
import image1 from "../../../assets/post1.webp";
import profileBG from "../../../assets/profilebg.jpg";
import { Card } from "@/components/ui/card";

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

const Profile = () => {
  return (
    <>
      <div className="h-full">
        <div className=" rounded-lg shadow-xl pb-8">
          <div
            x-data="{ openSettings: false }"
            className="absolute right-12 mt-4 rounded"
          >
            <div
              x-show="openSettings"
              className=" absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl"
              style={{ display: "none" }}
            >
              <div className="py-2 border-b">
                <p className="text-gray-400 text-xs px-6 uppercase mb-1">
                  Settings
                </p>
                <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Share Profile</span>
                </button>
                <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Block User</span>
                </button>
                <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">More Info</span>
                </button>
              </div>
              <div className="py-2">
                <p className="text-gray-400 text-xs px-6 uppercase mb-1">
                  Feedback
                </p>
                <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Report</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[250px]">
            <Image
              src={profileBG}
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
              alt="profile-image"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <Image
              src={image}
              className="w-40 h-auto border-4 border-white rounded-full"
              alt="profile-image"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">Amanda Ross</p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            </div>
            <p className="text-gray-700">
              Senior Software Engineer at Tailwind CSS
            </p>
            <p className="text-sm text-gray-500">New York, USA</p>
          </div>
        </div>
        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                  <span className="font-bold w-24">Full name:</span>
                  <span className="text-gray-700">Amanda S. Ross</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Joined:</span>
                  <span className="text-gray-700">
                    10 Jan 2022 (25 days ago)
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Email:</span>
                  <span className="text-gray-700">amandaross@example.com</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Location:</span>
                  <span className="text-gray-700">New York, US</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Languages:</span>
                  <span className="text-gray-700">English, Spanish</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full 2xl:w-2/3">
            <div className="flex-1 rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">My Blogs </h4>
              <div className="w-full mt-4 bg-opacity-40 backdrop-filter backdrop-blur-lg">
                <div className="w-12/12 mx-auto rounded-2xl bg-opacity-40 backdrop-filter backdrop-blur-lg">
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center mx-auto">
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
                            <h3 className="text-xl text-[20px] font-semibold">
                              {post?.title}
                            </h3>
                            <p className="text-[14px] line-clamp-2">
                              {post?.description}
                            </p>
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
              {/* <div className="mt-4">
          <canvas id="verticalBarChart" style={{display: 'block', boxSizing: 'border-box', height: 414, width: 828}} width={1656} height={828} />
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
