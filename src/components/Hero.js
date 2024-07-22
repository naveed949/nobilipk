import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import p1 from '../images/sorgente_home_filtra-1.2400x0.jpg'
import p4 from '../images/velis-home-1.2400x0.jpg'
// import p5 from '../images/wellbox-home.2400x0.jpg'

const Hero = () => {
  // Array of image sources
  // const images = [p5, p4, p1];

  // State to hold the current image source
  // const [currentImg, setCurrentImg] = useState(images[0]);

  // useEffect(() => {
  //   // Function to update the current image
  //   const updateImage = () => {
  //     setCurrentImg((prevImg) => {
  //       const currentIndex = images.indexOf(prevImg);
  //       const nextIndex = (currentIndex + 1) % images.length; // Loop back to the first image after the last
  //       return images[nextIndex];
  //     });
  //   };

  //   // Set up the interval
  //   const intervalId = setInterval(updateImage, 2000); // Change image every 2 seconds

  //   // Clean up the interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div className="hero" id="hero"

      >
        <div>
          <NavBar />
        </div>

        <div
          className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
          data-aos="zoom-in"
          style={{
            backgroundImage: `url(${p1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            paddingTop: '15rem'
          }}
        >
          <div
            id="hero"
            className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left"


          >
            <div
              className="lg:w-1/2 flex flex-col justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                Wonder in every drop
              </h1>

              <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                Let you marvel at taps and showers of the highest made in Italy
                excellence, 100% Nobili since 1954.
              </div>
              <div
                className="border-l-4 border-yellow-600 text-yellow-600 p-1 flex items-center"
                role="alert"
              >
                <p>It is an official <strong>Nobili</strong> store in Pakistan.</p>
              </div>
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <a
                  href="https://www.nobili.it/en/manifest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
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
              className="flex lg:justify-end w-full lg:w-1/2 rounded-t"
              data-aos="fade-up"
              data-aos-delay="700"
              style={{
                backgroundImage: `url(${p4})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%'
              }}
            >
              {/* Image is now set as background of this div */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
