import Image from "next/image";

export default function Home() {
  return (
    <main style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <Image
          src="/myimage.png"
          alt="Profile"
          width={110}
          height={110}
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
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>

        <div style={styles.card}>
          <h3>Portfolio Website</h3>
          <p>
            Built a full-stack portfolio using Next.js, GitHub, and Vercel deployment
            with API integration and responsive design.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Business Website Development</h3>
          <p>
            Designed and maintained WordPress websites for small businesses including
            UI updates, plugin integration, and performance optimization.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>

        <div style={styles.card}>
          <h3>IT Support Specialist</h3>
          <p>
            Provided technical support, troubleshooting, and system assistance in
            professional environments including user support, software issues,
            and administrative IT operations.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Web Developer / Freelance</h3>
          <p>
            Built and maintained WordPress websites for small businesses with
            focus on design, performance, and client support.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact</h2>

        <div style={styles.card}>
          <p><b>Email:</b> korvang4@gmail.com</p>
          <p><b>Phone:</b> (703) 209-4260</p>
          <p><b>Location:</b> California, USA</p>
        </div>
      </section>

    </main>
  );
}

/* 🎨 STYLES */
const styles = {
  page: {
    fontFamily: "Arial",
    background: "linear-gradient(to bottom, #eef2ff, #f8fafc)",
    minHeight: "100vh",
    padding: "40px",
    color: "#111827",
  },

  hero: {
    textAlign: "center" as const,
    marginBottom: "50px",
  },

  avatar: {
    borderRadius: "50%",
    marginBottom: "15px",
  },

  title: {
    fontSize: "32px",
    margin: "10px 0",
  },

  subtitle: {
    fontSize: "18px",
    color: "#4b5563",
  },

  tagline: {
    marginTop: "10px",
    color: "#2563eb",
    fontWeight: "bold",
  },

  section: {
    marginBottom: "40px",
  },

  sectionTitle: {
    fontSize: "22px",
    marginBottom: "15px",
    borderLeft: "4px solid #2563eb",
    paddingLeft: "10px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    marginBottom: "15px",
    transition: "0.2s",
  },
};