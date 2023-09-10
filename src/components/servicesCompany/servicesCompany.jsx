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
const blue='#264A8A'
export default function ServicesCompany() {
    return (
        <div className='w-full bg-white-100 py-24'>
            <div className="mx-auto max-w-7xl px-3 lg:px-8  flex flex-col gap-14  justify-center py-14">

                <div>
                    <h2 className="text-gray-900 font-semibold text-3xl text-center">
                        Services aux entreprises
                    </h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-center gap-5'>
                    {
                        servicesCompany.map((item) => (
                            <div className="item flex flex-col justify-center text-center items-center
                            ">
                                <div className="rounded-full shadow-xl bg-gray-800 p-2">
                                    <img className='bg-gray-700' src={item.imageUrl} alt=""
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="btn">
                                    <button className='mt-5 rounded-xl p-3   bg-[{#264A8A}] hover:bg-blue-600 duration-75 text-white  lg:self-center'>
                                        <Link href={item.href}>
                                            {item.name}
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        )
                        )}
                </div>

            </div>
        </div>
    )
}
