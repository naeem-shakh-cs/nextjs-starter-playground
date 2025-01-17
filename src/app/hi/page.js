// app/hi/page.js

async function fetchData() {
  // Simulate a data fetch
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hi");
    }, 1000);
  });
}

export default async function HiPage() {
  const data = await fetchData();
  return <div>{data}</div>;
}
