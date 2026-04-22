import Image from "next/image";

async function getPosts() {
  const res = await fetch("https://wordpress.org/news/wp-json/wp/v2/posts", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main style={{
      fontFamily: "Arial",
      maxWidth: "1000px",
      margin: "auto",
      padding: "20px",
      backgroundColor: "#f5f7fb",
      minHeight: "100vh",
      color: "#111827"
    }}>

      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
        <h2>Kor Vang</h2>
        <div style={{ display: "flex", gap: "15px" }}>
          <a href="#projects">Projects</a>
          <a href="#business">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO WITH IMAGE */}
      <section style={{ textAlign: "center", marginBottom: "50px" }}>
        <Image 
          src="/myimage.png"
          alt="Profile"
          width={120}
          height={120}
          style={{ borderRadius: "50%", marginBottom: "15px" }}
        />
        <h1>Full Stack Developer</h1>
        <p>WordPress • PHP • React • Next.js</p>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ marginBottom: "50px" }}>
        <h2>Projects</h2>

        <div style={card}>
          <h3>Headless WordPress Blog</h3>
          <p>
            Built a modern web application using WordPress as backend and Next.js frontend.
            Integrated REST API for dynamic content rendering.
          </p>
        </div>
      </section>

      {/* BUSINESS WORK (YOUR REAL EXPERIENCE) */}
      <section id="business" style={{ marginBottom: "50px" }}>
        <h2>Client & Business Websites</h2>

        <div style={card}>
          <h3>Strategic Roofers</h3>
          <p>
            Developed and maintained a WordPress business website including design,
            plugin integration, and performance optimization.
          </p>

          {/* CLICKABLE LINK */}
          <a 
            href="https://strategic-roofers.com/" 
            target="_blank"
            style={linkStyle}
          >
            View Live Website →
          </a>
        </div>

      </section>

      {/* LIVE API DATA */}
      <section style={{ marginBottom: "50px" }}>
        <h2>Live API Data</h2>

        {posts.slice(0, 3).map((post: any) => (
          <div key={post.id} style={{ marginBottom: "20px" }}>
            <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: korvang4@gmail.com</p>
        <p>Phone: (703) 209-4260</p>
      </section>

    </main>
  );
}

/* reusable styles */
const card = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  marginBottom: "20px"
};

const linkStyle = {
  display: "inline-block",
  marginTop: "10px",
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: "bold"
};