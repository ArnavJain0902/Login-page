// import {styled} from 'styled-components'

// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${({$invalid})=>$invalid ? '#f87171' :'d1d5db'};`


// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   border: 1px solid ${({$invalid})=> $invalid ? '#f73f3f' : 'transparent'};
//   border-radius: 0.25rem;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
//   background-color: ${({$invalid})=>$invalid ? '#fed2d2' : '#d1d5db'};  
//   color: ${({$invalid}) => $invalid ? 'red' : '#374151'};`


// export default function CustomInput({label,$invalid,...props}){
//     return (
//         <p>
//             <Label $invalid={$invalid} >{label}</Label>
//             <Input $invalid={$invalid} {...props}></Input>
//         </p>
//     )
// }

export default function Input({label,$invalid,...props}){
  let labelClasses = 'block mb-2 text-xs font-bold tracking-widest uppercase text-stone-200'
  let inputClasses = "w-full px-3 py-1 leading-light bg-stone-300 text-gray-700 border rounded shadow"
  if($invalid){
    labelClasses = `${labelClasses} text-red-400`
    inputClasses = `${inputClasses} bg-red-100 border-red-300 text-red-500`
  }
  return(
    <p>
      <label className={labelClasses}>{label}</label>
      <input {...props} className={inputClasses}/>
    </p>
  )
}