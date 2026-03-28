import { Heading, Link } from '@chakra-ui/react'
import { BioSection, BioYear } from './bio'

const BioGroup = () => {
  return (
    <>
      <Heading as="h3" variant="section-title">
        Bio
      </Heading>
      <BioSection>
        <BioYear>2026</BioYear>
        Earned an <b>M.S. in Software Engineering</b> from{' '}
        <Link href="https://www.wgu.edu" isExternal>
          Western Governors University.
        </Link>
      </BioSection>
      <BioSection>
        <BioYear>2025</BioYear>
        Fullstack Engineer at{' '}
        <Link href="https://www.tracius.com" isExternal>
          Tracius.
        </Link>{' '}
        Architected a multi-tenant, GS1-compliant traceability platform using a
        Turborepo monorepo for end-to-end supply chain visibility. Earned{' '}
        <Link
          href="https://www.apollographql.com/tutorials/certifications/33094c53-1385-430e-9ec1-10649b69a41e"
          isExternal
        >
          GraphQL Associate (Apollo)
        </Link>{' '}
        certification.
      </BioSection>
      <BioSection>
        <BioYear>2023</BioYear>
        Software Engineer at{' '}
        <Link href="https://www.advanco.com" isExternal>
          Advanco SA.
        </Link>{' '}
        Deployed as Subject Matter Expert to Thermo Fisher Scientific (Fortune
        500) in Italy for GxP-regulated implementations.
      </BioSection>
      <BioSection>
        <BioYear>2023</BioYear>
        Software Engineering Intern at{' '}
        <Link href="https://www.thecitytutors.org" isExternal>
          The City Tutors.
        </Link>{' '}
        Reduced support tickets by 30% by building a username recovery feature
        for 800+ users. Earned{' '}
        <Link
          href="https://cp.certmetrics.com/amazon/en/public/verify/credential/3LPFBSV1XER4Q7KS"
          isExternal
        >
          AWS Cloud Practitioner
        </Link>{' '}
        and{' '}
        <Link
          href="https://learn.microsoft.com/en-us/users/umuttoker-9521/credentials/c7864b78cd5dc87b"
          isExternal
        >
          Azure Fundamentals
        </Link>{' '}
        certifications.
      </BioSection>
    </>
  )
}

export default BioGroup
