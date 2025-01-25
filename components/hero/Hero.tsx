import Image from 'next/image'
const Hero = () => {
    return (
      <div className="w-screen h-auto lg:h-screen bg-cover bg-center">
        <Image
          src="/bg.png"
          layout="fill"
          objectFit="cover"
          quality={40} // Adjust quality as needed
          alt="Background"
        />
        <div data-aos="fade-right" className="flex items-center flex-col lg:justify-center h-full">
          <div className='w-[90%] lg:w-[80%] flex mt-[20%] md:mt-[10%] lg:mt-20 justify-end'>
            <div className='w-[25px] md:w-[40px] lx:w-[51px] h-[35px] lg:h-[70px]'>
            <Image
              src="/logo.png"
              width={51}
              height={70}
              alt="logo"
            />
          </div>
          <div className='flex flex-col ml-2'>
            <p className="text-white font-semibold text-[13px] md:text-[20px] lg:text-xl xl:text-2xl">ЗБРОЙНІ СИЛИ</p>
            <p className="text-white font-semibold text-[13px] md:text-[20px] lg:text-xl xl:text-2xl">УКРАЇНИ</p>
          </div>
          </div>
          <h1 className="text-white font-semibold text-[55px] md:text-[75px] lg:text-[116px] xl:text-[156px] mt-40">ДОЛУЧАЙСЯ</h1>
          <h2 className="text-[35px] font-[400] md:text-[45px] lg:text-[62px] xl:text-[82px] text-[#EF9F6A] 
          text-opacity-60 pb-4 mt-[-20px] lg:pb-0">ДО КРАЩИХ</h2>
        </div>
      </div>
    );
  };
  
  export default Hero;