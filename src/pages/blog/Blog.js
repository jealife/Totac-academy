import React, { Fragment } from "react"

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Actualité', href: '#' },
        imageUrl: 'https://unsplash.it/910',
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Actualité', href: '#' },
        imageUrl: 'https://unsplash.it/900',
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Facebook is creating a news section in Watch to feature breaking news',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Formation', href: '#' },
        imageUrl: 'https://unsplash.it/950',
    },
    {
        id: 4,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Quiz', href: '#' },
        imageUrl: 'https://unsplash.it/901',
    },
    {
        id: 5,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Event', href: '#' },
        imageUrl: 'https://unsplash.it/902',
    },
]


export default function Blog() {
    return (
        <Fragment>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14 lg:py-14 mt-24">
                    <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Totac Blog</h2>
                    <p class="mt-3 text-gray-600 dark:text-gray-400 ">See how game-changing companies are making the most of every engagement with Preline.</p>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 ">

                    <div class="grid lg:grid-cols-2 gap-6 col-span-3 col-start-0">
                        {posts.map((post) => (


                            <a class="group relative block" href="/">
                                <div class="flex-shrink-0 relative w-full rounded-xl overflow-hidden  h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                                    <img src={post.imageUrl} class="w-full h-full absolute top-0 left-0 object-cover" alt="Image Description" />
                                </div>

                                <div class="absolute top-0 inset-x-0 z-10">
                                    <div class="p-4 flex flex-col h-full sm:p-6">

                                        <div class="flex items-center">
                                            {/* <div class="flex-shrink-0">
                                        <img class="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                                    </div> */}
                                            <div class="ml-2.5 sm:ml-4">

                                                <p class="text-xs text-white/[.8] bg-blue-800 rounded-full p-2">
                                                    {post.category.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="absolute bottom-0 inset-x-0 z-10">
                                    <div class="flex flex-col h-full p-4 sm:p-6">
                                        <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                                            {post.title}
                                        </h3>
                                        <p class="mt-2 text-white/[.8]">
                                            Facebook launched the Watch platform in August
                                        </p>
                                    </div>
                                </div>
                            </a>

                        ))}


                    </div>
                    <div class="grid grid-cols-1 gap-10 ">

                        <a class="group rounded-xl overflow-hidden" href="/">
                            <div class="sm:flex">
                                <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                    <img src="https://unsplash.it/902" class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"  alt="Image Description" />
                                </div>

                                <div class="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                                    <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 ">
                                        Studio by Preline
                                    </h3>
                                    <p class="mt-3 text-gray-600 ">
                                        Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
                                    </p>
                                    <p class="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                                        Read more
                                        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </a>

                    </div>


                </div>
            </div>
        </Fragment>

    )
}

