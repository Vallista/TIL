// import Link from 'next/link'
import Router from 'next/router'

const Index = () => (
  <div>
    {/*<Link href="/about">*/}
      {/*<a title="About Page">About Page</a>*/}
      <button onClick={() => Router.push('/about')}>Go to About Page</button>
    {/*</Link>*/}
    <p>Hello Next.js</p>
  </div>
)

export default Index
