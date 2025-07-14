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
        <BioYear>2025</BioYear>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Re-built{' '}
          <Link href="https://www.reqq.cc/" isExternal>
            reqq.cc
          </Link>{' '}
          on React 19 + Next 15 + Supabase → p95 redirect latency 32 ms.
          <br />
        </Text>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Started <b>M.S. Software Engineering</b>, Western Governors University
          (exp. 2027).
        </Text>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Earned <b>Introduction to Python Programming</b> badge (WGU).
        </Text>
      </BioSection>
      <BioSection>
        <BioYear>2023</BioYear>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Started as a Software Support Engineer at{' '}
          <Link href="https://www.advanco.com" isExternal>
            Advanco SA.
          </Link>
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Automated deployment & config via T-SQL scripts, cutting setup time
          2h/client.
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Authored T-SQL fixes that resolved 50% of live-data anomalies within
          30 min.
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Partnered with R&D to reproduce issues, analyse logs, and ship
          coordinated hot-fixes.
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Wrote install/debug guides; trained 2 teammates, boosting first-line
          resolution +35%.
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Led onsite installation & validation for Thermo Fisher Scientific
          (Italy).
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Demoed ARC to 200 + attendees at HDA 2024, collecting feedback that
          drove 2 UI fixes.
        </Text>

        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Volunteered as Associate Software Engineer at{' '}
          <Link href="https://www.thecitytutors.org" isExternal>
            The City Tutors
          </Link>
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Built Python/Django username-recovery system → support tickets -30 %.
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Modernized the login page with enhanced UI and security features,
          resulting in a 28% increase in successful logins.
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Redesigned login page with custom validation, raising success rate
          +22%.
        </Text>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Earned certifications:
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          <Link
            href="https://learn.microsoft.com/en-us/users/umuttoker-9521/credentials/c7864b78cd5dc87b"
            isExternal
          >
            Microsoft Certified: Azure Fundamentals
          </Link>
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          <Link
            href="https://cp.certmetrics.com/amazon/en/public/verify/credential/3LPFBSV1XER4Q7KS"
            isExternal
          >
            AWS Cloud Practitioner
          </Link>
        </Text>
        <Text ml="5">
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
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Completed{' '}
          <Link
            href="https://www.freecodecamp.org/certification/utoker/javascript-algorithms-and-data-structures"
            isExternal
          >
            JavaScript Algorithms and Data Structures
          </Link>{' '}
          certification.
        </Text>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Shipped several{' '}
          <Link as={NextLink} href="/projects" scroll={false}>
            React/JS apps
          </Link>{' '}
          to production.
        </Text>
      </BioSection>

      <BioSection>
        <BioYear>2021</BioYear>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Finished 300-hr Full-Stack JS Curriculum (
          <Link href="https://www.theodinproject.com/" isExternal>
            The Odin Project
          </Link>{' '}
          +{' '}
          <Link href="https://www.freecodecamp.org/" isExternal>
            freeCodeCamp.
          </Link>
          ).
        </Text>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Consultant for smart-home networks; delivered end-to-end
          installations.
        </Text>
      </BioSection>

      <BioSection>
        <BioYear>2020</BioYear>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Launched and managed PPE e-commerce store, shipped over 14,800
          facemasks orders during pandemic peak.
        </Text>
      </BioSection>

      <BioSection>
        <BioYear>2019</BioYear>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Field Technician,
          <Link href="https://powersiot.com/" isExternal>
            {' '}
            Powers IoT
          </Link>
          - installed 150 + smart devices & security systems.
        </Text>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Apprentice Electrician, Barbato & Rucinski — pulled/terminated 100 +
          Cat5 runs.
        </Text>
      </BioSection>

      <BioSection>
        <BioYear>2018</BioYear>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Graduated B.B.A.,
          <Link href="https://www.ogu.edu.tr/en" isExternal>
            {' '}
            Eskişehir Osmangazi University.
          </Link>
        </Text>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Led CBOE VIX research project; presented actionable volatility
          insights.
        </Text>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Analysed survey data from 1 746 respondents with SPSS for marketing
          study.
        </Text>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Finance intern at
          <Link href="https://www.koc.com.tr/en" isExternal>
            {' '}
            Koç{' '}
          </Link>
          - reconciled A/P & A/R and month-end reports.
        </Text>
      </BioSection>

      <BioSection>
        <BioYear>2017</BioYear>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Co-founded ESOGU E-Sports Club; organised tournaments and led
          40-member team.
        </Text>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Built
          <Link
            href="https://web.archive.org/web/20150515061955/http://dotarehberi.com/"
            isExternal
          >
            {' '}
            dotarehberi.com(WordPress)
          </Link>{' '}
          - Dota 2 guides attracting 6400 weekly visitors.
        </Text>
      </BioSection>
    </>
  )
}

export default BioGroup
