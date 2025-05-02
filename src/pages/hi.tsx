// app/hi/page.js

import { GetServerSideProps } from 'next';

async function fetchData() {
  const response = await fetch('https://webhook.site/dcd9e8c1-7a6c-4664-88b8-c90bc01c872d');
  const data = await response.text();
  return data;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchData();
  return {
    props: {
      data,
    },
  };
};

export default function HiPage({ data }:any) {
  return <div>{data}</div>;
}
