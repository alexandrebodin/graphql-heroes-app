import withApollo from '../lib/withApollo'
import MovieContainer from '../containers/MovieContainer'
import Layout from '../components/Layout'

const MoviePage = ({ url }) => {
  return (
    <Layout>
      <MovieContainer id={url.query.id} />
    </Layout>
  )
}

export default withApollo(MoviePage)
