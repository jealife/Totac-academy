import React, { Fragment } from "react";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Actualité", href: "#" },
    imageUrl: "https://unsplash.it/910",
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Actualité", href: "#" },
    imageUrl: "https://unsplash.it/900",
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Facebook is creating a news section in Watch to feature breaking news",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Formation", href: "#" },
    imageUrl: "https://unsplash.it/950",
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Quiz", href: "#" },
    imageUrl: "https://unsplash.it/901",
  },
  {
    id: 5,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Event", href: "#" },
    imageUrl: "https://unsplash.it/902",
  },
  {
    id: 6,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Event", href: "#" },
    imageUrl: "https://unsplash.it/955",
  },
  {
    id: 7,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Event", href: "#" },
    imageUrl: "https://unsplash.it/942",
  },
];

export default function Blog() {
  return (
    <Fragment>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className=" mx-auto text-center mb-10 lg:mb-14 lg:py-14 mt-20 py-14 w-full rounded-2xl bg-blue-700  ">

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
            Totac Blog
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 ">
            See how game-changing companies are making the most of every
            engagement with Preline.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 ">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 col-span-3 ">
            {posts.map((post) => (
              <a className="group relative block" href="/">
                <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden  h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                  <img
                    src={post.imageUrl}
                    className="w-full h-full absolute top-0 left-0 object-cover"
                    alt="cover"
                  />
                </div>

                <div className="absolute top-0 inset-x-0 z-10">
                  <div className="p-4 flex flex-col h-full sm:p-6">
                    <div className="flex items-center">
                      {/* <div className="flex-shrink-0">
                                        <img className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="" />
                                    </div> */}
                      <div className="ml-2.5 sm:ml-4">
                        <p className="text-xs text-white/[.8] bg-blue-800 rounded-full p-2">
                          {post.category.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 z-10">
                  <div className="flex flex-col h-full p-4 sm:p-6">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-white/[.8]">
                      Facebook launched the Watch platform in August
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="sticky lg:pl-5 flex lg:flex-col flex-col  mt-12 lg:mt-0  md:flex-row md:justify-between lg:justify-start  ">
            <div className="min-h-max">
              <div className="pb-4">
                <h3 className="text-lg font-semibold">
                  Dernières actualités
                </h3>
              </div>
              <a className="group rounded-xl overflow-hidden" href="/">
                <div className="block">
                  <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full  h-44">
                    <img
                      src="https://unsplash.it/910"
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out md:w-80 w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                      alt="coverimage"
                    />
                  </div>

                  <div className="grow mt-5">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                      Studio by Preline
                    </h3>
                    <p className="mt-3 text-gray-600 md:w-80">
                      Produce professional, reliable streams easily leveraging
                      Preline's innovative broadcast studio
                    </p>
                    <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                      Read more
                      <svg
                        className="w-2.5 h-2.5"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </a>
              
            </div>
            <iframe
              className="mt-5 lg:w-96 w-80 h-[500px] border-0 lg:rounded-none rounded-2xl"
              src="https://www.facebook.com/v9.0/plugins/page.php?adapt_container_width=true&amp;app_id=113869198637480&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df310a21b6f5a654%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff3cf179cd85d47c%26relation%3Dparent.parent&amp;container_width=340&amp;height=400&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2F/TOTAC.ma&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width=500"
            ></iframe>
            <script
              type="text/javascript"
              src="https://www.embedista.com/j/fbwidget.js"
            ></script>
            <div id="fbroot"></div>"{" "}
            <div
              style={{
                overflow: "auto",
                position: "absolute",
                height: 0,
                width: 0,
              }}
            >
              "{" "}
              <a href="https://www.embedista.com/embed-facebook-feed">
                Embed Facebook Feed
              </a>
            </div>
            <div
              class="fblike"
              data-width="320px"
              data-layout=""
              data-action=""
              data-size=""
              data-share="true"
            ></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
