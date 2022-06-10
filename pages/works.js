import { Container, Heading, SimpleGrid, Divider, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbAgenix from '../public/images/works/agenix.png'
import thumbSBS from '../public/images/works/sbs.jpg'
import thumbWholeGoals from '../public/images/works/wholegoals.jpg'
import thumbBilkenn from '../public/images/works/bilkenn.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem link="#" title="SBS" thumbnail={thumbSBS}>
            Digital Marketing Agency Website Made with Elementor and Lots of
            Custom CSS and Jquery
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            link="agenix.digital"
            title="Agenix"
            thumbnail={thumbAgenix}
          >
            Web3 Marketing Agency Website Made with Elementor and Lots of Custom
            CSS and Jquery
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            link="wholegoalslife.com"
            title="Whole Goals"
            thumbnail={thumbWholeGoals}
          >
            Lifestyle Wellness Website with members and courses functionality
            Made with Elementor and Lots of Custom CSS and Jquery
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem link="#" thumbnail={thumbBilkenn} title="Bilkenn">
            Real Estate Website made for client.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
