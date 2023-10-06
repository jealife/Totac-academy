import { Link } from "react-scroll";
// import graduate from '../../assets/images/Graduation Certificate (HD).png'
import HoldingLightBublb from "../../assets/images/Holding Lightbulb.png";

export default function Hero() {
  return (
    <div className="bg-white" id="hero">
      <div className="relative isolate px-6 pt-14 pb-8 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff953e] to-[#ff7607] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl pt-32  sm:py-48 lg:pt-36 lg:pb-0">
          <div className="text-center">
            <h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Se former pour se Transformer
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-gray-600"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              À TOTAC, nous croyons profondément dans le pouvoir de la
              transformation personnelle et professionnelle à travers
              l’apprentissage et nous croyons en nos apprenants.
            </p>
            <div
              className="mt-10 flex items-center justify-center gap-x-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <Link
                to="cyles"
                spy={true}
                smooth={true}
                offset={-85}
                duration={500}
                className="rounded-md bg-[blue] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              >
                Formations
              </Link>
              <a
                href="/"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-[orange] cursor-pointer"
              >
                En savoir plus sur la pédagogie TOTAC{" "}
                <span aria-hidden="true" className="hover:text-[#ff7607]">
                  →
                </span>
              </a>
            </div>
          </div>
          <div
            className="image-hero w-full flex items-center  justify-center pt-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src={HoldingLightBublb} width={300} alt="" />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#466bff] to-[#0400ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
