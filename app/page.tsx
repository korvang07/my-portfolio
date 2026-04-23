```javascript
import Image from "next/image";

export default function Home() {
  return (
    <main style={styles.page}>

      {/* NAVBAR */}
      <header style={styles.header}>
        <nav style={styles.nav}>
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#experience" style={styles.navLink}>Experience</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <div style={styles.container}>

        {/* HERO */}
        <section id="home" style={styles.hero}>
          <Image
            src="/myimage.png"
            alt="Profile"
            width={120}
            height={120}
            style={styles.avatar}
          />

          <h1 style={styles.title}>Kor Vang</h1>

          <p style={styles.subtitle}>
            Full Stack Developer • IT Support Specialist
          </p>

          <p style={styles.tagline}>
            WordPress • PHP • React • Next.js
          </p>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={styles.section}>
          <h2 style={styles.sectionTitle}>Projects</h2>

          <div style={styles.grid}>
            <div style={styles.card}>
              <h3>Portfolio Website</h3>
              <p>
                Built with Next.js, deployed on Vercel with responsive design
                and API integration.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Business Websites</h3>
              <p>
                Created WordPress sites for small businesses with SEO,
                performance optimization, and UI improvements.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={styles.section}>
          <h2 style={styles.sectionTitle}>Experience</h2>

          <div style={styles.grid}>
            <div style={styles.card}>
              <h3>IT Support Specialist</h3>
              <p>
                Troubleshooting, user support, system maintenance,
                and resolving technical issues in real environments.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Web Developer</h3>
              <p>
                Built and maintained WordPress websites with focus on
                client needs, performance, and usability.
              </p>
            </div>
          </div>
        </section>

        {/* CLIENT WORK */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Client Work</h2>

          <div style={styles.card}>
            <h3>Strategic Roofers</h3>
            <p>
              Developed and maintained a business website with modern UI,
              plugin integration, and performance optimization.
            </p>

            <a
              href="https://strategic-roofers.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              View Live Site →
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact</h2>

          <div style={styles.card}>
            <p><b>Email:</b> korvang4@gmail.com</p>
            <p><b>Phone:</b> (703) 209-4260</p>
            <p><b>Location:</b> California, USA</p>
          </div>
        </section>

      </div>
    </main>
  );
}

/* 🎨 MODERN STYLES */
const styles = {
  page: {
    fontFamily: "Inter, Arial",
    background: "#f9fafb",
    color: "#111827",
    scrollBehavior: "smooth",
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
  },

  header: {
    position: "sticky",
    top: 0,
    background: "rgba(255,255,255,0.8)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #e5e7eb",
    padding: "15px",
    zIndex: 1000,
  },

  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },

  navLink: {
    textDecoration: "none",
    color: "#374151",
    fontWeight: "500",
  },

  hero: {
    textAlign: "center",
    marginBottom: "60px",
  },

  avatar: {
    borderRadius: "50%",
    marginBottom: "20px",
  },

  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    color: "#6b7280",
  },

  tagline: {
    marginTop: "10px",
    color: "#2563eb",
    fontWeight: "600",
  },

  section: {
    marginBottom: "50px",
  },

  sectionTitle: {
    fontSize: "24px",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    transition: "0.3s",
  },

  link: {
    display: "inline-block",
    marginTop: "10px",
    color: "#2563eb",
    fontWeight: "600",
    textDecoration: "none",
  },
};
```
