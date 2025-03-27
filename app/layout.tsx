export const experimental_ppr = true

let myCount = 1;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('layout running', myCount);

  return (
    <html lang="en">
      <body>
        {`count${myCount++}`}
        {children}
      </body>
    </html>
  );
}
