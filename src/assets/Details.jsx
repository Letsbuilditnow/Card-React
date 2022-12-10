import React from 'react'
import './Details.css'
import Jobtitle from './Jobtitle'
import Name from './Name'
import ButtonSection from './ButtonSection'
function main() {
  return (
    <>
    <div className="container">
       <Name/> 
       <section className='buttons'>

       <ButtonSection/>
       </section>
    </div>
    </>
  )
}

export default main