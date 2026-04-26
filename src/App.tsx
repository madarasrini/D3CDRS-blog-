import { motion } from 'framer-motion';
import { Shield, Clock, Terminal, Scale } from 'lucide-react';
import { CodeBlock, InlineCode } from './components/CodeBlock';
import { H2, H3, P, Ul, Ol, Li } from './components/Typography';
import { codeSnippets } from './lib/codeSnippets';

function ChartImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-8 flex flex-col items-center">
      <div className="w-full overflow-hidden rounded border border-slate-300 shadow-sm bg-white p-2">
        <img src={src} alt={alt} className="w-full h-auto rounded-sm object-cover" />
      </div>
      <figcaption className="mt-4 text-[11px] uppercase tracking-widest font-bold text-slate-500 font-sans text-center px-4">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-serif selection:bg-slate-900 selection:text-white py-8 sm:py-16">
      
      {/* Main Container */}
      <main className="relative max-w-4xl mx-auto bg-white px-6 sm:px-16 py-16 sm:py-24 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200">
        
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-8 right-8 h-[3px] bg-slate-900">
          <div className="absolute top-[5px] left-0 right-0 h-[1px] bg-slate-900"></div>
        </div>

        {/* Article Header */}
        <motion.article 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <header className="mb-16 mt-6 flex flex-col items-center text-center">
            
            <div className="mb-8 p-3 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
              <Scale className="w-6 h-6 text-[#b89047]" />
            </div>
            
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b89047] mb-6 block font-sans">Project Chronicle — Vol. 01</span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold tracking-tight text-slate-900 mb-10 leading-[1.15] max-w-3xl">
              Building an Adaptive AI Firewall: LLMs, Reinforcement Learning & Real-Time Threat Simulation
            </h1>

            <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl">
              {['cybersecurity', 'reinforcement-learning', 'LLM', 'simulation', 'firewall'].map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-slate-600 border border-slate-200 bg-slate-50 px-3 py-1.5 font-sans rounded-sm shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-6 text-[11px] font-bold uppercase tracking-[0.15em] border-y border-slate-200 py-4 w-full text-slate-500 font-sans">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#b89047]" />
                <span>By D3CDRS</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-300"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#b89047]" />
                <span><time dateTime="2026-04-26">April 26, 2026</time></span>
              </div>
            </div>
          </header>

          {/* Intro */}
          <div className="max-w-none">
            <P className="text-2xl sm:text-3xl text-slate-900 font-serif font-bold leading-snug mb-10 text-center px-4">
              What if your firewall could <strong className="text-[#b89047]">learn</strong>? Not just apply static rules — but reason, adapt, and get smarter every time an attacker tries to outsmart it?
            </P>

            
            <P>
              That's the core idea behind the <strong>Adaptive AI Firewall</strong> — a cybersecurity simulation platform that combines Large Language Models, Reinforcement Learning, and realistic encrypted network traffic generation into a single, unified research pipeline. This post walks you through how it works, why each design choice was made, and what makes it different from traditional rule-based systems.
            </P>

            <H2>The Problem with Static Firewalls</H2>
            <P>Traditional firewalls operate on fixed rules:</P>
            <Ul>
              <Li>Block IP <InlineCode>x.x.x.x</InlineCode></Li>
              <Li>Allow traffic on port 443</Li>
              <Li>Drop packets with entropy above threshold <InlineCode>t</InlineCode></Li>
            </Ul>
            
            <P>
              These rules work — until attackers learn them. Modern threats use <strong>stealth techniques, encrypted payloads, and behavioral mimicry</strong> to slip through. A firewall that can't adapt is just a speed bump.
            </P>
            <P>
              The goal of this project was to build an environment where AI agents can be trained, tested, and evaluated against an adversary that evolves as they improve.
            </P>

            <H2>System Overview</H2>
            <P>The platform has three major pillars:</P>
            <Ol>
              <li><strong>Defense Agents</strong> — the AI systems making decisions</li>
              <li><strong>The Environment</strong> — a realistic network traffic simulator</li>
              <li><strong>Adaptive Training</strong> — a curriculum engine that keeps the challenge hard</li>
            </Ol>
            <P>Let's go through each one.</P>

            <H2>1. The Defense Agents</H2>
            
            <H3>The Autonomous AI Agent (LLM)</H3>
            <P>
              The primary agent is powered by <InlineCode>qwen3.5</InlineCode> running via the Ollama API, using <strong>zero-shot contextual classification</strong>. It receives a sanitized JSON snapshot of a network session and must output one of six discrete actions:
            </P>

            <div className="my-12 overflow-x-auto border-t-[3px] border-b-[3px] border-slate-900">
              <table className="w-full text-left font-sans text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold border-b-2 border-slate-200 text-slate-800">Action</th>
                    <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold border-b-2 border-slate-200 text-slate-800">What It Does</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ['ALLOW', 'Let the session through'],
                    ['BLOCK', 'Drop the connection immediately'],
                    ['INSPECT', 'Deep-dive analysis (costs compute budget)'],
                    ['SANDBOX', 'Isolate in a safe container'],
                    ['RATE_LIMIT', 'Throttle suspicious traffic'],
                    ['QUARANTINE', 'Isolate and flag for review'],
                  ].map(([action, desc]) => (
                    <tr key={action} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs font-bold text-[#b89047] whitespace-nowrap">{action}</td>
                      <td className="px-6 py-4 text-slate-700 text-base">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <P>Here's a simplified example of the prompt structure sent to the LLM:</P>
            <CodeBlock language="json" code={codeSnippets.jsonPrompt} />
            <P>The LLM reasons over the full 22-dimensional feature vector and outputs a single discrete action — no fine-tuning required.</P>

            <H3>The Baseline Heuristic Agent</H3>
            <P>To benchmark the LLM, a classic <strong>deterministic decision tree</strong> agent runs in parallel. It applies hard thresholds:</P>
            <CodeBlock language="python" code={codeSnippets.heuristicAgent} />
            <P>Fast, explainable, and predictable — but brittle against adversarial inputs. This is the baseline the LLM must beat.</P>

            <H2>2. The Environment & Traffic Generation</H2>
            
            <H3>22-Dimensional Encrypted Traffic</H3>
            <P>
              The environment generates realistic network sessions without inspecting payloads — just like a real-world firewall that sees only metadata on encrypted TLS traffic. Each session has 22 features across four categories:
            </P>
            <Ul>
              <Li><strong>Volume & Timing</strong> — packet rate, inter-arrival jitter, burst size</Li>
              <Li><strong>Network Metadata</strong> — source/dest IPs, ports, protocol flags</Li>
              <Li><strong>TLS & Certificates</strong> — cert age, JA3 hash cluster, cipher suite</Li>
              <Li><strong>Behavioral Context</strong> — geo-distance, connection reuse, session history</Li>
            </Ul>

            <H3>Poisson Traffic Spawning</H3>
            <P>Network traffic isn't uniform — it's bursty and irregular. The simulator uses a <strong>Poisson Point Process</strong> to model realistic inter-arrival times:</P>
            <CodeBlock language="python" code={codeSnippets.generateTraffic} />
            <P>This creates the same kind of irregular, high-variance traffic patterns seen in production networks.</P>

            <H3>The RL Environment (OpenEnv-style)</H3>
            <P>The <InlineCode>FirewallEnvironment</InlineCode> follows the standard RL interface:</P>
            <CodeBlock language="python" code={codeSnippets.firewallEnv} />
            <P>
              Every action has a real cost. <InlineCode>INSPECT</InlineCode> drains the compute budget. Letting a threat linger triggers cascade failure penalties. The agent must balance accuracy with efficiency.
            </P>

            <H2>3. Adaptive Training: Making the Environment Harder</H2>
            
            <H3>Automatic Domain Randomization (ADR)</H3>
            <P>
              The biggest challenge in training security agents is <strong>overfitting to a fixed threat profile</strong>. The Curriculum Engine solves this by watching the agent's weaknesses in real time and adjusting:
            </P>
            <CodeBlock language="python" code={codeSnippets.curriculum} />
            <P>As the agent improves, the environment gets harder — keeping the agent in a perpetual state of productive challenge.</P>
            <ChartImage 
              src="/curriculum difficulty.jpeg" 
              alt="Curriculum Difficulty Progression (ADR)"
              caption="Curriculum Difficulty Progression (ADR) during training."
            />

            <H3>Elo Rating for Non-Stationary Environments</H3>
            <P>
              Because the environment keeps changing, raw accuracy scores are misleading. A 90% accuracy against easy threats is worse than 75% against hard ones. The system uses an <strong>Elo rating</strong> (K=32) to track true skill growth:
            </P>
            <CodeBlock language="python" code={codeSnippets.elo} />
            <P>This gives a single, interpretable number that rises only when the agent beats increasingly hard environments — borrowed directly from competitive chess rating systems.</P>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mb-4">
              <ChartImage 
                src="/elo progress.jpeg" 
                alt="Elo Progression: Agent vs Adaptive Opponent"
                caption="Elo Progression: Agent vs Adaptive Opponent"
              />
              <ChartImage 
                src="/win rate.jpeg" 
                alt="Win Rate & Elo Gain per Round"
                caption="Win Rate & Elo Gain per Round"
              />
            </div>

            <H2>4. Diagnostics & Visualization</H2>
            
            <H3>Multi-Objective Grading</H3>
            <P>The system tracks far more than accuracy. Every training run measures:</P>
            <Ul>
              <Li><strong>Compute efficiency</strong> — did the agent overuse <InlineCode>INSPECT</InlineCode>?</Li>
              <Li><strong>Cascade failure rate</strong> — how many threats lingered too long?</Li>
              <Li><strong>Stealth detection rate</strong> — did the agent catch mimicry attacks?</Li>
              <Li><strong>False flag resistance</strong> — did it avoid blocking legitimate traffic?</Li>
            </Ul>
            <P>Automated pipelines generate multi-panel diagnostic PNG reports after every run — training loss curves, Elo progression, difficulty-normalized rewards, and full confusion matrices.</P>
            <ChartImage 
              src="/false positive.jpeg" 
              alt="Detection, False Positive & Efficiency over Training"
              caption="Detection, False Positive & Efficiency over Training"
            />

            <H3>Real-Time 3D Visualizer</H3>
            <P>The platform includes a live web UI built with HTML/JS and CSS3 Isometric Transforms. It reads the raw output JSON stream and animates each network packet in real time:</P>
            <Ul>
              <Li>Packets <strong>shatter</strong> visually on a <InlineCode>BLOCK</InlineCode></Li>
              <Li>Traffic <strong>pauses</strong> with a glow effect on <InlineCode>INSPECT</InlineCode></Li>
              <Li>Quarantined sessions move into an <strong>animated containment grid</strong></Li>
            </Ul>
            <P>The glassmorphic interface gives a real-time view of exactly what the AI is doing — and why.</P>

            <H2>Results & Observations</H2>
            <P>Early experiments show a few interesting patterns:</P>
            <Ul>
              <Li>The <strong>LLM agent</strong> significantly outperforms the heuristic baseline on stealth attacks — especially those with low entropy but unusual certificate behavior</Li>
              <Li>The <strong>heuristic agent</strong> is faster and more predictable on high-volume, obvious threats</Li>
              <Li><strong>ADR dramatically slows overfitting</strong> — agents trained with curriculum randomization generalize far better to unseen attack profiles</Li>
              <Li><strong>Elo ratings</strong> proved more meaningful than raw accuracy for tracking agent progress across curriculum shifts</Li>
            </Ul>
            <div className="grid grid-cols-1 gap-8 mt-10 mb-8">
              <ChartImage 
                src="/reward analsis.jpeg" 
                alt="Reward Analysis: Raw vs Difficulty-Normalized"
                caption="Reward Analysis: Raw vs Difficulty-Normalized"
              />
              <ChartImage 
                src="/trainloss.jpeg" 
                alt="Training Loss (Absolute Performance Gap)"
                caption="Training Loss (Absolute Performance Gap)"
              />
            </div>

            <H2>What's Next</H2>
            <P>There are several exciting directions to explore:</P>
            <Ul>
              <Li><strong>Fine-tuning the LLM</strong> on domain-specific cybersecurity data for better zero-shot accuracy</Li>
              <Li><strong>Multi-agent setups</strong> — pitting attacker and defender agents against each other in full self-play</Li>
              <Li><strong>Integration with real PCAP data</strong> to bridge simulation and production traffic</Li>
              <Li><strong>Exporting trained RL policies</strong> for deployment in actual network monitoring tools</Li>
            </Ul>

            <H2>Conclusion</H2>
            <P>
              The Adaptive AI Firewall demonstrates that the future of network security isn't static rules — it's agents that reason, adapt, and improve. By combining LLM zero-shot reasoning, Poisson-realistic traffic simulation, automatic domain randomization, and Elo-based progress tracking, this platform provides a rigorous foundation for next-generation autonomous defense research.
            </P>
            <P>
              The full codebase and diagnostic outputs are available in this Space. Feedback and contributions are welcome in the Community tab.
            </P>
          </div>

          <footer className="mt-24 pt-8 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-500 font-sans">
                © {new Date().getFullYear()} The Collective Project. All Rights Reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-slate-400 font-sans text-[11px] uppercase tracking-wider font-bold">
                <span className="text-slate-500">Built with:</span>
                {['Python', 'Transformers', 'Ollama', 'OpenAI Gym', 'HTML/CSS3', 'JS'].map((tech, i, arr) => (
                  <span key={tech} className="flex items-center gap-2">
                    <span>{tech}</span>
                    {i < arr.length - 1 && <span className="text-slate-300">•</span>}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-6 h-6 text-[#b89047] opacity-80" />
            </div>
          </footer>
        </motion.article>
      </main>
    </div>
  );
}
