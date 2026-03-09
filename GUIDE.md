# sayeesaran.com - Complete Usage Guide

## Your setup at a glance

| What | Where |
|------|-------|
| Project folder | `E:\Personal Website\sayeesaran-site` |
| Obsidian vault | `E:\Personal Website\sayeesaran-site\content` |
| Your notes | `content/` folder (subfolders: `posts/`, `books/`, `notes/`, `bookmarks/`) |
| Site config | `quartz.config.ts` |
| Layout config | `quartz.layout.ts` |
| Nav links | `quartz/components/SiteNav.tsx` |
| Custom styles | `quartz/styles/custom.scss` |
| Favicon | `quartz/static/icon.png` |
| Live site | https://sayeesaran.com |
| GitHub repo | https://github.com/SayeeSaran/sayeesaran-site |
| Netlify dashboard | https://app.netlify.com |

---

## Writing a new note

### 1. Create the file

Open Obsidian (your vault is the `content` folder). Create a new note in the right subfolder:

- `content/posts/` - Long-form essays, articles
- `content/books/` - Book and article reviews
- `content/notes/` - Short thoughts, ideas
- `content/bookmarks/` - Links and reading list

**Important:** The file name becomes the page title AND the URL. So name your file what you want it called.

Example: Create `content/posts/Carbon credits explained.md`
- Title on site: "Carbon credits explained"
- URL: `sayeesaran.com/posts/Carbon-credits-explained`

### 2. Add frontmatter

Every note MUST start with this block at the very top:

```yaml
---
title: "Carbon credits explained"
date: 2026-03-09
description: "A beginner's guide to carbon credits"
tags: [carbon-markets, climate]
draft: false
---
```

**What each field does:**

| Field | Required? | What it does |
|-------|-----------|-------------|
| `title` | Yes | Page title (should match file name) |
| `date` | Yes | Used for sorting. Format: YYYY-MM-DD |
| `description` | No | Shows in previews and SEO |
| `tags` | No | Creates tag pages. Use lowercase, hyphens for spaces |
| `draft` | Yes | `false` = published, `true` = hidden from site |

### 3. Write your content

Below the frontmatter, write in normal Markdown. Here's a quick reference:

```markdown
## This is a heading

Normal paragraph text. **Bold text**. *Italic text*.

- Bullet point
- Another point

1. Numbered list
2. Second item

> This is a blockquote

`inline code`

[Link text](https://example.com)
```

### 4. Preview locally (optional)

Open VS Code, then open the terminal (`Ctrl + backtick`):

```
cd "E:\Personal Website\sayeesaran-site"
node quartz/bootstrap-cli.mjs build --serve
```

Visit `http://localhost:8080` in your browser. It auto-refreshes when you save files.

Press `Ctrl + C` in the terminal to stop the server when done.

### 5. Publish

Open VS Code terminal (or PowerShell) in the `sayeesaran-site` folder:

```
cd "E:\Personal Website\sayeesaran-site"
git add .
git commit -m "new post: carbon credits explained"
git push
```

Netlify auto-deploys in ~1-2 minutes. That's it.

---

## Linking between notes

This is the digital garden magic. Use Obsidian's `[[wikilink]]` syntax:

```markdown
As I mentioned in [[Why I built this site]], this is a digital garden.

Check out my [[Carbon credits explained]] post for more.
```

- Links work across folders automatically (Quartz uses "shortest path" resolution)
- Backlinks appear at the bottom of each note automatically
- The Graph View shows how your notes connect

---

## Adding images

### 1. Create an images folder

Create a folder: `content/images/` (or any name you like)

### 2. Drop your image in

Copy/paste any image (PNG, JPG, GIF, SVG) into that folder.

### 3. Reference it in your note

**Obsidian way (recommended):**
```markdown
![[my-photo.png]]
```

**Standard Markdown way:**
```markdown
![Alt text](images/my-photo.png)
```

**Tips:**
- Keep image file names lowercase with hyphens: `carbon-cycle-diagram.png`
- Avoid spaces in image file names
- Large images are auto-sized to fit the content width

---

## Adding PDF or other files

Put them in `content/` (any subfolder) and link to them:

```markdown
Download my [research paper](files/my-paper.pdf)
```

Create `content/files/` for organizing documents.

---

## Tags

Add tags in frontmatter:

```yaml
tags: [carbon-markets, cdr, sustainability]
```

- Quartz auto-generates tag pages at `sayeesaran.com/tags/carbon-markets`
- Tags appear on each note
- Use lowercase and hyphens

---

## Draft mode

To hide a note from your live site but keep it in Obsidian:

```yaml
draft: true
```

Change to `false` when ready to publish. Draft notes won't appear in the build.

---

## Folder index pages

Each folder can have an `index.md` that acts as the landing page for that section.

You already have:
- `content/posts/index.md` - Writing page
- `content/books/index.md` - Reviews page
- `content/bookmarks/index.md` - Bookmarks page

When someone visits `sayeesaran.com/posts/`, they see the `posts/index.md` content plus a list of all notes in that folder.

---

## Updating existing pages

Just edit the file in Obsidian, save, then push:

```
cd "E:\Personal Website\sayeesaran-site"
git add .
git commit -m "updated now page"
git push
```

---

## Common tasks cheat sheet

### Write a new post
1. Create file in `content/posts/My new post.md`
2. Add frontmatter with `draft: false`
3. Write content
4. `git add . && git commit -m "new post" && git push`

### Save a draft (not published)
1. Create the file anywhere in `content/`
2. Set `draft: true` in frontmatter
3. Push normally - it won't appear on the site

### Publish a draft
1. Change `draft: true` to `draft: false`
2. Push

### Add a book review
1. Create `content/books/Atomic Habits.md`
2. Add frontmatter with tags like `[books, habits, non-fiction]`
3. Push

### Update your Now page
1. Edit `content/now.md` in Obsidian
2. Update the "Last updated" date at the top
3. Push

### Change the nav links
1. Edit `quartz/components/SiteNav.tsx` in VS Code
2. Add/remove/rename links in the `links` array
3. Push

### Change colors or fonts
1. Edit `quartz.config.ts` in VS Code
2. Modify the `colors` section (lightMode/darkMode)
3. Push

### Change favicon
1. Replace `quartz/static/icon.png` with your new image (must be PNG)
2. Push

---

## Markdown features that work

Quartz supports all standard Markdown plus Obsidian extras:

### Callouts
```markdown
> [!info] Title
> This is an info callout

> [!warning] Be careful
> This is a warning

> [!tip] Pro tip
> This is a tip
```

### Tables
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data     | Data     |
```

### Task lists
```markdown
- [x] Completed task
- [ ] Pending task
```

### Footnotes
```markdown
This has a footnote[^1].

[^1]: This is the footnote text.
```

### Horizontal rule
```markdown
---
```

### Math (LaTeX)
```markdown
Inline math: $E = mc^2$

Block math:
$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + ... + x_n
$$
```

### Code blocks with syntax highlighting
````markdown
```python
def hello():
    print("Hello world")
```
````

---

## Folder structure reference

```
sayeesaran-site/
  content/                  <-- YOUR OBSIDIAN VAULT
    index.md                <-- Homepage
    about.md                <-- About page
    now.md                  <-- Now page
    contact.md              <-- Contact page
    posts/                  <-- Long-form writing
      index.md              <-- Writing landing page
      Why I built this site.md
      [your future posts].md
    books/                  <-- Reviews
      index.md              <-- Reviews landing page
      [your book reviews].md
    notes/                  <-- Short notes
      [your notes].md
    bookmarks/              <-- Reading list
      index.md              <-- Bookmarks landing page
    images/                 <-- Images (create this when needed)
  quartz/                   <-- SITE CODE (rarely touch this)
    components/SiteNav.tsx  <-- Nav links
    styles/custom.scss      <-- Custom styles
    static/icon.png         <-- Favicon
  quartz.config.ts          <-- Site configuration
  quartz.layout.ts          <-- Layout configuration
  netlify.toml              <-- Deployment config
```

---

## Troubleshooting

### "Not a git repository" error
You're in the wrong folder. Run:
```
cd "E:\Personal Website\sayeesaran-site"
```

### Build fails locally
Run this to see the error:
```
node quartz/bootstrap-cli.mjs build
```
Common causes: missing frontmatter, broken image links, missing `icon.png`

### Changes not showing on live site
1. Check Netlify deploys tab - is the build "Published" or "Failed"?
2. Hard refresh your browser: `Ctrl + Shift + R`
3. Make sure you ran `git push` (not just `git commit`)

### 404 on a page
- Make sure the file has `draft: false` in frontmatter
- Make sure the file is inside `content/`
- Check the file was committed: `git status`

### Obsidian not showing files
- Make sure vault is opened at: `E:\Personal Website\sayeesaran-site\content`
- Restart Obsidian

---

## Git commands quick reference

Always run these from `E:\Personal Website\sayeesaran-site`:

| What you want to do | Command |
|---------------------|---------|
| See what changed | `git status` |
| Stage all changes | `git add .` |
| Commit changes | `git commit -m "your message here"` |
| Push to live site | `git push` |
| Do it all at once | `git add . && git commit -m "message" && git push` |
| Preview locally | `node quartz/bootstrap-cli.mjs build --serve` |

---

## Things to remember

1. **Always add frontmatter** to every .md file - without it, the page won't build correctly
2. **File name = title** - name your files what you want them called
3. **`draft: false`** to publish, **`draft: true`** to hide
4. **Push to publish** - nothing goes live until you `git push`
5. **Images need no spaces** in file names - use hyphens instead
6. **The `.obsidian` folder** is automatically ignored by Quartz - your Obsidian settings won't affect the site
7. **Don't edit files in `quartz/`** unless you're changing the site design
8. **Commit messages** - write something short describing what you changed, e.g., "new post: carbon credits" or "updated about page"
