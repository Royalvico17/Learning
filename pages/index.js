import Head from "next/head";

import { Hero, About, Service, Container } from "@/components";
import data from "@/utils/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <main>
        {/* <Hero /> */}
        {/* <About /> */}
        <section className="container">
          <h1>Our Services</h1>
          <Container>
            {data.map((course) => (
              <Service key={course.id} {...course} />
            ))}
          </Container>
        </section>
      </main>
    </>
  );
}
