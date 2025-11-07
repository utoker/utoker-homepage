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
          Started as a Founding Engineer (Contract) at{' '}
          <Link href="https://www.tracius.com" isExternal>
            Tracius.
          </Link>
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Architected a multi-tenant, GS1-compliant traceability platform
          (Digital Link) using a Turborepo for end-to-end supply chain
          visibility.
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Designed and implemented the NestJS backend, featuring a secure
          multi-tenant API, Prisma ORM, and an immutable audit trail for
          regulatory compliance.
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Engineered the Next.js frontend (shadcn/ui), implementing multi-tenant
          authentication with Auth0 and NextAuth, and building core features for
          serial number lifecycle management.
        </Text>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Architected{' '}
          <Link href="https://www.coldtrace.app" isExternal>
            ColdTrace
          </Link>
          , a real-time IoT platform handling 10K+ updates/sec with GraphQL
          subscriptions and Recharts/Leaflet visualizations.
          <br />
        </Text>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Engineered{' '}
          <Link href="https://www.reqq.cc/" isExternal>
            reqq.cc
          </Link>
          , a high-performance URL shortener with sub-40ms latency using Next.js
          Edge Runtime and atomic Postgres functions.
          <br />
        </Text>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Started <b>M.S. Software Engineering</b>, Western Governors University
          (exp. 2026).
        </Text>
        {/* <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Earned <b>Introduction to Python Programming</b> badge (WGU).
        </Text> */}
      </BioSection>
      <BioSection>
        <BioYear>2023</BioYear>
        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Started as a Software Engineer Associate at{' '}
          <Link href="https://www.advanco.com" isExternal>
            Advanco SA.
          </Link>
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Led end-to-end technical implementation of an MES platform for a key
          enterprise client, Thermo Fisher Scientific, in Italy.
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Drove product roadmap improvements by presenting the platform to 200+
          stakeholders at HDA2024 and integrating their feedback.
        </Text>

        <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Software Engineer Intern at{' '}
          <Link href="https://www.thecitytutors.org" isExternal>
            The City Tutors.
          </Link>
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Reduced user support tickets by 30% by designing and implementing a
          full-stack username recovery feature with a React and Django.
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Improved successful login rates by 22% by redesigning the
          authentication UI/UX using React and Tailwind CSS.
        </Text>
        <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          Prevented 95% of invalid form submissions by implementing
          comprehensive real-time validation and React error boundaries.
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
            href="https://www.apollographql.com/tutorials/certifications/33094c53-1385-430e-9ec1-10649b69a41e"
            isExternal
          >
            GraphQL Associate (Apollo)
          </Link>
        </Text>
        {/* <Text ml="5">
          <Icon as={FaRegCircle} color="teal.500" boxSize={2} mr={2} />
          <Link
            href="https://www.freecodecamp.org/certification/utoker/scientific-computing-with-python-v7"
            isExternal
          >
            Scientific Computing with Python
          </Link>
        </Text> */}
      </BioSection>

      {/* <BioSection>
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
      </BioSection> */}

      {/* <BioSection>
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
        </Text> */}
      {/* <Text>
          <Icon as={FaCircle} color="teal.500" boxSize={2} mr={2} />
          Consultant for smart-home networks; delivered end-to-end
          installations.
        </Text> */}
      {/* </BioSection> */}

      {/* <BioSection>
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
      </BioSection> */}

      {/* <BioSection>
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
      </BioSection> */}
    </>
  )
}

export default BioGroup
