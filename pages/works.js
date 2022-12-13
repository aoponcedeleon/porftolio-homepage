import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbAgenix from '../public/images/works/agenix.png'
import thumbSBS from '../public/images/works/sbs.jpg'
import thumbWholeGoals from '../public/images/works/wholegoals.jpg'
import thumbBilkenn from '../public/images/works/bilkenn.jpg'
import thumbHouseReno from '../public/images/works/house-reno-thumb.jpg'
import thumbQDocs from '../public/images/works/qdocs.png'
import thumbDisc from '../public/images/works/discord-clone.png'
import thumbPW from '../public/images/works/pw-gen.png'
import thumbSIMS from '../public/images/works/sims-db.png'
import thumbFCFW from '../public/images/works/thumbFCFW.png'
import thumbMono from '../public/images/works/thumbMono.png'

const Works = () => (
  <Layout title="Works">
    <Container my={6}>
      <Heading as="h2" fontSize={{ sm: 24, md: 36 }} mb={4}>
        Works
      </Heading>

      <Text mb={4} fontSize="md">
        Along with some other WIP side projects, here are some things I&apos;ve
        already made:
      </Text>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            link="https://getmonocraft.com/"
            title="Monocraft"
            thumbnail={thumbMono}
          >
            I built my own print-on-demand, full ecommerce shopify site to
            (hopefully) sell my art posters online. All complete with add to
            cart, checkout, payment, and shipping. Made with Shopify, Liquid,
            and CSS.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            link="https://fruitwarehouseph.com/"
            title="Fruit Warehouse PH"
            thumbnail={thumbFCFW}
          >
            Created a full ecommerce shopify site. Client already had a theme
            they wanted to build on top of and customize certain components and
            pages to their liking. I did so using Shopify&apos;s Liquid, HTML,
            and CSS. This involved changing a lot of stuff with their shipping
            flow and checkout, as well as coding our own templates for the
            packing slips, etc.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem link="#" title="SIMS Dashboard" thumbnail={thumbSIMS}>
            Part of 25SQM&apos;s effort for digitalization of all their
            processes. Automated a lot of their supervisors&apos; generation of
            reports and charts and their clients&apos; viewing of their reports.
            Made with ReactJ + Mantine Styled Components + LaravelPHP + MySQL.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            link="https://qdocs-two.vercel.app/"
            title="QDocs"
            thumbnail={thumbQDocs}
          >
            Side project I made to try and recreate Google Docs. Created to
            learn/explore Next.JS, TailwindCSS and DraftJS
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            link="https://pw.aoponcedeleon.me/"
            title="PW Gen"
            thumbnail={thumbPW}
          >
            Side project I made to create my own password generator that uses my
            browser&apos;s localStorage to store all my passwords. I also made
            it to further learn Mantine&apos;s Styled Components and deepen my
            knowledge on Front End Development and UX Practices
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            link="https://discord-clone-eb0dd.web.app/"
            title="Discord Clone"
            thumbnail={thumbDisc}
          >
            Side project I made to try and recreate Discord. Created this to
            better understand CSS Flexbox, integrating Auth and DB from Google
            Cloud, and Redux
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            link="https://smallbusinesssolutions.com.ph/"
            title="SBS"
            thumbnail={thumbSBS}
          >
            Digital Marketing Agency Website Made with Elementor and Lots of
            Custom CSS and Jquery
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            link="https://agenix.digital"
            title="Agenix"
            thumbnail={thumbAgenix}
          >
            Web3 Marketing Agency Website Made with Elementor and Lots of Custom
            CSS and Jquery
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            link="https://wholegoalslife.com"
            title="Whole Goals"
            thumbnail={thumbWholeGoals}
          >
            Lifestyle Wellness Website with members and courses functionality
            Made with Elementor and Lots of Custom CSS and Jquery
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            link="https://bilkenn.kinsta.cloud/"
            thumbnail={thumbBilkenn}
            title="Bilkenn"
          >
            Real Estate Website made for client.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            link="https://houserenovation.ph/"
            thumbnail={thumbHouseReno}
            title="House Renovation PH"
          >
            Website created for client business that seek contractors for houses
            (various services).
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
