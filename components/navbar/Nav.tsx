import Link from 'next/link'

type Props = {
  openNav:()=>void
}

export const navLinks = [
  {
    id:1,
    url: '#',
    label: 'Про полк'
  },
  {
    id:2,
    url: '#',
    label: 'Вакансії'
  },
  {
    id:3,
    url: '#',
    label: 'Наші воїни'
  },
  {
    id:4,
    url: '#',
    label: 'Грошове забезпечення'
  },
]

const Nav = ({openNav}:Props) => {
  return (
    <div className='fixed h-[10vh] z-[100] w-screen
    transition-all duration-200 bg-black bg-opacity-30
    overflow-hidden'>
        <div className='flex items-center h-full 
        justify-between w-[95%] sm:w[90%] xl:w-[80%] 
        mx-auto'>
            {/* logo */}
            <div className='flex items-center space-x-2'>
                <p className='text-white font-bold text-lg lg:text-2xl whitespace-nowrap pr-1'>425 ОШП Скала</p>
            </div>
            {/* nav links */}
            <div className='lg:flex items-center justify-between hidden whitespace-nowrap w-[50%]'>
              {navLinks.map((link) => {
                return (
                  <Link key={link.id} href={link.url}>
                    <p className='text-white text-lg hover:text-[#FFB400] relative group'>
                      {link.label}
                      <span className='absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#FFB400] 
                      transition-all duration-500 group-hover:left-0 group-hover:w-full'>
                      </span>
                    </p>
                  </Link>
                );
              })}
            </div>
            <div className='flex items-center space-x-4'>
              {/* Enter button */}
              <button className='lg:flex text-[#FFB400] text-xl 
              border-2 border-[#FFB400] px-20 py-2 rounded-full
              hover:bg-[#FFB400] hover:text-white transition-all
              duration-1000 font-bold hidden ml-1'>
                Вступити
              </button>
              {/* Burger menu */}
              <button className='lg:hidden' onClick={openNav}>
                <div className='w-8 h-1 bg-white'></div>
                <div className='w-8 h-3 bg-black'></div>
                <div className='w-8 h-1 bg-white'></div>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Nav