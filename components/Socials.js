import Link from "next/link";

import { RiInstagramLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="text-center flex items-center gap-x-5 text-2xl ">
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      
    </div>
  )
};

export default Socials;
