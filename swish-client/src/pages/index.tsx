import Layout from './components/Layout'
import  './components/cards'
import Cards from './components/cards'

export default function Home() {
  return (
    <Layout>
      <div style={{display:'flex',flexWrap:'wrap'}}>
      {Object.entries(Cards).map(([key,Card])=><Card height={200} width={50} key={key}/>)}
      </div>
    </Layout>
  )
}
