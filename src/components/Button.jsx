// import {styled} from 'styled-components'
//  const Button = styled.button`
    
//     padding: 1rem 2rem;
//     font-weight: 600;
//     text-transform: uppercase;
//     border-radius: 0.25rem;
//     color: #1f2937;
//     background-color: #f0b322;
//     border-radius: 6px;
//     border: none;
  
//     &:hover {
//     background-color: #f0920e;
//     }
  

//   `
// export default Button


export default function Button({children,...props}){
  return <button className="px-4 py-2 text-stone-900 font-semibold uppercase rounded-full bg-amber-600 ml-4 hover:bg-amber-500" {...props}>{children}</button>
}