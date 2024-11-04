import React from 'react'
import NavBar from '../components/Navbar/NavBar'
// import p1 from '../images/sorgente_home_filtra-1.2400x0.jpg'
// import p4 from '../images/velis-home-1.2400x0.jpg'
// import p5 from '../images/hero-bg.svg'
// import p10 from '../images/hero-img.svg'

const Hero = () => {
  // Array of image sources
  // const images = [p5, p4, p1]

  // State to hold the current image source
  // const [currentImg, setCurrentImg] = useState(images[0])

  // useEffect(() => {
  //   // Function to update the current image
  //   const updateImage = () => {
  //     setCurrentImg((prevImg) => {
  //       const currentIndex = images.indexOf(prevImg)
  //       const nextIndex = (currentIndex + 1) % images.length // Loop back to the first image after the last
  //       return images[nextIndex]
  //     })
  //   }

  //   // Set up the interval
  //   const intervalId = setInterval(updateImage, 2000) // Change image every 2 seconds

  //   // Clean up the interval on component unmount
  //   return () => clearInterval(intervalId)
  // }, []) // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div className="hero" id="home">
        <div>
          <NavBar />
        </div>

        <div
          className="p-2 m-auto mx-4 mt-8 overflow-hidden lg:mt-4 md:p-12 h-5/6"
          data-aos="zoom-in"
          id="home-main"
          style={{
            marginBottom: '5rem',
            paddingTop: '5rem',
          }}
        >
          <div
            id="home1"
            className="flex flex-col justify-start py-8 text-center lg:flex-row lg:text-left"
          >
            <div
              className="flex flex-col justify-center lg:w-1/2"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="mb-5 text-3xl font-bold text-blue-900 md:text-5xl">
                Wonder in every drop
              </h1>

              <div className="mb-5 text-xl font-semibold tracking-tight text-gray-500">
                Let you marvel at taps and showers of the highest made in Italy
                excellence, 100% Nobili since 1954.
              </div>
              <div
                className="flex items-center p-1 text-yellow-600 border-l-4 border-yellow-600"
                role="alert"
              >
                <p>
                  It is an official <strong>Nobili</strong> store in Pakistan,
                  brougt to you by <strong>JQ Traders</strong>.
                </p>
              </div>
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <a
                  href="https://www.nobili.it/en/manifest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-white bg-blue-900 shadow-xl hover:bg-blue-800 rounded-2xl sm:w-auto sm:mb-0"
                >
                  Discover Nobili
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div
              className="flex flex-col justify-center lg:w-1/2"
              style={{ marginBottom: '5rem' }}
            >
              {/* <img
                alt="Nobili taps"
                className="float-right h-full rounded-t"
                src={p1}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
