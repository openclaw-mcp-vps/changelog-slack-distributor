export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-post changelogs to<br />
          <span className="text-[#58a6ff]">relevant Slack channels</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor Git repos, parse commits, and distribute formatted changelog updates to the right Slack channels — automatically, based on file paths and team mappings.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $19/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#8b949e]">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] font-semibold mb-1">Git Webhook Parsing</div>
            Detects changelog-worthy commits from push events automatically.
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] font-semibold mb-1">Path-based Routing</div>
            Maps file paths to teams and Slack channels via simple config.
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] font-semibold mb-1">Slack Bot Integration</div>
            Posts rich, formatted messages directly to the right channels.
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left text-sm text-[#c9d1d9] space-y-3 mb-8">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Unlimited Git repositories</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Unlimited Slack channels</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Custom file path → channel mappings</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Dashboard for config management</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Webhook delivery logs</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Email support</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="font-semibold text-white mb-2">How does the Git integration work?</div>
            <p className="text-[#8b949e] text-sm">You add a webhook URL to your GitHub, GitLab, or Bitbucket repository. On every push, we parse the commits, identify changelog-worthy changes by message convention or file path, and route them to the right Slack channels.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="font-semibold text-white mb-2">How do I map file paths to Slack channels?</div>
            <p className="text-[#8b949e] text-sm">In the dashboard, you define rules like <code className="bg-[#0d1117] px-1 rounded text-[#58a6ff]">services/payments/**</code> → <code className="bg-[#0d1117] px-1 rounded text-[#58a6ff]">#payments-team</code>. Multiple rules can match a single commit, so updates reach every relevant channel.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="font-semibold text-white mb-2">Can I cancel anytime?</div>
            <p className="text-[#8b949e] text-sm">Yes. Cancel from your billing portal at any time. Your subscription stays active until the end of the billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} Changelog Slack Distributor. All rights reserved.
      </footer>
    </main>
  );
}
