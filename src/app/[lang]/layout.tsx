export default async function RootLayout({
  children,
  params,
}: {
  params: { lang: string };
  children: React.ReactNode;
}) {
  return children;
}
