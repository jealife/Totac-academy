import React from 'react'

// const cycles = [
//     {
//         name: "Formation des Consultants",
//         description: "Développez le mindset du consultant et ses postures et maîtrisez l’ingénierie du conseil. Cerise sur le gâteau : vous apprenez aussi à élaborez vos différents produits de conseil !",
//         imagUrl: 'https://totac.ma/wp-content/uploads/2023/05/Consultative-sales-pana-1024x1024.png'
//     },
//     {
//         name: "Formation des Formateurs",
//         description: "Un cycle développé sur la base des dernières recherches en neurosciences (fonctionnement du cerveau), psychologie (étude du comportement) et pédagogie (science de la formation).",
//         imagUrl: 'https://totac.ma/wp-content/uploads/2023/05/Fichier-1.png'
//     },
//     {
//         name: "Devenez Formateur Digital",
//         description: "Apprenez à créer des formations, les animer et les vendre à 100 % en ligne. Ce cycle allie habilement le digital learning et l’innovation pédagogique.",
//         imagUrl: 'https://totac.ma/wp-content/uploads/2023/05/Webinar-amico-1024x1024.png'
//     }
// ]

export default function CyclesSection() {
    return (
        <div className='w-full bg-indigo-100 py-14'>
            <div className="mx-auto max-w-7xl px-3 lg:px-8  flex flex-col gap-14  justify-center py-10" id='cyles'>
                <h1 className='text-gray-900 font-semibold text-3xl text-center'>Cycles de Formation</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-center gap-5'>

                    {/* {
                        cycles.map((item) => (

                        )
                    )} */}
                    <div className="rounded-2xl   w-full bg-white lg:text-center pb-5 shadow-lg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="w-full text-center px-4 flex flex-col  justify-center relative  items-center md:w-96 ">
                            <div className="w-full flex justify-center item-center">

                                <img className='w-72 -mb-20  pb-2' src='https://totac.ma/wp-content/uploads/2023/05/Consultative-sales-pana-1024x1024.png'
                                    alt=""
                                />
                            </div>

                            <div className="text-gray-900 pt-8 px-4 w-full border-b-[1px]">
                                <h3 className='font-bold text-2xl'>Formation des Consultants</h3>
                            </div>
                            <div className="px-2 pt-2">
                                <p className='text-gray-500'>Développez le mindset du consultant et ses postures et maîtrisez l’ingénierie du conseil. Cerise sur le gâteau : vous apprenez aussi à élaborez vos différents produits de conseil !</p>
                                <button className='mt-5 rounded-xl p-3 hover:bg-orange-400 duration-75 text-white bg-orange-600 lg:self-center'>
                                    Découvrez la formation
                                </button>
                            </div>

                        </div>

                    </div>
                    <div className="rounded-2xl   w-full bg-white lg:text-center pb-5 shadow-lg"
                        data-aos="fade-up"
                        data-aos-duration="1000"

                    >
                        <div className="w-full text-center px-4 flex flex-col  justify-center relative  items-center ">
                            <div className="w-full flex justify-center item-center">

                                <img className='w-72  py-5 mt-5  ' src="https://totac.ma/wp-content/uploads/2023/05/Fichier-1.png"
                                    alt=""
                                />
                            </div>

                            <div className="text-gray-900 pt-8 px-4 w-full border-b-[1px]">
                                <h3 className='font-bold text-2xl'>Formation des formateurs</h3>
                            </div>
                            <div className="px-2 pt-2">
                                <p className='text-gray-500'>
                                    Un cycle développé sur la base des dernières recherches en neurosciences (fonctionnement du cerveau), psychologie (étude du comportement) et pédagogie (science de la formation).
                                </p>
                                <button className='mt-5 rounded-xl p-3 hover:bg-orange-400 duration-75 text-white bg-orange-600 lg:self-center'>
                                    Découvrez la formation
                                </button>
                            </div>

                        </div>

                    </div>
                    <div className="rounded-2xl   w-full bg-white lg:text-center pb-5 shadow-lg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="w-full text-center px-4 flex flex-col  justify-center relative  items-center ">
                            <div className="w-full flex justify-center item-center">

                                <img className='w-64 -mb-9  ' src="https://totac.ma/wp-content/uploads/2023/05/Webinar-amico-1024x1024.png"
                                    alt=""
                                />
                            </div>

                            <div className="text-gray-900 pt-8 px-4 w-full border-b-[1px]">
                                <h3 className='font-bold text-2xl'>Formation des Consultants</h3>
                            </div>
                            <div className="px-2 pt-2">
                                <p className='text-gray-500'>
                                    Apprenez à créer des formations, les animer et les vendre à 100 % en ligne. Ce cycle allie habilement le digital learning et l’innovation pédagogique.
                                </p>

                                <button className='mt-5 rounded-xl p-3 hover:bg-orange-400 duration-75 text-white bg-orange-600 lg:self-center'>
                                    Découvrez la formation
                                </button>
                            </div>

                        </div>

                    </div>





                </div>
            </div>
        </div>
    )
}
