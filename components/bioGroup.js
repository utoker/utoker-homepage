import React from 'react'
import { Heading, Link } from '@chakra-ui/react'
import { BioSection, BioYear } from './bio'

const BioGroup = () => {
  return (
    <>
    <Heading as="h3" variant="section-title">
      Bio
    </Heading >

    <BioSection>  
      <BioYear>2018</BioYear>
      Obtained bachelor&apos;s degree in business administration
    </BioSection>
    <BioSection>
      <BioYear>2019</BioYear>
      Moved to New York.
    </BioSection>
    <BioSection>
      <BioYear>2022</BioYear>
      Earned <Link
              href="https://www.freecodecamp.org/certification/utoker/javascript-algorithms-and-data-structures"
              rel="noopener noreferrer"
              isExternal
            >JavaScript Algorithms & Data Structures certification</Link>
    </BioSection>
    <BioSection>
      <BioYear>2022</BioYear>
      Built <Link
              href="https://www.reqq.cc/"
              rel="noopener noreferrer"
              isExternal
            >reqq.com</Link>
    </BioSection>
    <BioSection>
      <BioYear>2023</BioYear>
      Achieved <Link
              href="https://www.freecodecamp.org/certification/utoker/scientific-computing-with-python-v7"
              rel="noopener noreferrer"
              isExternal
            > Scientific Computing with Python certification</Link>
    </BioSection>
    <BioSection>
      <BioYear>2023</BioYear>
      Built <Link
              href="https://www.albertsolver.com/"
              rel="noopener noreferrer"
              isExternal
            >albertsolver.com</Link>
    </BioSection>
    <BioSection>
      <BioYear>2023</BioYear>
      Started working at <Link
              href="https://www.thecitytutors.org/"
              rel="noopener noreferrer"
              isExternal
            >The City Tutors</Link>
    </BioSection>
    <BioSection>
      <BioYear>2023</BioYear>
      Became certified as an AWS Cloud Practitioner
    </BioSection>
    </>
  )
}

export default BioGroup