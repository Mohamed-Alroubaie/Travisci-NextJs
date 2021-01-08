import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Travis Ci</title>
      </Head>
      <div>
        <Layout>
          <h1>Home Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aspernatur ratione cumque? Porro sint quos sit sequi laborum
            deserunt id iure eveniet. Impedit molestiae ea libero eius nihil
            maiores nostrum!
          </p>
        </Layout>
      </div>
    </div>
  );
}
