import React from 'react'
import { Link } from 'react-scroll'

const servicesCompany = [
    {
        name: 'Ingénierie pédagogique ',
        imageUrl: 'https://totac.ma/wp-content/uploads/2023/05/wired-lineal-112-book-morph.png',
        href: '#',
    },
    {
        name: 'Certification des formateurs internes',
        imageUrl: 'https://totac.ma/wp-content/uploads/2023/05/wired-lineal-237-star-rating-morph.png',
        href: '#',
    },
    {
        name: 'Digitalisation des formation internes​',
        imageUrl: 'https://totac.ma/wp-content/uploads/2023/05/wired-lineal-478-computer-display.png',
        href: '#',
    },
]
export default function ServicesCompany() {
    return (
        <div className='w-full bg-indigo-100-100 py-24 relative '>

            <div className="mx-auto max-w-7xl px-3 lg:px-8  flex flex-col gap-14  justify-center py-14">


                <div>
                    <h2 className="text-gray-900 font-semibold text-3xl text-center">
                        Services aux entreprises
                    </h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-center gap-8'>
                    {
                        servicesCompany.map((item) => (
                            <div className="item flex flex-col justify-center text-center items-center
                            "
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="rounded-full bg-white shadow-xl p-2" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                                    <img src={item.imageUrl} alt=""
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="-mt-12">
                                    <button className="mt-5 rounded-xl p-3   bg-[blue] hover:bg-blue-600 duration-75 text-white  lg:self-center">
                                        <Link href={item.href}>
                                            {item.name}
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        )
                        )}
                </div>
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff953e] to-[#ff7607] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
