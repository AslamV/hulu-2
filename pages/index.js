import Head from 'next/head'
import request from '../../utils/request'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import axios from 'axios'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Navbar/>
      <Results results={results}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre 
  const req = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.trending.url}`).then(
    (res) => res.json()
  )
  return {
    props: {
      results: req.results
    }
  }
} 
