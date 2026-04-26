export const codeSnippets = {
  jsonPrompt: `{
  "session": {
    "src_ip": "192.168.4.21",
    "dst_port": 443,
    "entropy": 0.71,
    "ja3_hash_cluster": 142,
    "geo_distance_km": 8900,
    "connection_reuse": false,
    "tls_cert_age_days": 2
  },
  "rules": "You must classify this session as one of: ALLOW, BLOCK, INSPECT, SANDBOX, RATE_LIMIT, QUARANTINE."
}`,
  heuristicAgent: `def heuristic_agent(session):
    if session["ja3_hash_cluster"] >= 130:
        return "BLOCK"
    if session["entropy"] > 0.55:
        return "INSPECT"
    if session["geo_distance_km"] > 5000:
        return "RATE_LIMIT"
    return "ALLOW"`,
  generateTraffic: `import numpy as np

def generate_traffic(traffic_lambda=5.0, n_sessions=100):
    inter_arrivals = np.random.exponential(1 / traffic_lambda, n_sessions)
    timestamps = np.cumsum(inter_arrivals)
    return timestamps`,
  firewallEnv: `class FirewallEnvironment:
    def reset(self):
        self.time = 0
        self.compute_budget = 100
        self.session_queue = []
        return self.state()

    def state(self):
        return {
            "focus_session": self.session_queue[0] if self.session_queue else None,
            "pending_count": len(self.session_queue),
            "compute_budget": self.compute_budget
        }

    def step(self, action):
        session = self.session_queue.pop(0)
        reward, cost = self._calculate_reward(session, action)
        self.compute_budget -= cost
        self._age_ttls()
        self.time += 1
        return self.state(), reward, self._is_done(), {}`,
  curriculum: `def update_curriculum(agent_performance, env_config):
    if agent_performance["stealth_accuracy"] > 0.85:
        env_config["stealth_multiplier"] *= 1.2 # Harder stealth attacks
    if agent_performance["false_positive_rate"] < 0.05:
        env_config["false_flag_prob"] += 0.1 # More benign-looking threats
    if agent_performance["overall_accuracy"] > 0.90:
        env_config["noise_level"] += 0.05 # Noisier feature signals
    return env_config`,
  elo: `def update_elo(agent_elo, env_elo, agent_won, K=32):
    expected = 1 / (1 + 10 ** ((env_elo - agent_elo) / 400))
    result = 1 if agent_won else 0
    new_elo = agent_elo + K * (result - expected)
    return new_elo`
};
