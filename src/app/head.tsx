export default function Head({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <head>{children}</head>;
}
