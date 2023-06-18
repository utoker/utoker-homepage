import React from 'react'
import { Heading } from '@chakra-ui/react'
import { BioSection, BioYear } from './bio'

const BioGroup = () => {
  return (
    <>
    <Heading as="h3" variant="section-title">
      Bio
    </Heading >

    <BioSection>  
      <BioYear>2018</BioYear>
      Obtained bachelor&apos;s degree in business administration.
    </BioSection>
    <BioSection>
      <BioYear>2019</BioYear>
      Moved to New York.
    </BioSection>
    <BioSection>
      <BioYear>2021</BioYear>
      Built reqq.com
    </BioSection>
    <BioSection>
      <BioYear>2023</BioYear>
      Built albertsolver.com
    </BioSection>
    <BioSection>
      <BioYear>2023</BioYear>
      Start working at The City Tutors.
    </BioSection>
    <BioSection>
      <BioYear>2023</BioYear>
      Became certified as an AWS Cloud Practitioner
    </BioSection>
    </>
  )
}

export default BioGroup