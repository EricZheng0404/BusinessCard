import { FaAws, FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { 
  SiGraphql, 
  SiKubernetes, 
  SiNextdotjs, 
  SiPostgresql, 
  SiPython, 
  SiRedis, 
  SiTailwindcss, 
  SiTypescript 
} from "react-icons/si";

export default function Main() {
  return (
    <div className="main">
      {/* About Section */}
      <div className="about">
        <h3>About</h3>
        <div>
          <p>
            🤓 Passionate about crafting impactful software solutions—from 
            intuitive <span>full-stack applications</span> 
            to resilient <span>distributed systems</span>—
            that empower people, uncover insights, and make technology 
            feel seamless. Experienced across React, Node.js, Python, and 
            cloud-native architectures.
          </p>
          <p>
            🐕 A curious soul beyond the code: a devoted <span>pet lover</span>, 
            <span> music enthusiast</span>, and <span>traveler</span>, 
            always seeking stories, rhythms, and adventures that inspire both life and work.
          </p>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="interests">
        <h3>Tech Stack</h3>
        <div className="tech-stack-container">
          <div className="tech-skill">
            <FaReact className="react-icon" />
            <span>React</span>
          </div>
          <div className="tech-skill">
            <SiTypescript className="typescript-icon" />
            <span>TypeScript</span>
          </div>
          <div className="tech-skill">
            <FaNodeJs className="nodejs-icon" />
            <span>Node.js</span>
          </div>
          <div className="tech-skill">
            <SiPython className="python-icon" />
            <span>Python</span>
          </div>
          <div className="tech-skill">
            <FaDocker className="docker-icon" />
            <span>Docker</span>
          </div>
          <div className="tech-skill">
            <FaAws className="aws-icon" />
            <span>AWS</span>
          </div>
          <div className="tech-skill">
            <SiGraphql className="graphql-icon" />
            <span>GraphQL</span>
          </div>
          <div className="tech-skill">
            <SiPostgresql className="postgresql-icon" />
            <span>PostgreSQL</span>
          </div>
          <div className="tech-skill">
            <SiRedis className="redis-icon" />
            <span>Redis</span>
          </div>
          <div className="tech-skill">
            <SiKubernetes className="kubernetes-icon" />
            <span>Kubernetes</span>
          </div>
          <div className="tech-skill">
            <SiNextdotjs className="nextjs-icon" />
            <span>Next.js</span>
          </div>
          <div className="tech-skill">
            <SiTailwindcss className="tailwind-icon" />
            <span>TailwindCSS</span>
          </div>
        </div>
      </div>
    </div>
  );
}