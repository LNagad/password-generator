export const passwordNames = {
   uppercase: 'uppercase',
   lowercase: 'lowercase',
   numbers: 'numbers',
   symbols: 'symbols',
}

export const passwordConditions = [
   {
      name: passwordNames.uppercase,
      label: 'Include uppercase letters'
   },
   {
      name: passwordNames.lowercase,
      label: 'Include lowercase letters'
   },
   {
      name: passwordNames.numbers,
      label: 'Include numbers'
   },
   {
      name: passwordNames.symbols,
      label: 'Include symbols'
   },
]