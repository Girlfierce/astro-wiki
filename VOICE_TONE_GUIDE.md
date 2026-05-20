# Astro Wiki Voice & Tone Guide

## Core Voice Characteristics

Our wiki maintains a consistent voice that is:

### 1. **Analytical yet Accessible**
- Break down complex ideas without oversimplifying
- Use concrete examples to illustrate abstract concepts
- Assume intelligence, not prior knowledge

**Good:** "The PARA method creates a hierarchical structure that mirrors cognitive processing patterns—Projects demand immediate attention, Areas require ongoing maintenance, Resources store potential energy, and Archives preserve institutional memory."

**Avoid:** "PARA is just folders. Put stuff in the right folder."

### 2. **Practical over Theoretical**
- Ground every concept in actionable implementation
- Provide code examples, workflows, and step-by-step guides
- Answer "how" before "why"

**Good:** "To implement the muse tagging system, add this schema to your `src/content/config.ts` file..."

**Avoid:** "One might theoretically consider the philosophical implications of categorical systems..."

### 3. **Holistic in Perspective**
- Draw connections between disparate domains
- Show how knowledge management relates to creative practice, which relates to systems thinking
- Use cross-references liberally

**Good:** "This GSAP animation technique applies the same principles we discussed in the PARA method—both create flow states through structured progression."

**Avoid:** Isolated, context-free explanations.

### 4. **Respectful of Complexity**
- Acknowledge nuance and edge cases
- Don't pretend simple solutions fix complex problems
- Be honest about trade-offs

**Good:** "While the Nine Muses system provides a rich tagging framework, it requires discipline to maintain consistency. Start with 3-4 muse categories before expanding."

**Avoid:** "This system is perfect and will solve all your organizational problems!"

## Tone Variations by Context

### Technical Documentation
- **Tone:** Precise, clear, methodical
- **Voice:** Instructor guiding a student
- **Example:** "The `getCollection()` function queries Astro's content layer and returns an array of entries matching the specified collection name."

### Conceptual Exploration
- **Tone:** Curious, expansive, connective
- **Voice:** Fellow explorer sharing discoveries
- **Example:** "What's fascinating about the muse system is how it maps onto our natural cognitive rhythms—when you're in a high-energy, deadline-driven state, `#muse/terpsichore` captures that adrenaline-fueled flow."

### Practical Guides
- **Tone:** Direct, actionable, encouraging
- **Voice:** Experienced practitioner sharing hard-won knowledge
- **Example:** "Here's the exact workflow I use: First, I capture everything in the Inbox. Then, during my weekly review, I sort items into their PARA categories. This takes 15 minutes and saves hours of searching later."

### Philosophical Reflections
- **Tone:** Contemplative, grounded, insightful
- **Voice:** Thoughtful colleague over coffee
- **Example:** "The archive isn't just a dumping ground—it's a testament to completed work, a museum of your intellectual journey. There's something deeply satisfying about moving a project from 'active' to 'archived,' like closing a book you've finished reading."

## Writing Conventions

### Terminology
- Use "wiki" not "website" or "blog" (unless specifically referring to the blog section)
- Use "post" or "entry" for individual content pieces
- Use "vault" when referring to the PARA knowledge base
- Use "muse" (lowercase) when referring to the tagging system, "Nine Muses" (capitalized) for the full schema

### Code Examples
- Always include context comments
- Use realistic variable names
- Show the complete snippet, not just fragments

```typescript
// Good: Complete, contextualized example
import { getCollection } from 'astro:content';

// Query all blog posts
const posts = await getCollection('blog');

// Filter by muse tag
const uraniaPosts = posts.filter(
  (post) => post.data.muse === 'urania'
);
```

### Cross-References
- Link to related posts using markdown links
- Use descriptive link text, not "click here"
- Mention the muse tag of referenced posts when relevant

**Good:** "See [Understanding the PARA Method](/blog/001-para-method-semantic-architecture) (#muse/urania) for a deeper dive into the organizational framework."

### Muse Tag Usage
Each post should be tagged with exactly one muse that represents its dominant energy:

| Muse | When to Use |
|------|-------------|
| `euterpe` | Posts about resolution, harmony, creative synthesis |
| `thalia` | Posts about discovery, excitement, new ideas |
| `erato` | Posts about collaboration, receptivity, creative generation |
| `polymnia` | Posts about reflection, rest, structured cycles |
| `melpomene` | Posts about problem-solving, overcoming friction, shadow work |
| `urania` | Posts about system architecture, patterns, foundational logic |
| `clio` | Posts about history, memory, legacy, journaling |
| `calliope` | Posts about deep work, sustained momentum, long-horizon projects |
| `terpsichore` | Posts about rapid execution, flow states, immediate action |
| `void` | Posts in draft, rest, or waiting for activation |

## Quality Checklist

Before publishing, verify:

- [ ] Voice matches the guide's characteristics
- [ ] Technical accuracy is verified
- [ ] Code examples are complete and tested
- [ ] Cross-references are relevant and functional
- [ ] Muse tag accurately represents the post's energy
- [ ] PARA type is correctly assigned
- [ ] Tags are consistent with existing taxonomy
- [ ] Reading time estimate is accurate
- [ ] Description is compelling and accurate
- [ ] Title is clear and searchable
