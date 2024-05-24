import { RiRedditLine } from "react-icons/ri";

export default function Header() {
  return (
    <nav className="m-0 pb-4 px-2 py-3 flex justify-between border-b border-b-neutral-600 bg-neutral-900">
      <h1 className='flex w-content font-bold text-xl px-1 md:px-3 pt-1 items-center uppercase'><RiRedditLine className="text-orange-500" />&nbsp;cloneit</h1>
      <div className="w-full md:w-[26rem] mx-3">
        <input type='text' className='rounded-xl w-full px-4 py-2 bg-neutral-700' />
      </div>
      <div>
        <ul className="flex">
          <li className="mr-2 bg-neutral-700 rounded-full py-2 md:px-6 hidden lg:inline-block">Get App</li>
          <li className="mr-1 md:mr-2 bg-orange-600 rounded-full inline-block py-2 px-3 md:px-6">Login</li>
          <li className="mr-0 md:mr-2 hover:rounded-full hover:bg-neutral-700 inline-block py-2 px-4">...</li>
        </ul>
      </div>
    </nav>
  )
}