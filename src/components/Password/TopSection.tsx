import { FaRegCopy } from 'react-icons/fa'

const TopSection = () => {
   return (
      <section className="w-full px-6 py-4 bg-zinc-800 flex justify-between items-center">

         <h6 className="text-2xl font-medium text-white">Lorexm,@FX</h6>

         <button className="focus:bg-transparent focus:outline-none transition-all duration-300 bg-opacity-50 p-2 rounded-full
            group relative flex justify-center items-center">

            <FaRegCopy className="text-emerald-500 text-xl" />

            <span className="invisible absolute top-9 text-xs  group-hover:transition-all group-hover:ease-in-out group-hover:visible">Copy!</span>

         </button>
      </section>
   )
}

export default TopSection