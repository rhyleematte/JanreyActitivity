export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Janrey's Creative Portfolio</title>
        <meta name="description" content="Creative Portfolio of Janrey - Web Developer" />
      </head>
      <body style={styles.body}>{children}</body>
    </html>
  );
}

const styles = {
  body: {
    margin: 0,
    fontFamily: "'Inter', sans-serif",
    background: "linear-gradient(135deg, #f5f7fa, #dfe9f3)",
    color: "#333",
    scrollBehavior: "smooth",
  },
};
