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
        <BioYear>2023</BioYear>
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Started as a Technical Specialist at{' '}
        <Link href="https://www.advanco.com" isExternal>
          Advanco SA
        </Link>
        , focusing on software deployments, support, and software solutions
        <br />
        <Text ml="20">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Performed 30+ software installations, following GAMP 5 compliant
          protocols for healthcare compliance.
        </Text>
        <Text ml="20">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Resolved 60+ complex tickets, improving system performance and
          boosting client satisfaction.
        </Text>
        <Text ml="20">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Earned Systech Field Engineer certification in aggregation and
          item-level serialization
        </Text>
        <Text ml="20">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Represented Advanco at HDA 2024, showcasing ARC software and engaging
          with industry leaders.
        </Text>
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} ml={-0.5} />
        Volunteered as a Software Engineer at{' '}
        <Link href="https://www.thecitytutors.org" isExternal>
          The City Tutors
        </Link>
        , a non-profit organization providing free learning services to NYC
        residents.
        <Text ml="20">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Built a Username Recovery System using Python and Django, reducing
          support team workload by 32%.
        </Text>
        <Text ml="20">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Modernized the login page with enhanced UI and security features,
          resulting in a 28% increase in successful logins.
        </Text>
        <Text ml="20">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Resolved a critical bug in the tutor matching system, reducing
          onboarding time by 18%.
        </Text>
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} ml={-0.5} />
        Earned certifications:
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
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} ml={-0.5} />
        Built and deployed{' '}
        <Link as={NextLink} href="/projects" scroll={false}>
          projects
        </Link>{' '}
        using React and JavaScript.
      </BioSection>

      <BioSection>
        <BioYear>2021</BioYear>
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
        Completed Full Stack JavaScript Curriculum at{' '}
        <Link href="https://www.theodinproject.com/" isExternal>
          The Odin Project
        </Link>{' '}
        and{' '}
        <Link href="https://www.freecodecamp.org/" isExternal>
          freeCodeCamp
        </Link>
        .
        <br />
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} ml={-0.5} />
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
        , installing 150+ smart devices, including security systems.
        <br />
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} ml={-0.5} />
        Apprentice Electrician at Barbato & Rucinski Enterprises, installed 100+
        Cat5 cables to improve network performance.
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
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} ml={-0.5} />
        Conducted a final year research project analyzing the CBOE Volatility
        Index (VIX) and its relationship with major stock indices.
        <br />
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} ml={-0.5} />
        Led a marketing project, analyzing survey data from 1,746 participants
        using SPSS to deliver actionable insights.
        <br />
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} ml={-0.5} />
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
        <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} ml={-0.5} />
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
