export const experimental_ppr = true

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('layout running');

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
