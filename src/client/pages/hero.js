import withApollo from '../lib/withApollo'
import HeroContainer from '../containers/HeroContainer'
import Layout from '../components/Layout'

const HeroPage = ({ url }) => {
  return (
    <Layout>
      <HeroContainer id={url.query.id} />
    </Layout>
  )
}

export default withApollo(HeroPage)
