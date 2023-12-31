import React from "react";
import logo from "../../assets/images/Logo_TOTAC.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="bg-white  border-t border-gray-200">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between gap-5">
          <div class="mb-6 md:mb-0">
            <a href="https://totac.vercel.app/" class="flex items-center">
              <img src={logo} class="h-12 mr-3" alt="TOTAC Logo" />
              {/* <span class="self-center text-2xl font-semibold whitespace-nowrap">TOTAC</span> */}
            </a>
            <div className="pr-9 lg:w-96 pt-3 w-full">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
                TOTAC est une académie de formation des formateurs, de formation
                des consultants et de formation des formateurs digitaux. TOTAC
                offre aux entreprises des services d’ingénierie pédagogique et
                de certification de leurs formateurs internes.
              </span>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Academie
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4 flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#404040"
                    class="w-14 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <Link
                    href="https://www.google.com/maps/place/Tour+Habous,+Rue+L%C3%A9on+l'Africain,+Casablanca+20250/@33.596202,-7.6131029,19.82z/data=!4m5!3m4!1s0xda7d282c9aefdcb:0x44b1c2142249f0c9!8m2!3d33.5962865!4d-7.6129467?hl=fr&coh=164777&entry=tt&shorturl=1"
                    class="hover:underline"
                  >
                    Académie23, 3e étage, Tour des Habous, Avenue des FAR (5 min
                    de Casa Port), Casablanca - Maroc
                  </Link>
                </li>
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#404040"
                    className="w-12 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <a href="tel:05 2230 4909" class="hover:underline">
                    +212 05 2230 4909
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link to="/blog" class="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="https://totac.ma/category/kit-pour-journalistes/"
                    class="hover:underline"
                  >
                    Kit pour journaliste
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="/" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://totac.vercel.app/" class="hover:underline">
              Totac
            </a>
            . Tout Droits Reservés.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/TOTAC.ma"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
            <a
              href="/"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
