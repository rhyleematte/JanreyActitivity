export default function Page() {
  return (
    <main style={styles.main}>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroCard}>
          <h1 style={styles.heroTitle}>Hi, I’m Janrey</h1>
          <p style={styles.heroText}>
            Creative Web Developer building modern, user-friendly, interactive websites.
          </p>
          <a href="#projects" style={styles.heroButton}>Explore My Work</a>
          <div style={styles.heroDecor}></div>
        </div>
      </section>

      {/* Big Three Projects */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.heading}>My Projects</h2>
        <div style={styles.cardContainer}>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>1. What I Know</h3>
            <p style={styles.cardText}>
              HTML & CSS website with clean, modern layout and design principles.
            </p>
            <button style={styles.projectButton}>View Project</button>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>2. What I Learned</h3>
            <p style={styles.cardText}>
              JavaScript project showing interactive features and logic implementation.
            </p>
            <button style={styles.projectButton}>View Project</button>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>3. What I Aspire To Do</h3>
            <p style={styles.cardText}>
              React/Next.js app with real data, interactivity, and dynamic UI.
            </p>
            <button style={styles.projectButton}>View Project</button>
          </div>

        </div>
      </section>

      {/* Currently Learning */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Currently Learning</h2>
        <div style={styles.badges}>
          <span style={{...styles.badge, backgroundColor:"#6c5ce7"}}>Next.js</span>
          <span style={{...styles.badge, backgroundColor:"#0984e3"}}>React</span>
          <span style={{...styles.badge, backgroundColor:"#fd79a8"}}>Git & GitHub</span>
          <span style={{...styles.badge, backgroundColor:"#00b894"}}>Responsive Design</span>
          <span style={{...styles.badge, backgroundColor:"#fdcb6e"}}>Accessibility</span>
        </div>
      </section>

    </main>
  );
}

const styles = {
  main: {
    padding: "60px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  heroSection: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "80px",
    position: "relative",
  },
  heroCard: {
    background: "linear-gradient(135deg, #6c5ce7, #0984e3)",
    color: "#fff",
    padding: "60px 50px",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
    textAlign: "center",
    maxWidth: "700px",
    position: "relative",
    overflow: "hidden",
  },
  heroTitle: {
    fontSize: "52px",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  heroText: {
    fontSize: "20px",
    marginBottom: "30px",
  },
  heroButton: {
    padding: "12px 28px",
    backgroundColor: "#fff",
    color: "#0984e3",
    fontWeight: "bold",
    borderRadius: "12px",
    textDecoration: "none",
    transition: "all 0.3s",
    cursor: "pointer",
  },
  heroDecor: {
    position: "absolute",
    width: "150px",
    height: "150px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "50%",
    top: "-50px",
    right: "-50px",
    animation: "float 6s ease-in-out infinite alternate",
  },
  section: {
    marginBottom: "60px",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "30px",
    borderBottom: "4px solid #6c5ce7",
    display: "inline-block",
    paddingBottom: "10px",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  cardTitle: {
    fontSize: "22px",
    marginBottom: "12px",
    color: "#6c5ce7",
    fontWeight: "bold",
  },
  cardText: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  projectButton: {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#0984e3",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },
  badge: {
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "25px",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "all 0.3s",
    cursor: "default",
  },
};

// Inject hover & animation styles
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    div:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(0,0,0,0.2);
    }
    button:hover {
      background-color: #6c5ce7;
    }
    a:hover {
      background-color: #6c5ce7;
      color: #fff;
    }
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
  `;
  document.head.appendChild(style);
}
