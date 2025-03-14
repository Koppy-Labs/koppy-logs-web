import {
  ArrowRight,
  BarChart2,
  Code2,
  Github,
  Play,
  Shield,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

import { AnimatedBadge } from '@/components/animated-badge'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex flex-col gap-6 max-w-xl">
            <AnimatedBadge>Now in public beta</AnimatedBadge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              Modern logging for FiveM servers
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A powerful, lightweight logging system built specifically for
              FiveM servers with real-time monitoring and advanced analytics.
              Take control of your server's performance today.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button
                className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                size="lg"
              >
                Get Started
                <ArrowRight className="size-4 ml-1" />
              </Button>
              <Button
                className="rounded-full border-2 hover:bg-secondary/10 transition-all"
                variant="outline"
                size="lg"
              >
                <Play className="size-4 mr-1" />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-muted border-2 border-background"
                  ></div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by{' '}
                <span className="font-medium text-foreground">500+</span> FiveM
                servers
              </p>
            </div>
          </div>
          <div className="relative w-full max-w-md h-[450px] rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-card">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm"></div>
            <div className="absolute top-0 left-0 right-0 h-10 bg-background/80 backdrop-blur-sm border-b border-border/40 flex items-center px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                <div className="w-3 h-3 rounded-full bg-chart-3/80"></div>
                <div className="w-3 h-3 rounded-full bg-chart-1/80"></div>
              </div>
              <div className="mx-auto text-xs font-medium text-muted-foreground">
                Koppy Logs Dashboard
              </div>
            </div>
            {/* Placeholder for dashboard screenshot */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground pt-10">
              <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                <BarChart2 className="size-16 text-primary/60" />
                <p className="text-sm font-medium">
                  Interactive Dashboard Preview
                </p>
                <div className="w-3/4 h-2 bg-muted/50 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-primary animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/20 border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold text-primary">99.9%</h3>
              <p className="text-sm text-muted-foreground text-center">
                Uptime Guarantee
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold text-primary">500+</h3>
              <p className="text-sm text-muted-foreground text-center">
                Active Servers
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold text-primary">10M+</h3>
              <p className="text-sm text-muted-foreground text-center">
                Logs Processed Daily
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold text-primary">24/7</h3>
              <p className="text-sm text-muted-foreground text-center">
                Support Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From Devs to Devs Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-16">
            <AnimatedBadge size="sm">Built by developers</AnimatedBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-center max-w-2xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              From Developers, For Developers
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mt-4">
              We understand the challenges of server management because we've
              been there. Our tools are designed with real-world FiveM
              development experience in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl shadow-md border border-border/40 transition-all hover:shadow-lg hover:border-primary/20 group hover:translate-y-[-5px]">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <Zap width="24" height="24" className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Built for Performance
              </h3>
              <p className="text-muted-foreground">
                Optimized logging system that won't impact your server's
                performance, even with high player counts and heavy traffic. Our
                solution adds less than 0.01ms to your server tick time.
              </p>
              <div className="mt-6 pt-4 border-t border-border/40">
                <Link
                  href="/performance"
                  className="text-sm text-primary hover:underline flex items-center"
                >
                  Learn about our performance{' '}
                  <ArrowRight className="ml-1 size-3" />
                </Link>
              </div>
            </div>

            <div className="bg-background p-8 rounded-xl shadow-md border border-border/40 transition-all hover:shadow-lg hover:border-primary/20 group hover:translate-y-[-5px]">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <Code2 width="24" height="24" className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Developer-Friendly API
              </h3>
              <p className="text-muted-foreground">
                Simple integration with your existing codebase through our
                intuitive API designed by developers who understand your
                workflow. Comprehensive documentation with examples for all
                frameworks.
              </p>
              <div className="mt-6 pt-4 border-t border-border/40">
                <Link
                  href="/api-docs"
                  className="text-sm text-primary hover:underline flex items-center"
                >
                  Explore our API <ArrowRight className="ml-1 size-3" />
                </Link>
              </div>
            </div>

            <div className="bg-background p-8 rounded-xl shadow-md border border-border/40 transition-all hover:shadow-lg hover:border-primary/20 group hover:translate-y-[-5px]">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <Github width="24" height="24" className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Open Source Core</h3>
              <p className="text-muted-foreground">
                Transparent development with our core functionality available as
                open source. Customize, extend, and contribute back to the
                community. We believe in building together.
              </p>
              <div className="mt-6 pt-4 border-t border-border/40">
                <Link
                  href="https://github.com/koppylogs/core"
                  className="text-sm text-primary hover:underline flex items-center"
                >
                  View on GitHub <ArrowRight className="ml-1 size-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-24 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              What we offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center max-w-2xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              Powerful Features
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mt-4">
              Our comprehensive suite of tools gives you everything you need to
              monitor, analyze, and optimize your FiveM server performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6 bg-background/50 p-6 rounded-xl border border-border/40 hover:border-primary/20 transition-all hover:shadow-md">
              <div className="p-4 bg-primary/10 rounded-lg h-fit">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Real-time Monitoring</h3>
                <p className="text-muted-foreground">
                  Watch your server logs in real-time with our intuitive
                  dashboard. Filter, search, and analyze data instantly with
                  minimal latency. Set up custom views for different team
                  members.
                </p>
                <div className="mt-2">
                  <Link
                    href="/features/monitoring"
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 size-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-6 bg-background/50 p-6 rounded-xl border border-border/40 hover:border-primary/20 transition-all hover:shadow-md">
              <div className="p-4 bg-primary/10 rounded-lg h-fit">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                >
                  <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Advanced Filtering</h3>
                <p className="text-muted-foreground">
                  Powerful filtering options to help you find exactly what
                  you're looking for in your logs, with support for regex and
                  complex queries. Save custom filters for quick access.
                </p>
                <div className="mt-2">
                  <Link
                    href="/features/filtering"
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 size-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-6 bg-background/50 p-6 rounded-xl border border-border/40 hover:border-primary/20 transition-all hover:shadow-md">
              <div className="p-4 bg-primary/10 rounded-lg h-fit">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Customizable Alerts</h3>
                <p className="text-muted-foreground">
                  Set up alerts for specific events or errors to stay on top of
                  critical issues. Receive notifications via Discord, Slack, or
                  email. Configure thresholds and escalation policies.
                </p>
                <div className="mt-2">
                  <Link
                    href="/features/alerts"
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 size-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-6 bg-background/50 p-6 rounded-xl border border-border/40 hover:border-primary/20 transition-all hover:shadow-md">
              <div className="p-4 bg-primary/10 rounded-lg h-fit">
                <Shield width="28" height="28" className="text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Secure Storage</h3>
                <p className="text-muted-foreground">
                  All logs are securely stored and encrypted with
                  industry-standard protocols, ensuring your data remains
                  private and protected at all times. GDPR compliant with
                  flexible retention policies.
                </p>
                <div className="mt-2">
                  <Link
                    href="/features/security"
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 size-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              What our users say
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center max-w-2xl">
              Trusted by FiveM Developers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-background p-8 rounded-xl shadow-md border border-border/40"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "Koppy Logs has completely transformed how we monitor our
                  FiveM server. The real-time insights have helped us identify
                  and fix issues before they impact our players."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                  <div>
                    <p className="font-medium">Server Admin #{i}</p>
                    <p className="text-sm text-muted-foreground">
                      FiveM Community
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-background border border-border/40 p-12 rounded-2xl shadow-lg text-center">
            <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Limited time offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              Ready to improve your server monitoring?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of developers who have already enhanced their FiveM
              servers with Koppy Logs. Start your free trial today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                >
                  Get Started Now
                  <ArrowRight className="size-4 ml-1" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 hover:bg-secondary/10 transition-all"
                >
                  View Documentation
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 mt-auto bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col">
              <Link
                href="/"
                className="font-semibold text-xl mb-4 flex items-center"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <Shield className="size-4 text-primary" />
                </div>
                Koppy Logs
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Modern logging and monitoring solution built specifically for
                FiveM servers.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://twitter.com/koppylogs"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Link>
                <Link
                  href="https://github.com/koppylogs/core"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </Link>
                <Link
                  href="https://discord.gg/koppylogs"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Discord"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.928-.608 1.343a19.97 19.97 0 0 0-5.487 0c-.164-.415-.397-.954-.608-1.343a.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055c1.974 1.489 3.892 2.393 5.776 2.995a.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106c-.63-.24-1.23-.521-1.808-.849a.077.077 0 0 1-.008-.127c.122-.094.243-.19.359-.287a.074.074 0 0 1 .078-.01c3.927 1.838 8.18 1.838 12.062 0a.074.074 0 0 1 .078.01c.116.098.237.193.36.287a.077.077 0 0 1-.007.127c-.579.328-1.18.61-1.809.85a.076.076 0 0 0-.041.105c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029c1.898-.603 3.816-1.506 5.79-2.995a.078.078 0 0 0 .032-.055c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/docs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
                <Link
                  href="/changelog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Changelog
                </Link>
                <Link
                  href="/roadmap"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Roadmap
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/community"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Community
                </Link>
                <Link
                  href="/support"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </Link>
                <Link
                  href="/status"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Status
                </Link>
                <Link
                  href="/tutorials"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tutorials
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="/legal"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Legal
                </Link>
                <Link
                  href="/partners"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Partners
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Koppy Logs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
