import Ticker from "@/components/Ticker";
import CountUp from "@/components/CountUp";
import MagneticLink from "@/components/MagneticLink";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Ticker />
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-mark">
            Soumil<span className="dash">—</span>Gupta
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#resumes">Resume</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* ============== HERO ============== */}
        <section className="hero" style={{ borderTop: "none" }}>
          <div className="container">
            <div className="hero-numeral">S</div>

            <div className="hero-meta">
              <span className="dot" />
              <span>New York · NY</span>
              <span>—</span>
              <span>Available · Summer 2026</span>
            </div>

            <h1>
              Soumil
              <br />
              <span className="ital">Gupta.</span>
              <span className="cursor-blink" aria-hidden="true">▍</span>
            </h1>

            <div className="hero-grid">
              <p className="hero-lead">
                I&apos;m a finance professional with hands-on experience across{" "}
                <em>equity research</em>, <em>portfolio management</em>, and{" "}
                <em>investment operations</em> — most recently supporting a $20M+
                multi-asset portfolio at Sutton Place Capital Management.
              </p>

              <div className="hero-side">
                <dl>
                  <div>
                    <dt>Education</dt>
                    <dd>MS Finance, Fordham Gabelli</dd>
                  </div>
                  <div>
                    <dt>Conferred</dt>
                    <dd>May 19, 2026 · GPA 3.8</dd>
                  </div>
                  <div>
                    <dt>Credentials</dt>
                    <dd>CFA Level I Cleared · BMC</dd>
                  </div>
                  <div>
                    <dt>Honors</dt>
                    <dd>Dean&apos;s Scholarship</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ============== ABOUT ============== */}
        <section id="about">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <div className="section-label">
                  <span className="num">01</span>Profile
                </div>
                <h2 className="section-title">
                  Disciplined research,
                  <br />
                  <em>data-led conviction.</em>
                </h2>
              </div>
            </Reveal>

            <div className="about-body">
              <div className="gutter" />
              <div className="about-text">
                <p>
                  I&apos;m an analytically driven finance professional with
                  hands-on experience in investment research, financial modeling,
                  portfolio management, and trade lifecycle operations across
                  multi-asset portfolios. My work spans DCF and comparable
                  valuation, fundamental credit and equity analysis, scenario
                  and stress testing, and the day-to-day cadence of supporting
                  a portfolio manager.
                </p>
                <p>
                  At Sutton Place Capital Management I worked directly with the
                  founder and PM on a $20M+ book spanning equities, fixed
                  income, and alternatives — running fundamental research on
                  30+ portfolio companies, reconciling positions against broker
                  statements, and helping translate analysis into investment
                  recommendations and client-facing reporting.
                </p>
                <p>
                  I&apos;m a CFA Level I holder, a Dean&apos;s Scholar at Fordham
                  Gabelli, and a strong communicator at home in fast-paced,
                  cross-functional environments.
                </p>

                <div className="about-stats">
                  <div className="stat">
                    <div className="stat-value">
                      <CountUp end={20} prefix="$" suffix="M+" />
                    </div>
                    <div className="stat-label">Multi-asset book supported at Sutton Place</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">
                      <CountUp end={30} suffix="+" />
                    </div>
                    <div className="stat-label">Companies covered in fundamental research</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">
                      <CountUp end={12} suffix="%" />
                    </div>
                    <div className="stat-label">Client portfolio return · 2.8% alpha</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">
                      <CountUp end={3.8} decimals={1} suffix="/4" />
                    </div>
                    <div className="stat-label">Graduate GPA · Dean&apos;s Scholar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== EXPERIENCE ============== */}
        <section id="experience">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <div className="section-label">
                  <span className="num">02</span>Experience
                </div>
                <h2 className="section-title">
                  Selected <em>engagements.</em>
                </h2>
              </div>
            </Reveal>

            <div className="exp-list">
              <article className="exp-item">
                <div className="exp-meta">
                  Sep 2025 — Dec 2025
                  <span className="loc">New York, NY</span>
                </div>
                <div>
                  <h3 className="exp-role">
                    Equity Research & Portfolio Management <em>Intern</em>
                  </h3>
                  <div className="exp-company">Sutton Place Capital Management</div>
                  <ul className="exp-bullets">
                    <li>
                      Worked directly with the Portfolio Manager and Founder
                      in monitoring a $20M+ multi-asset portfolio — supporting
                      allocation analysis, trade tracking, and performance
                      evaluation.
                    </li>
                    <li>
                      Conducted fundamental research on 30+ portfolio companies
                      across multiple sectors, analyzing financial statements,
                      industry trends, and valuation drivers.
                    </li>
                    <li>
                      Maintained daily cash and position reconciliations across
                      internal records and broker statements; assisted with
                      liquidity, FX, and concentration risk monitoring.
                    </li>
                    <li>
                      Managed client relationships and delivered timely portfolio
                      updates, contributing to a 15% increase in client
                      satisfaction.
                    </li>
                  </ul>
                </div>
              </article>

              <article className="exp-item">
                <div className="exp-meta">
                  Dec 2023 — Feb 2024
                  <span className="loc">Una, India</span>
                </div>
                <div>
                  <h3 className="exp-role">
                    Portfolio Management <em>Intern</em>
                  </h3>
                  <div className="exp-company">BB Advisory</div>
                  <ul className="exp-bullets">
                    <li>
                      Acquired and managed 3 clients; structured personalised
                      portfolios across equity, fixed income, and alternatives
                      aligned to goals, risk appetite, and time horizon.
                    </li>
                    <li>
                      Generated a 12% return with 2.8% alpha over three months;
                      improved portfolio Sharpe by 15% and reduced downside
                      volatility by 8% through disciplined rebalancing.
                    </li>
                    <li>
                      Performed fundamental and technical analysis on 20+
                      securities; presented performance attribution, risk
                      drivers, and rebalancing recommendations to leadership.
                    </li>
                  </ul>
                </div>
              </article>

              <article className="exp-item">
                <div className="exp-meta">
                  May 2022 — Jun 2022
                  <span className="loc">Panchkula, India</span>
                </div>
                <div>
                  <h3 className="exp-role">
                    Engineering <em>Intern</em>
                  </h3>
                  <div className="exp-company">Bharat Electronics Limited</div>
                  <ul className="exp-bullets">
                    <li>
                      Delivered $50K (10%) in cost savings through vendor
                      renegotiations for electronic components.
                    </li>
                    <li>
                      Tested and validated procured components with 100%
                      accuracy; assisted in compliance documentation to meet
                      defense QA standards.
                    </li>
                    <li>
                      Structured test logs and SOPs, improving traceability and
                      handoffs across engineering and procurement.
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============== PROJECTS ============== */}
        <section id="work">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <div className="section-label">
                  <span className="num">03</span>Projects
                </div>
                <h2 className="section-title">
                  Selected work,
                  <br />
                  <em>in detail.</em>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <article className="case-study">
                <div className="case-header">
                  <h3 className="case-title">
                    Telecom Customer Churn
                    <em>— a $3.68M leakage problem.</em>
                  </h3>
                  <p className="case-deck">
                    A formula-driven pipeline analysing <strong>7,043 customer
                    records across 42 fields</strong> to quantify churn, surface
                    its drivers, and produce a 301-customer at-risk scoring
                    list — delivered as a clean Excel workbook and a Power BI
                    dashboard.
                  </p>
                </div>

                <div className="case-kpis">
                  <div className="kpi">
                    <div className="kpi-value">
                      <CountUp end={7043} />
                    </div>
                    <div className="kpi-label">Customer records analysed</div>
                  </div>
                  <div className="kpi">
                    <div className="kpi-value">
                      <CountUp end={21.4} decimals={1} prefix="$" suffix="M" />
                    </div>
                    <div className="kpi-label">Total revenue in scope</div>
                  </div>
                  <div className="kpi kpi-accent">
                    <div className="kpi-value">
                      <CountUp end={3.68} decimals={2} prefix="$" suffix="M" />
                    </div>
                    <div className="kpi-label">Revenue lost to churn</div>
                  </div>
                  <div className="kpi">
                    <div className="kpi-value">
                      <CountUp end={28.4} decimals={1} suffix="%" />
                    </div>
                    <div className="kpi-label">Overall churn rate</div>
                  </div>
                </div>

                <div className="case-body">
                  <div className="case-section">
                    <h4 className="case-h">
                      <span className="case-h-num">i.</span>The problem
                    </h4>
                    <p>
                      A US telecom carrier was bleeding subscribers, but
                      management had no quantified view of which segments were
                      churning, why, or how much revenue was at stake. The data
                      existed — 7,043 customer records across demographics,
                      contracts, services, billing, and churn outcomes — but no
                      one had pulled it together into a decision-ready picture.
                    </p>
                  </div>

                  <div className="case-section">
                    <h4 className="case-h">
                      <span className="case-h-num">ii.</span>Method
                    </h4>
                    <p>
                      Built an end-to-end pipeline in Excel: cleaned and
                      standardised the raw dataset, then constructed
                      formula-driven pivots segmenting churn across five
                      dimensions — contract type, tenure cohort, promotional
                      offer, internet product, and revenue tier. Layered a
                      composite scoring model on top to identify the top
                      301 at-risk active customers. Ported the model into a
                      Power BI dashboard with linked filters for interactive
                      executive review.
                    </p>
                  </div>

                  <div className="case-section">
                    <h4 className="case-h">
                      <span className="case-h-num">iii.</span>Key findings
                    </h4>
                    <ul className="case-findings">
                      <li>
                        <span className="finding-stat">45.8%</span>
                        <span className="finding-text">
                          Month-to-month contracts churn at <strong>45.8%</strong>{" "}
                          vs <strong>2.5%</strong> for two-year contracts — an
                          18× spread driving <strong>$2.49M</strong> of the
                          revenue at risk.
                        </span>
                      </li>
                      <li>
                        <span className="finding-stat">47.4%</span>
                        <span className="finding-text">
                          First-year customers churn at <strong>47.4%</strong>,
                          collapsing to <strong>9.5%</strong> past 48 months —
                          retention is won or lost in year one.
                        </span>
                      </li>
                      <li>
                        <span className="finding-stat">40.7%</span>
                        <span className="finding-text">
                          Fiber Optic — the highest-revenue product
                          (<strong>$90/mo</strong> ARPU) — churns at{" "}
                          <strong>40.7%</strong>, the single largest revenue-loss
                          channel at <strong>$3.02M</strong>.
                        </span>
                      </li>
                      <li>
                        <span className="finding-stat">52.9%</span>
                        <span className="finding-text">
                          Offer E customers churn at <strong>52.9%</strong>,
                          25 points above average — a promotion attracting the
                          wrong cohort and destroying value.
                        </span>
                      </li>
                      <li>
                        <span className="finding-stat">3×</span>
                        <span className="finding-text">
                          Churned customers carry <strong>~3× shorter
                          tenure</strong> (18 vs 41 months) but{" "}
                          <strong>19% higher monthly charges</strong> —
                          high-bill, low-tenure is the canonical at-risk profile.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="case-section">
                    <h4 className="case-h">
                      <span className="case-h-num">iv.</span>Deliverables
                    </h4>
                    <p>
                      A formula-driven Excel workbook (raw data, six analysis
                      tabs, at-risk customer list, scoring methodology) and an
                      interactive Power BI dashboard suitable for executive
                      review. Both available for download below.
                    </p>
                  </div>
                </div>

                <div className="case-downloads">
                  <a
                    href="/projects/Telecom_Churn_Analysis.xlsx"
                    download
                    className="case-dl"
                  >
                    <div className="case-dl-meta">
                      <div className="case-dl-type">Excel</div>
                      <div className="case-dl-name">
                        Full analysis workbook
                      </div>
                      <div className="case-dl-detail">
                        7 sheets · 7,043 records · 1.8 MB
                      </div>
                    </div>
                    <span className="case-dl-arrow">↓</span>
                  </a>

                  <a
                    href="/projects/Telecom_Churn_Dashboard.pbix"
                    download
                    className="case-dl"
                  >
                    <div className="case-dl-meta">
                      <div className="case-dl-type">Power BI</div>
                      <div className="case-dl-name">
                        Interactive dashboard
                      </div>
                      <div className="case-dl-detail">
                        .pbix · Open in Power BI Desktop · 685 KB
                      </div>
                    </div>
                    <span className="case-dl-arrow">↓</span>
                  </a>
                </div>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="case-study">
                <div className="case-header">
                  <h3 className="case-title">
                    FP&amp;A Intelligence Dashboard
                    <em>— automated reporting, end to end.</em>
                  </h3>
                  <p className="case-deck">
                    A 9-module Python pipeline replacing the manual FP&amp;A
                    reporting cycle with a single command — pulling live
                    financial data for a <strong>5-company cross-sector
                    coverage universe</strong>, running variance analysis,
                    peer benchmarking, scenario modeling, and budget vs
                    actuals tracking, then delivering a formatted{" "}
                    <strong>6-tab Excel dashboard</strong> with AI-generated
                    commentary.
                  </p>
                </div>

                <div className="case-body">
                  <div className="case-section">
                    <h4 className="case-h">
                      <span className="case-h-num">i.</span>The problem
                    </h4>
                    <p>
                      FP&amp;A reporting in most organizations is manual,
                      slow, and not reproducible. An analyst pulls data from
                      multiple sources, pastes it into Excel, formats it by
                      hand, writes commentary, and repeats the entire process
                      next month from scratch. No automation, no consistency,
                      no audit trail. The question this project answers: can
                      the full FP&amp;A reporting cycle be automated end to
                      end with no manual intervention?
                    </p>
                  </div>

                  <div className="case-section">
                    <h4 className="case-h">
                      <span className="case-h-num">ii.</span>How it works
                    </h4>
                    <p>
                      Built a 9-module Python pipeline with a single entry
                      point. The data layer pulls live annual income statement
                      data from Yahoo Finance via yfinance and loads it into
                      a SQLite database, mirroring how FP&amp;A teams pull
                      from an ERP or data warehouse. Four analytical modules
                      run sequentially: variance analysis comparing
                      year-over-year performance across four income statement
                      metrics, peer benchmarking ranking companies on a
                      composite margin score, scenario modeling projecting
                      forward revenue and margins under base, upside, and
                      downside cases anchored to actual trailing numbers, and
                      a budget vs actuals module tracking Microsoft&apos;s
                      FY2025 segment-level revenue against a budget derived
                      from prior year actuals and consensus growth
                      assumptions. A single Claude API call generates natural
                      language FP&amp;A commentary from all four outputs.
                      Everything assembles into a formatted Excel dashboard
                      automatically.
                    </p>
                  </div>

                  <div className="case-section">
                    <h4 className="case-h">
                      <span className="case-h-num">iii.</span>Design decisions
                    </h4>
                    <ul className="case-findings">
                      <li>
                        <span className="finding-stat">Cross-sector</span>
                        <span className="finding-text">
                          Coverage universe spans Technology, Energy,
                          Real Estate, Healthcare, and Consumer Staples
                          intentionally — to surface operating model
                          differences rather than just rank similar businesses.
                        </span>
                      </li>
                      <li>
                        <span className="finding-stat">Anchored</span>
                        <span className="finding-text">
                          Scenario deltas applied on top of each
                          company&apos;s actual trailing numbers, not
                          arbitrary assumptions — every projection traces
                          back to reported financials.
                        </span>
                      </li>
                      <li>
                        <span className="finding-stat">Parameterized</span>
                        <span className="finding-text">
                          All tickers, scenario assumptions, thresholds,
                          and API settings live in a single config file.
                          Adding a company or changing an assumption
                          requires editing one line.
                        </span>
                      </li>
                      <li>
                        <span className="finding-stat">Reproducible</span>
                        <span className="finding-text">
                          The dashboard refreshes automatically when
                          underlying data changes. One command, under 60
                          seconds, no manual formatting or copy-pasting.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="case-section">
                    <h4 className="case-h">
                      <span className="case-h-num">iv.</span>Deliverable
                    </h4>
                    <p>
                      A formatted Excel dashboard with 6 tabs: income
                      statements, variance analysis, peer benchmarking,
                      scenario analysis, budget vs actuals segment tracking,
                      and AI-generated commentary. Available for download
                      below.
                    </p>
                  </div>
                </div>

                <div className="case-downloads">
                  <a
                    href="/projects/FPA_Intelligence_Dashboard.xlsx"
                    download
                    className="case-dl"
                  >
                    <div className="case-dl-meta">
                      <div className="case-dl-type">Excel</div>
                      <div className="case-dl-name">
                        Full dashboard · 6 tabs · live data
                      </div>
                      <div className="case-dl-detail">
                        .xlsx · 47 KB
                      </div>
                    </div>
                    <span className="case-dl-arrow">↓</span>
                  </a>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* ============== RESUME ============== */}
        <section id="resumes">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <div className="section-label">
                  <span className="num">04</span>Resume
                </div>
                <h2 className="section-title">
                  The one-pager,
                  <br />
                  <em>for the file.</em>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="resume-cta-wrap">
                <MagneticLink
                  href="/resumes/Soumil_Gupta_Resume.pdf"
                  download
                  className="resume-cta"
                  strength={0.15}
                >
                  <div className="resume-cta-left">
                    <div className="resume-cta-label">Download</div>
                    <div className="resume-cta-title">
                      Soumil Gupta <em>— Resume</em>
                    </div>
                    <div className="resume-cta-meta">PDF · One page</div>
                  </div>
                  <div className="resume-cta-right">
                    <span className="resume-cta-arrow">↓</span>
                  </div>
                </MagneticLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============== SKILLS ============== */}
        <section id="skills">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <div className="section-label">
                  <span className="num">05</span>Toolkit
                </div>
                <h2 className="section-title">
                  Instruments <em>at hand.</em>
                </h2>
              </div>
            </Reveal>

            <div className="skills-grid">
              <div className="gutter" />
              <div className="skills-body">
                <div className="skill-group">
                  <h3>
                    <span className="num">a/</span>Valuation & Modeling
                  </h3>
                  <ul className="skill-list">
                    <li>DCF Modeling</li>
                    <li>Comparable Company</li>
                    <li>Precedent Transactions</li>
                    <li>Scenario Planning</li>
                    <li>Sensitivity Analysis</li>
                    <li>Performance Attribution</li>
                    <li>Waterfall Returns</li>
                    <li>Sharpe Optimization</li>
                  </ul>
                </div>

                <div className="skill-group">
                  <h3>
                    <span className="num">b/</span>Research & Markets
                  </h3>
                  <ul className="skill-list">
                    <li>Equity Research</li>
                    <li>Credit Analysis</li>
                    <li>Fixed Income</li>
                    <li>Industry Analysis</li>
                    <li>Peer Benchmarking</li>
                    <li>Capital Structure</li>
                    <li>Macroeconomic Research</li>
                    <li>Real Estate · ARGUS</li>
                  </ul>
                </div>

                <div className="skill-group">
                  <h3>
                    <span className="num">c/</span>Operations & Reporting
                  </h3>
                  <ul className="skill-list">
                    <li>Trade Capture</li>
                    <li>Reconciliation</li>
                    <li>Settlement Coordination</li>
                    <li>FX Netting</li>
                    <li>Collateral Management</li>
                    <li>KYC Due Diligence</li>
                    <li>Compliance Documentation</li>
                    <li>Investment Memos</li>
                  </ul>
                </div>

                <div className="skill-group">
                  <h3>
                    <span className="num">d/</span>Tools & Technology
                  </h3>
                  <ul className="skill-list">
                    <li>Bloomberg Terminal</li>
                    <li>Advanced Excel · VBA</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Power BI</li>
                    <li>ARGUS Enterprise</li>
                    <li>PowerPoint</li>
                    <li>C++</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== CONTACT ============== */}
        <section id="contact" className="contact">
          <div className="container">
            <Reveal>
              <div className="contact-grid">
                <div className="section-label">
                  <span className="num">06</span>Get in touch
                </div>
                <div>
                  <h2 className="contact-statement">
                    Open to <em>full-time roles</em>
                    <br />
                    starting summer 2026.
                  </h2>
                </div>
              </div>
            </Reveal>

            <div className="contact-links">
              <a href="mailto:soumilgupta22@gmail.com" className="contact-link">
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">soumilgupta22@gmail.com</div>
              </a>
              <a href="tel:+19298447305" className="contact-link">
                <div className="contact-link-label">Telephone</div>
                <div className="contact-link-value">+1 (929) 844-7305</div>
              </a>
              <a
                href="https://www.linkedin.com/in/soumil-gupta-"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">/in/soumil-gupta</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-inner">
            <span>© 2026 · Soumil Gupta · All rights reserved</span>
            <span>
              New York <span className="accent">●</span> NY
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
