import React, { Fragment } from "react"

const posts=[
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Actualité', href: '#' },
        imageUrl:'https://unsplash.it/910',
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Actualité', href: '#' },
        imageUrl:'https://unsplash.it/900',
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Facebook is creating a news section in Watch to feature breaking news',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Actualité', href: '#' },
        imageUrl:'https://unsplash.it/950',
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Actualité', href: '#' },
        imageUrl:'https://unsplash.it/901',
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Actualité', href: '#' },
        imageUrl:'https://unsplash.it/902',
    },
]


export default function Blog() {
    return (
        <Fragment>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14 pt-14 mt-24">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Totac Blog</h2>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">See how game-changing companies are making the most of every engagement with Preline.</p>
                </div>

                <div class="grid lg:grid-cols-2 gap-6">
                {posts.map((post) => (


                    <a class="group relative block" href="/">
                        <div class="flex-shrink-0 relative w-full rounded-xl overflow-hidden  h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                            <img class="w-full h-full absolute top-0 left-0 object-cover" src={post.imageUrl} alt="Image Description" />
                        </div>

                        {/* <div class="absolute top-0 inset-x-0 z-10">
                            <div class="p-4 flex flex-col h-full sm:p-6">

                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <img class="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                                    </div>
                                    <div class="ml-2.5 sm:ml-4">
                                        <h4 class="font-semibold text-white">
                                            Gloria
                                        </h4>
                                        <p class="text-xs text-white/[.8]">
                                            Jan 09, 2021
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

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
            </div>
        </Fragment>

    )
}
