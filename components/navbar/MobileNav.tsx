import Link from 'next/link'
import { navLinks } from './Nav'
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean
  closeNav: () => void
}


const MobileNav = ({closeNav, showNav}:Props) => {
  
  const navOpen = showNav ? 'translate-y-0' : 'translate-y-[-100%]'
  return (
    <div>
      {/* Overlay */}
      <div className={`transform ${navOpen} fixed transition-all 
      duration-500 inset-0 z-[100]
      w-full h-screen`}>
      {/* navlLinks */}
      <div className={`text-white ${navOpen} transform transition-all 
      duration-500 deley-300 fixed flex justify-center flex-col 
      h-full w-[100%] sl:w-[100%] bg-white text-center space-y-6`}>
      {navLinks.map((link) => {
                return (
                  <Link key={link.id} href={link.url}>
                    <p className='text-black text-lg'>
                      {link.label}
                    </p>
                  </Link>
                );
              })}
              {/* Close button */}
              <button onClick={closeNav}>
                <CgClose className='absolute top-[1rem] 
                right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-black z-[1000]' />
              </button>
          </div>
      </div>
    </div>
  )
}

export default MobileNav