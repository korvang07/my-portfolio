```tsx
import Image from "next/image";
import { FormEvent } from "react";

export default function Home() {

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert("Message sent!");
      form.reset();
    } else {
      alert("Something went wrong");
    }
  }

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
                and resolving technical issues.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Web Developer</h3>
              <p>
                Built and maintained WordPress websites focused on
                performance and client needs.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact</h2>

          <form style={styles.card} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={styles.input}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={styles.input}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              style={styles.textarea}
            />

            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        </section>

      </div>
    </main>
  );
}

/* 🎨 STYLES */
const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "Inter, Arial",
    background: "#f9fafb",
    color: "#111827",
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
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },

  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    minHeight: "100px",
  },

  button: {
    background: "#2563eb",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
```
