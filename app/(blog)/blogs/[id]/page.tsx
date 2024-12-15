import Image from "next/image";
import React from "react";
import image from "../../../../assets/post1.webp";

const SinglePost = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 py-8 dark:bg-slate-900">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="content">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 dark:text-white">
              Blog Title Here
            </h1>
            <p className="text-gray-600">Published on April 4, 2023</p>
          </div>
          <div className="user flex gap-2">
            <div className="pr-3">
              <Image
                className="h-12 w-12 rounded-full object-cover"
                src={image}
                alt={"author-image"}
              />
            </div>

            <div className="flex flex-1">
              <div>
                <p className="text-sm font-semibold text-start">Authore name</p>
                <p className="text-md text-gray-500 text-start">Role : User</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-3/4">
            <Image
              src={image}
              alt="Blog Featured Image"
              className="mb-8 w-full h-auto"
            />
            <div className="prose max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin
                maximus bibendum felis, id fermentum odio vestibulum id. Sed ac
                ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et
                ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh
                mollis consectetur.
              </p>
              <p>
                Suspendisse potenti. Mauris euismod, magna sit amet aliquam
                dapibus, ex sapien porta nisl, vel auctor orci velit in risus.
                Fusce gravida bibendum dui, id volutpat felis dignissim a. Duis
                sagittis, arcu ac convallis bibendum, neque dolor suscipit
                dolor, non malesuada magna orci a mauris. Proin sollicitudin
                diam eu enim tincidunt dapibus. Aliquam pharetra purus mauris,
                id lacinia mi malesuada ut. Integer dignissim, urna nec
                scelerisque feugiat, lacus sapien tincidunt sem, sed luctus enim
                libero vel nunc. Vivamus ornare, felis quis feugiat luctus, orci
                justo auctor urna, et elementum orci dolor ac ante. Ut varius
                sapien nec fringilla sodales. Suspendisse lacinia, metus eu
                suscipit lobortis, enim sapien commodo sapien, non facilisis
                urna elit eget elit.
              </p>
              <p>
                Nulla facilisi. Sed venenatis pretium ante, sed tempor turpis
                sagittis ac. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Integer vel diam
                arcu. Maecenas bibendum efficitur ex sit amet tristique. Nulla
                vel sapien euismod, bibendum velit id, facilisis magna. Sed
                vestibulum nisi vitae justo congue, eu bibendum augue interdum.
                Nam quis orci nec nulla posuere facilisis. Etiam feugiat ligula
                quis est auctor, et sagittis orci elementum. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Sed gravida neque vel tellus volutpat, vel laoreet lacus
                commodo. Vivamus quis enim leo.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 pl-4">
            <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
              <div className="mb-8 space-x-5">
                <button
                  type="button"
                  className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-600"
                >
                  Latest Post
                </button>
              </div>
              <div className="flex flex-col">
                <div className="flex px-1 py-4">
                  <Image
                    alt="blog-image"
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src={image}
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Aenean ac tristique lorem, ut mollis dui.
                    </a>
                    <p className="mt-auto text-xs dark:text-gray-600">
                      5 minutes ago
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline"
                      >
                        Politics
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex px-1 py-4">
                  <Image
                    alt="blog-image"
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src={image}
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Nulla consectetur efficitur.
                    </a>
                    <p className="mt-auto text-xs dark:text-gray-600">
                      14 minutes ago
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline"
                      >
                        Sports
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex px-1 py-4">
                  <Image
                    alt="blog-image"
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src={image}
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Vitae semper augue purus tincidunt libero.
                    </a>
                    <p className="mt-auto text-xs dark:text-gray-600">
                      22 minutes ago
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline"
                      >
                        World
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex px-1 py-4">
                  <Image
                    alt="blog-image"
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src={image}
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Suspendisse potenti.
                    </a>
                    <p className="mt-auto text-xs dark:text-gray-600">
                      37 minutes ago
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline"
                      >
                        Business
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
