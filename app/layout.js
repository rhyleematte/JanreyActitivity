export const metadata = {
  title: "Full Stack Developer Portfolio",
  description: "Portfolio of a Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Poppins */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "black",
          color: "white",
          fontFamily: "'Poppins', Arial, sans-serif",
        }}
      >
        {/* Header */}
        <header
          style={{
            padding: "20px 40px",
            borderBottom: "1px solid #222",
          }}
        >
          <nav
            style={{
              display: "flex",
              justifyContent: "flex-end", // Align links right
              gap: "24px",
              fontSize: "1rem",
            }}
          >
            <a href="#about" style={linkStyle}>About Me</a>
            <a href="#projects" style={linkStyle}>Featured Projects</a>
            <a href="#skills" style={linkStyle}>Skills</a>
            <a href="#tech" style={linkStyle}>Technology</a>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  cursor: "pointer",
  fontWeight: 500,
  transition: "color 0.3s ease",
};

// Optional: hover effect
// You could also use inline on <a> as: onMouseEnter={...} or CSS
