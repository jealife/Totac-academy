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
console.log(posts[0].imageUrl);

export default function Blog() {
  return (
    <Fragment>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative mx-auto text-center lg:h-max mb-10 lg:mb-14  mt-20  bg-[url('https://unsplash.it/910')] bg-cover bg-no-repeat bg-center   w-full rounded-2xl ">
          <div className=" w-full h-full bg-black/60   lg:py-36 py-12 px-4   rounded-2xl">
            <h2 className="text-3xl font-bold  tracking-tight text-white sm:text-6xl">
              Totac Blog
            </h2>
            <p className="mt-3 text-gray-200 dark:text-gray-200 ">
              See how game-changing companies are making the most of every
              engagement with Preline.
            </p>
          </div>
          <div className="socials-media flex gap-5 absolute w-full items-center justify-center">
            <svg

              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#DBEAFE"
            >
              <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#EFF6FF"
            >
              <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#FCE7F3"
            >
              <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
              <circle cx="16.806" cy="7.207" r="1.078"></circle>
              <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
            </svg>
          </div>
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
                <h3 className="text-lg font-semibold">Dernières actualités</h3>
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
            {/* <iframe
              className="mt-5 lg:w-96 w-80 h-[500px] border-0 lg:rounded-none rounded-2xl"
              src="https://www.facebook.com/v9.0/plugins/page.php?adapt_container_width=true&amp;app_id=113869198637480&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df310a21b6f5a654%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff3cf179cd85d47c%26relation%3Dparent.parent&amp;container_width=340&amp;height=400&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2F/TOTAC.ma&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width=500"
            ></iframe> */}
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
              {" "}
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
