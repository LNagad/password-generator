import { useEffect, useState } from 'react'
import { TopSection } from './Password'
import { FaArrowRight } from 'react-icons/fa'
import { passwordConditions } from '../constants'

const PasswordContainer = () => {
    
   const [passwordStrength, setPasswordStrength] = useState(1)
   const [passLength, setPassLength] = useState(1)
   const [passwordConditionRequest, setPasswordConditionRequest] = useState({
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
   })

   const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setPassLength(Number(value))
   }

   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target
      setPasswordConditionRequest({ ...passwordConditionRequest, [name]: checked })
   }
   
   useEffect(() => {
      const { uppercase, lowercase, numbers, symbols } = passwordConditionRequest
     
      if (passLength < 5) {
         setPasswordStrength(1)
      }

      if (passLength >= 4 && passLength < 8) {
         setPasswordStrength(2)
      }
      
      if ((uppercase && lowercase && passLength >= 8) || 
          (symbols  && numbers && passLength >= 8) || 
          (uppercase && symbols && numbers && passLength >= 6 && passLength < 8) || 
          (symbols && lowercase && numbers && passLength >= 6 && passLength < 8)) {
         setPasswordStrength(2)
      }
      
      if ((symbols && lowercase && numbers && passLength >= 6  && passLength < 8) || 
          (uppercase && lowercase && numbers && passLength >= 8) ||
          (numbers && symbols && passLength >= 8) ||
          (uppercase && lowercase && symbols && passLength >= 8)) {
         setPasswordStrength(3)
      }
      
      if ((symbols && lowercase && numbers && passLength >= 8) ||
          (uppercase && symbols && numbers && passLength >= 8)) {
         setPasswordStrength(4)
      }
   }, [passwordConditionRequest, passLength])
  

   const passwordStrengthText = passwordStrength === 1 ? 'insecure' : passwordStrength === 2 ? 'low' : passwordStrength === 3 ? 'medium' : 'high'


   return (
      <div className='w-full sm:w-6/12 lg:w-4/12 flex flex-col gap-y-4'>
         <TopSection />
         <section className="w-full p-6 flex flex-col gap-y-6 bg-zinc-800">
            <div className='flex justify-between items-center'>
               <p className='text-lg '>Characters length</p>
               <p className='text-2xl font-medium text-emerald-400'>{passLength}</p>
            </div>
            <input
               type='range'
               onChange={ handleRangeChange }
               min={1}
               max={10}
               step={1}
               value={ passLength }
               className='w-full h-2 custom-slider custom-slider accent-emerald-400'
            >
            </input>
            <div className='w-full flex flex-col gap-y-4'>
               {
                  passwordConditions.map(({ name, label }) => (
                     <div key={name} className='flex items-center gap-x-2'>
                        <input 
                           id={name} 
                           name={name}
                           onChange={ handleCheckboxChange }
                           type="checkbox" 
                           className='peer relative bg-black appearance-none shrink-0 
                           focus:outline-none 
                           focus:border-0 
                           active:border-0
                           active:outline-none
                           active:ring-0
                           active:bg-emerald-500 
                           focus:checked:hover:bg-emerald-500  
                           checked:bg-emerald-500 
                           checked:hover:bg-emerald-500'  
                        />
                        <label htmlFor={name} >{label}</label>
                     </div>
                  ))
               }
            </div>
            <div className='flex justify-between items-center'>
               <p className='uppercase text-slate-300 text-opacity-80 font-medium text-sm'>strength</p>
               <div className='flex justify-between gap-x-2 items-center'>
                  {/* //? INSECURE, LOW, MEDIUM, HIGH */}
                  <p className='uppercase text-white font-medium text-sm'>{passwordStrengthText}</p> 
                  <div className='flex gap-x-2'>

                     {passwordStrengthText === 'insecure' && (
                        <>
                           <div className='bg-red-400 w-3 h-7'></div>
                           <div className='bg-black   w-3 h-7 custom-border'></div>
                           <div className='bg-black   w-3 h-7 custom-border'></div>
                           <div className='bg-black   w-3 h-7 custom-border'></div>
                        </>
                     )}

                     {passwordStrengthText === 'low' && (
                        <>
                           <div className='bg-yellow-400 w-3 h-7'></div>
                           <div className='bg-yellow-400 w-3 h-7'></div>
                           <div className='bg-black      w-3 h-7 custom-border'></div>
                           <div className='bg-black      w-3 h-7 custom-border'></div>
                        </>
                     )}
                     {passwordStrengthText === 'medium' && (
                        <>
                           <div className='bg-yellow-400 w-3 h-7'></div>
                           <div className='bg-yellow-400 w-3 h-7'></div>
                           <div className='bg-yellow-400 w-3 h-7'></div>
                           <div className='bg-black      w-3 h-7 custom-border'></div>
                        </>
                     )}

                     {passwordStrengthText === 'high' && (
                        <>
                           <div className='bg-green-400 w-3 h-7'></div>
                           <div className='bg-green-400 w-3 h-7'></div>
                           <div className='bg-green-400 w-3 h-7'></div>
                           <div className='bg-green-400 w-3 h-7'></div>
                        </>
                     )}
                  </div>
               </div>
            </div>

            <button className='bg-emerald-500 transition-all duration-300 text-center w-full py-5 text-zinc-900 font-bold
            hover:bg-emerald-600 hover:text-gray-800 uppercase flex gap-x-2 items-center justify-center'>
               generate
               <FaArrowRight />
            </button>
         </section>
      </div>
   )
}

export default PasswordContainer