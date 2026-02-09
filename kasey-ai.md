# Kasey AI

> Terminal-based marketing automation for developers who ship.

**Created and maintained by [Zygur](https://zygur.com)**

---

## Overview

Kasey AI is a command-line tool that generates high-converting ad creatives for social media platforms. It combines the power of your favorite LLMs with battle-tested marketing principles to create content that drives clicks, engagement, and conversions.

No GUI. No bloat. No bullshit. Just results.

---

## Philosophy

Kasey AI is built on a strict adherence to proven marketing principles that have generated billions in sales:

### Core Principle: Marketing Makes Sales Redundant
When your marketing is good enough, you build so much pent-up demand that people are already sold before they talk to you.

### The Three Pillars

#### 1. Pain Over Product
Your product is a barrier between your prospect's pain and their desired pleasure. Kasey focuses on articulating the pain, not listing features.

#### 2. Fifth-Grade Simplicity
The best-converting copy reads at a fifth-grade level. Kasey generates copy that's Sesame Street simple—no jargon, no insider terminology.

#### 3. Proof Over Claims
In a jaded market, proof must be louder than claims. Kasey structures content to lead with evidence and social proof.

### The Hyperdopamine Ad Formula

Every piece of content Kasey generates follows this framework:

```
HYPERDOPAMINE AD = Pattern Interrupt + Burning Intrigue + Big Specific Benefit
```

- **Pattern Interrupt:** Visuals and hooks that stop the scroll
- **Burning Intrigue:** Curiosity gaps that demand clicks
- **Big Specific Benefit:** Targeted outcomes your market desperately wants

### What Kasey Avoids

❌ Buried benefits (talking about your company instead of customer outcomes)  
❌ Jargon overload (insider terminology that alienates)  
❌ Claims louder than proof (unsubstantiated promises)  
❌ Ads that look like ads (native content always wins)  
❌ Negative hooks (positive benefits outperform 8/10 times)

---

## Installation

### Via npm
```bash
npm install -g kasey-ai
```

### Via Homebrew
```bash
brew install zygur/tap/kasey
```

### Via curl
```bash
curl -fsSL https://kasey.ai/install.sh | sh
```

### From Source
```bash
git clone https://github.com/zygur/kasey-ai.git
cd kasey-ai
cargo build --release
```

---

## Quick Start

### 1. Initialize Configuration
```bash
kasey init
```

This creates a `.kaseyrc` file in your home directory.

### 2. Add Your API Keys
```bash
kasey config set image-llm grok --api-key $GROK_API_KEY
kasey config set copy-llm claude --api-key $ANTHROPIC_API_KEY
```

### 3. Generate Your First Ad
```bash
kasey generate \
  --platform linkedin \
  --product "Developer productivity tool" \
  --pain "Developers waste 4 hours daily on context switching" \
  --benefit "Ship 2x faster with deep focus sessions"
```

---

## Configuration

### Config File (`.kaseyrc`)
```yaml
# ~/.kaseyrc

# LLM Configuration
llms:
  image:
    provider: grok
    api_key: ${GROK_API_KEY}
    model: grok-2-image
  copy:
    provider: anthropic
    api_key: ${ANTHROPIC_API_KEY}
    model: claude-sonnet-4-20250514

# Default Settings
defaults:
  platform: linkedin
  tone: professional
  variants: 3
  output_dir: ./kasey-output

# Brand Guidelines
brand:
  name: "Your Company"
  voice: "Confident, helpful, slightly irreverent"
  colors:
    primary: "#6366f1"
    secondary: "#8b5cf6"
  forbidden_words:
    - "synergy"
    - "leverage"
    - "disrupt"

# Platform-Specific Settings
platforms:
  linkedin:
    image_size: "1200x627"
    max_copy_length: 3000
    hashtag_count: 3-5
  twitter:
    image_size: "1200x675"
    max_copy_length: 280
    thread_enabled: true
  tiktok:
    video_aspect: "9:16"
    max_duration: 60
  reddit:
    subreddits:
      - "SaaS"
      - "startups"
      - "Entrepreneur"
  facebook:
    image_size: "1200x630"
    max_copy_length: 2200
  instagram:
    image_size: "1080x1080"
    story_size: "1080x1920"
    max_copy_length: 2200
```

---

## Commands

### `kasey generate`
Generate ad creatives for a specific platform.

```bash
kasey generate [OPTIONS]

OPTIONS:
  -p, --platform <PLATFORM>    Target platform (linkedin|twitter|tiktok|reddit|facebook|instagram)
  --product <DESCRIPTION>      Brief description of your product
  --pain <PAIN_POINT>          The primary pain point you solve
  --benefit <BENEFIT>          The big specific benefit
  --proof <PROOF>              Social proof or credibility markers
  --tone <TONE>                Copy tone (professional|casual|urgent|playful)
  --variants <COUNT>           Number of variants to generate [default: 3]
  --output <DIR>               Output directory [default: ./kasey-output]
  --format <FORMAT>            Output format (files|json|stdout)
  --image-style <STYLE>        Image style (native|breaking-news|sms|social-post)
  
EXAMPLES:
  # Basic generation
  kasey generate -p linkedin --product "Time tracking app" --pain "Lost billable hours"
  
  # With proof and multiple variants
  kasey generate -p twitter \
    --product "API monitoring" \
    --pain "3am outage alerts" \
    --benefit "Catch issues before users do" \
    --proof "Used by 500+ startups" \
    --variants 5
    
  # Generate for all platforms
  kasey generate --platform all --product "Dev tool" --pain "Slow deployments"
```

### `kasey batch`
Process multiple campaigns from a YAML file.

```bash
kasey batch campaigns.yaml

# campaigns.yaml
campaigns:
  - name: "Q1 LinkedIn Push"
    platform: linkedin
    product: "Code review automation"
    pain: "PRs sitting for days"
    benefit: "Merge 3x faster"
    variants: 5
    
  - name: "Twitter Thread Series"
    platform: twitter
    product: "Code review automation"
    angles:
      - "time savings"
      - "team velocity"
      - "code quality"
```

### `kasey analyze`
Analyze existing ad copy against Kasey's marketing principles.

```bash
kasey analyze --file my-ad-copy.txt

# Output:
# ┌─────────────────────────────────────────────────────┐
# │ KASEY ANALYSIS REPORT                               │
# ├─────────────────────────────────────────────────────┤
# │ Reading Level: Grade 8 (Target: Grade 5) ⚠️         │
# │ Benefit Clarity: 6/10 - Benefit buried in para 3   │
# │ Intrigue Score: 4/10 - Missing curiosity hooks     │
# │ Jargon Count: 7 terms found                        │
# │ You/Your Ratio: 12% (Target: 80%)                  │
# │ Pattern Interrupt: Missing                         │
# ├─────────────────────────────────────────────────────┤
# │ RECOMMENDATIONS:                                    │
# │ 1. Move benefit to headline                        │
# │ 2. Replace "leverage" with "use"                   │
# │ 3. Add specific numbers to claims                  │
# │ 4. Lead with customer pain, not company history    │
# └─────────────────────────────────────────────────────┘
```

### `kasey optimize`
Take existing copy and optimize it using Kasey's principles.

```bash
kasey optimize --file my-ad-copy.txt --platform linkedin
```

### `kasey headlines`
Generate headline variants for A/B testing.

```bash
kasey headlines \
  --benefit "Double your leads" \
  --style "curiosity,news,direct" \
  --count 10

# Output:
# CURIOSITY:
# 1. "This lead gen hack feels illegal (it's not)"
# 2. "Why are 500 startups switching to this?"
# 3. "The LinkedIn trick nobody's talking about"
#
# NEWS:
# 4. "Breaking: New study reveals 2x lead gen method"
# 5. "Founders discover underground lead source"
#
# DIRECT:
# 6. "Double your leads in 30 days or less"
# 7. "Get 2x more leads without spending more"
```

### `kasey config`
Manage Kasey configuration.

```bash
# Set a config value
kasey config set copy-llm claude

# Get current config
kasey config get

# List available LLM providers
kasey config providers

# Validate API keys
kasey config validate
```

### `kasey platforms`
Show platform specifications and requirements.

```bash
kasey platforms

# Output:
# ┌────────────┬─────────────┬──────────────┬─────────────┐
# │ Platform   │ Image Size  │ Max Copy     │ Best For    │
# ├────────────┼─────────────┼──────────────┼─────────────┤
# │ LinkedIn   │ 1200x627    │ 3000 chars   │ B2B, SaaS   │
# │ Twitter/X  │ 1200x675    │ 280 chars    │ Tech, News  │
# │ TikTok     │ 1080x1920   │ 150 chars    │ Gen Z, B2C  │
# │ Reddit     │ varies      │ 40000 chars  │ Niche comm. │
# │ Facebook   │ 1200x630    │ 2200 chars   │ Broad reach │
# │ Instagram  │ 1080x1080   │ 2200 chars   │ Visual B2C  │
# └────────────┴─────────────┴──────────────┴─────────────┘

kasey platforms linkedin --detailed
```

---

## Supported LLM Providers

### For Image Generation
| Provider | Model | Notes |
|----------|-------|-------|
| **Grok** (recommended) | grok-2-image | Best for platform-optimized ad images |
| OpenAI | dall-e-3 | Good quality, higher cost |
| Stability AI | stable-diffusion-xl | Self-hostable option |
| Replicate | Various | Flexible model selection |

### For Ad Copy
| Provider | Model | Notes |
|----------|-------|-------|
| Anthropic | claude-sonnet-4-20250514 | Excellent for persuasive copy |
| OpenAI | gpt-4o | Strong all-around performance |
| Google | gemini-pro | Good for longer content |
| Groq | llama-3 | Fast and cost-effective |
| Local | ollama | Privacy-focused option |

### Configuration Examples

```bash
# Use Grok for images, Claude for copy (recommended)
kasey config set image-llm grok
kasey config set copy-llm anthropic

# Use OpenAI for everything
kasey config set image-llm openai
kasey config set copy-llm openai

# Use local models
kasey config set image-llm stability --endpoint http://localhost:7860
kasey config set copy-llm ollama --model llama3
```

---

## Output Structure

```
kasey-output/
├── linkedin/
│   ├── campaign-2024-01-15/
│   │   ├── variant-1/
│   │   │   ├── image.png
│   │   │   ├── copy.txt
│   │   │   ├── headline.txt
│   │   │   └── metadata.json
│   │   ├── variant-2/
│   │   └── variant-3/
│   └── campaign-2024-01-16/
├── twitter/
└── manifest.json
```

### Metadata JSON
```json
{
  "id": "ksy_abc123",
  "created_at": "2024-01-15T10:30:00Z",
  "platform": "linkedin",
  "variant": 1,
  "image": {
    "provider": "grok",
    "model": "grok-2-image",
    "dimensions": "1200x627",
    "style": "native-social"
  },
  "copy": {
    "provider": "anthropic",
    "model": "claude-sonnet-4-20250514",
    "reading_level": 4.2,
    "character_count": 1847
  },
  "scores": {
    "intrigue": 8.5,
    "benefit_clarity": 9.0,
    "pattern_interrupt": 7.5,
    "overall": 8.3
  },
  "inputs": {
    "product": "Developer productivity tool",
    "pain": "Context switching kills focus",
    "benefit": "Ship 2x faster"
  }
}
```

---

## CI/CD Integration

### GitHub Actions
```yaml
name: Generate Weekly Ads

on:
  schedule:
    - cron: '0 9 * * 1'  # Every Monday at 9am

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Install Kasey
        run: npm install -g kasey-ai
        
      - name: Generate Ads
        env:
          GROK_API_KEY: ${{ secrets.GROK_API_KEY }}
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          kasey batch .kasey/weekly-campaigns.yaml
          
      - name: Upload Artifacts
        uses: actions/upload-artifact@v4
        with:
          name: weekly-ads
          path: kasey-output/
```

### Pre-commit Hook
```bash
#!/bin/bash
# .git/hooks/pre-commit

# Analyze any marketing copy before committing
for file in $(git diff --cached --name-only | grep -E '\.(md|txt)$' | grep -i 'marketing\|ad\|copy'); do
  echo "Analyzing $file with Kasey..."
  kasey analyze --file "$file" --fail-below 7
done
```

---

## Ad Style Templates

### Breaking News Style
```bash
kasey generate \
  --platform facebook \
  --image-style breaking-news \
  --product "Startup funding platform" \
  --benefit "Raise seed round in 30 days"
  
# Generates news-style imagery with:
# - "BREAKING" banner
# - Urgent typography
# - Secondary proof image
# - News ticker aesthetic
```

### Native Social Style
```bash
kasey generate \
  --platform linkedin \
  --image-style native \
  --product "Code review tool"
  
# Generates authentic-looking content:
# - iPhone-quality photo aesthetic
# - Casual, non-corporate feel
# - Doesn't look like an ad
```

### SMS/Message Style
```bash
kasey generate \
  --platform instagram \
  --image-style sms \
  --product "Freelancer invoicing"
  
# Generates message-bubble imagery:
# - iMessage/SMS aesthetic
# - Conversational hook
# - Relatable scenario
```

---

## Best Practices

### DO ✅
- Test multiple variants (minimum 3-5)
- Lead with specific, quantified benefits
- Use proof from real customers
- Write like you talk
- Focus on the prospect's pain, not your features
- Make every headline create a curiosity gap

### DON'T ❌
- Use jargon or insider terminology
- Bury the benefit in paragraph 3
- Make claims without proof
- Sound like a corporate brochure
- Optimize for fellow marketers instead of customers
- Use generic stock imagery

---

## Troubleshooting

### Common Issues

**"API key invalid"**
```bash
kasey config validate
# Check that keys are set correctly in environment or .kaseyrc
```

**"Image generation failed"**
```bash
# Grok may have content restrictions
kasey generate --image-llm openai  # Try alternate provider
```

**"Copy exceeds platform limit"**
```bash
kasey generate --strict  # Enforces hard limits
```

### Debug Mode
```bash
kasey generate --debug --verbose
# Shows full API requests/responses
```

---

## Roadmap

### v1.0 (Current)
- [x] Core generation for all platforms
- [x] Multi-LLM support
- [x] Basic analysis tools

### v1.1
- [ ] A/B test result tracking
- [ ] Scheduled generation
- [ ] Slack/Discord notifications

### v1.2
- [ ] Video script generation
- [ ] TikTok auto-posting integration
- [ ] Performance analytics dashboard

### v2.0
- [ ] Full campaign management
- [ ] Multi-language support
- [ ] Custom fine-tuned models

---

## Support

- **Documentation:** https://kasey.ai/docs
- **GitHub Issues:** https://github.com/zygur/kasey-ai/issues
- **Discord:** https://discord.gg/zygur
- **Email:** support@kasey.ai

---

## License

MIT License - see [LICENSE](LICENSE) for details.

---

<p align="center">
  <strong>Built with 🔥 by <a href="https://zygur.com">Zygur</a></strong><br>
  <em>Making marketing accessible to developers everywhere.</em>
</p>
