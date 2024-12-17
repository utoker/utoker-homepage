import React from 'react'
import NextLink from 'next/link'
import { Heading, Link, Text, Icon } from '@chakra-ui/react'
import { BioSection, BioYear } from './bio'
import { FaCircle, FaRegCircle } from 'react-icons/fa'

const BioGroup = () => {
  return (
    <>
      <Heading as="h3" variant="section-title">
        Bio
      </Heading>

      <BioSection>
        <BioYear>2024</BioYear>
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Started as a Technical Specialist at
        <Link href="https://www.advanco.com" isExternal>
          {' '}
          Advanco SA
        </Link>
        , handling software deployments and troubleshooting client issues.
      </BioSection>

      <BioSection>
        <BioYear>2023</BioYear>
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Volunteered as a Software Engineer at
        <Link href="https://www.thecitytutors.org" isExternal>
          {' '}
          The City Tutors
        </Link>
        , supporting NYC-based learners.
        <br />
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Earned certifications:
        <br />
        <Text ml="20">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          <Link
            href="https://learn.microsoft.com/en-us/users/umuttoker-9521/credentials/c7864b78cd5dc87b"
            isExternal
          >
            Microsoft Certified: Azure Fundamentals
          </Link>
        </Text>
        <Text ml="20">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          AWS Cloud Practitioner
        </Text>
        <Text ml="20">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          <Link
            href="https://www.freecodecamp.org/certification/utoker/scientific-computing-with-python-v7"
            isExternal
          >
            Scientific Computing with Python
          </Link>
        </Text>
      </BioSection>

      <BioSection>
        <BioYear>2022</BioYear>
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Achieved{' '}
        <Link
          href="https://www.freecodecamp.org/certification/utoker/javascript-algorithms-and-data-structures"
          isExternal
        >
          JavaScript Algorithms and Data Structures
        </Link>{' '}
        certification.
        <br />
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Built and deployed{' '}
        <Link as={NextLink} href="/projects" scroll={false}>
          projects
        </Link>{' '}
        using React and JavaScript.
      </BioSection>

      <BioSection>
        <BioYear>2021</BioYear>
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Completed Full Stack JavaScript Curriculum at The Odin Project and
        freeCodeCamp.
        <br />
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Worked as a Technical Consultant, delivering end-to-end smart home and
        networking solutions.
      </BioSection>

      <BioSection>
        <BioYear>2020</BioYear>
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Launched and managed an online store, shipping over 14,800 orders of
        facemasks during the pandemic.
      </BioSection>

      <BioSection>
        <BioYear>2019</BioYear>
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Worked as a Field Technician at{' '}
        <Link href="https://powersiot.com/" isExternal>
          {' '}
          Powers IoT
        </Link>
        , installing 50+ smart devices, including security systems.
        <br />
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Gained hands-on experience as an Apprentice Electrician at Barbato &
        Rucinski Enterprises, installing 100+ Cat5 cables to enhance network
        performance.
        <br />
      </BioSection>

      <BioSection>
        <BioYear>2018</BioYear>
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Graduated from{' '}
        <Link href="https://www.ogu.edu.tr/en" isExternal>
          {' '}
          Eskişehir Osmangazi University
        </Link>{' '}
        with a Bachelor&apos;s degree in Business Administration.
        <br />
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Conducted a final year research project analyzing the CBOE Volatility
        Index (VIX) and its relationship with major stock indices, including
        DAX, S&amp;P 500, and FTSE 100.
        <br />
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Led a marketing project, analyzing survey data from 1,746 participants
        using SPSS to deliver actionable insights.
        <br />
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Completed an internship at{' '}
        <Link href="https://www.koc.com.tr/en" isExternal>
          {' '}
          Koc
        </Link>
        , managing accounts payable/receivable and performing monthly
        reconciliations.
        <br />
      </BioSection>

      <BioSection>
        <BioYear>2017</BioYear>
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Co-founded the ESOGU E-Sports Club, creating a platform for competitive
        gaming and leadership initiatives.
        <br />
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Developed a WordPress website{' '}
        <Link
          href="https://web.archive.org/web/20150515061955/http://dotarehberi.com/"
          isExternal
        >
          {' '}
          dotarehberi.com
        </Link>{' '}
        to publish Dota 2 guides, attracting over 4,400 unique visitors every
        weekend.
      </BioSection>
    </>
  )
}

export default BioGroup
