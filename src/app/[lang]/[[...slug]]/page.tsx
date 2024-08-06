const URL = process.env.URL || "";

export default async function Page() {
  const response = await fetch(URL, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  const data = await response.json();

  console.log("Data: ", data);

  return <div>PAGE</div>;
}
