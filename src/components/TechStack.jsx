import { FaAws, FaDocker, FaNodeJs, FaReact, FaJava } from "react-icons/fa";
import { 
  SiGraphql, 
  SiKubernetes, 
  SiNextdotjs, 
  SiPostgresql, 
  SiPython, 
  SiRedis, 
  SiTailwindcss, 
  SiTypescript,
  SiGooglecloud
} from "react-icons/si";

export default function TechStack() {
  return (
    <div className="tech-showcase">
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
        <div className="tech-skill">
          <FaJava className="java-icon" />
          <span>Java</span>
        </div>
        <div className="tech-skill">
          <SiGooglecloud className="gcp-icon" />
          <span>GCP</span>
        </div>
      </div>
    </div>
  );
}
