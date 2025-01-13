export const metadata = {
    title: 'Home - Stuflo',
    description: 'A simple app that displays a message on button click.',
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className="bg-gray-100">{children}</body>
      </html>
    );
  }
  