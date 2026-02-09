**PROMPT: GENERATE ZYGUR WEBSITE COPY FOR COMPLIANCE DEV TOOLS PORTFOLIO**

Use this prompt to generate website copy text only. Paste into Claude/ChatGPT when updating site content.

---

```
CONTEXT:
Zygur is an indie software studio that ships CLI tools (terminal applications written in Go) for software developers working in regulated industries (healthcare, fintech, legal, government). 

The business model requires zero sales calls: tools are under $200, run local-first on the user's machine, and purchased via Stripe without procurement approval. One-time pricing preferred over subscriptions.

Generate website copy for the following 7 products:

PRODUCT LIST:

1. "Safe Harbor"
- Type: CLI tool
- Function: Checks if datasets are HIPAA Safe Harbor de-identified (scans for 18 identifiers)
- Command: `safeharbor check patient_export.csv`
- Price: $49 one-time
- Pain Point: Avoids $50K HIPAA fines before sending data to ML teams
- ICP: HealthTech developers, data engineers

2. "Evidence"
- Type: CLI tool  
- Function: Auto-generates SOC2 evidence packages by scraping Git history/Jira/Slack
- Command: `evidence collect --start=2024-01-01 --type=access-control`
- Price: $99 one-time or $15/month
- Pain Point: Saves 40 hours of manual screenshot collection for auditors
- ICP: Compliance engineers at B2B SaaS startups

3. "PiiGrep"
- Type: CLI tool
- Function: Scans codebase for hardcoded PII (emails, SSNs, secrets)
- Command: `piigrep ./src --format=sarif`
- Price: $29 one-time
- Pain Point: Catches PII leaks in CI/CD before audit
- ICP: DevOps engineers, security-conscious developers

4. "AuditDiff"
- Type: CLI tool
- Function: Shows exactly what changed between two database dumps for audit validation
- Command: `auditdiff dump_0301.sql dump_0401.sql --table=patients`
- Price: $79 one-time
- Pain Point: Debugging "who changed what" during audit panic
- ICP: Database admins, compliance developers

5. "BAA-Check"
- Type: CLI tool
- Function: Validates vendor URLs/subprocessors against HIPAA BAA whitelist
- Command: `baacheck --vendor stripe.com`
- Price: $39 one-time
- Pain Point: Responds to "subprocessor review" requests from hospital legal
- ICP: HealthTech CTOs, vendor management

6. "Retention"
- Type: CLI tool
- Function: Automatically deletes/pseudonymizes old database records per GDPR/CCPA retention policies
- Command: `retention apply --db=postgres://prod --policy=7years --dry-run`
- Price: $149 one-time
- Pain Point: Avoids GDPR fines, runs as cron job
- ICP: Data engineers, privacy officers

7. "Guardrail"
- Type: CLI tool (pre-commit hook)
- Function: Blocks commits containing HIPAA keywords (PHI, patient names) in non-encrypted paths
- Command: `git commit -m "Added patient data"` → [BLOCKED]
- Price: $19 one-time
- Pain Point: Prevents "oops I pushed SSNs to GitHub" fire drill
- ICP: All regulated developers, Git users

COPY SECTIONS TO GENERATE:

1. Landing Page Hero Section:
- Headline (what Zygur is)
- Subhead (local-first, no sales calls, buy once use forever)
- Brief description of the studio

2. Individual Product Sections (for each of the 7):
- Product name as H2
- One-sentence description
- The command example (code block)
- Price
- Bullet points of what it does
- Who it's for

3. Value Proposition Section:
- Why CLI tools instead of web platforms
- Why no subscriptions (one-time pricing)
- Why no sales calls (corporate card friendly)
- The "buy at 2am" angle

4. FAQ Section:
- Do these work offline?
- Do I need a subscription?
- Will this pass my audit?
- Enterprise licensing available?
- How do I install?

5. Call to Action:
- Browse tools button text
- GitHub link text
- Email contact text

REQUIREMENTS:
- No mention of colors, fonts, CSS, or visual design
- No ASCII art or visual descriptions
- No aesthetic references (retro, sci-fi, industrial, etc.)
- Focus on functionality, business model, and value proposition only
- Professional but direct tone
- Short paragraphs, scannable content

OUTPUT:
Generate clean Markdown text ready for a website. Include only the words/content, no design instructions.
```