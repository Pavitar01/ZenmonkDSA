import React from 'react'
import { useSelector } from 'react-redux'
import One from '../Template/One'

const AllDrafts = () => {



    const draft=useSelector((state)=>{
        return state.resumeData.Draft
    })

console.log(draft)
  return 
    // <div className='draft'>

    // {
    //     draft.map((i,index)=>{
    //         if(i.template===2) {
    //             <One  details={i}/>
    //         }
    //     })
    // }
    // </div>
//   )
}

export default AllDrafts
