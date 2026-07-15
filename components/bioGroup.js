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
        Technical Specialist (Contract) at{' '}
        <Link href="https://www.advanco.com" isExternal>
          Advanco SA.
        </Link>{' '}
        Provide ongoing Level 2 support and implementation for GxP-regulated
        MES/LES deployments — installations, version upgrades, and IQ/OQ/PQ
        qualification — for enterprise pharmaceutical clients.
      </BioSection>
      <BioSection>
        <BioYear>2026</BioYear>
        Earned an <b>M.S. in Software Engineering</b> from{' '}
        <Link href="https://www.wgu.edu" isExternal>
          Western Governors University.
        </Link>
      </BioSection>
      <BioSection>
        <BioYear>2025</BioYear>
        Full-Stack Engineer at{' '}
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
        Technical Specialist at{' '}
        <Link href="https://www.advanco.com" isExternal>
          Advanco SA.
        </Link>{' '}
        Over ~2 years, deployed and validated GxP-regulated MES/LES systems,
        including onsite work as Subject Matter Expert at Thermo Fisher
        Scientific (Fortune 500) in Italy.
      </BioSection>
      <BioSection>
        <BioYear>2023</BioYear>
        Software Engineer (Volunteer) at{' '}
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
      <BioSection>
        <BioYear>2019</BioYear>
        Earned a <b>B.A. in Business Administration</b> from Eskisehir Osmangazi
        University.
      </BioSection>
    </>
  )
}

export default BioGroup
