import Layout from './components/Layout'
import Cards from './components/Cards'


export default function Home() {
  
  return (
    <Layout>
      <div style={{display:'flex',flexWrap:'wrap'}}>
       
      {Cards.map(({Card})=><><Card/></>)}
      </div>
    </Layout>
  )
}
