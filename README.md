# Academic Site (GitHub Pages + Jekyll)

This is a clean, one-repo personal site suitable for an academic CV and research portfolio.

## Quick start

1. Create a repository named `your-username.github.io` on GitHub.
2. Download this folder as a zip, unzip it, and push the contents to that repo.
3. In `_config.yml`, set:
   - `title:` to your full name
   - `email:`, `github_username:`, and your links (Scholar, ORCID, LinkedIn, X)
   - `url:` to `https://your-username.github.io` (or your custom domain)
4. Replace `assets/img/profile.svg` with a headshot (e.g., `profile.jpg`), and update the `<img>` path in `index.md` if you change the filename.
5. Replace `assets/cv/YourName_CV.pdf` with your real CV.
6. Edit `index.md` to personalize your short bio.
7. Update `_data/publications.yml` with your publications.
8. Add news posts under `_posts/news/` and blog posts under `_posts/blog/`.
9. Push to `main`. GitHub Pages will build automatically.

## Project pages?

If you are using a project repo (not `your-username.github.io`), set `baseurl: "/project-name"` in `_config.yml` and access the site at `https://your-username.github.io/project-name`.

## Structure

- `index.md` — home, with hero, about, selected publications, and recent news
- `_data/publications.yml` — all publications (home shows `selected: true`)
- `_posts/news/` — news items
- `_posts/blog/` — blog posts
- `publications.md` — full publications list
- `news.md`, `blog.md`, `cv.md` — tabs linked in the top nav
- `assets/` — CSS, images, CV

## Plugins

Uses the built-in GitHub Pages plugins: `jekyll-feed`, `jekyll-seo-tag`, and `jekyll-sitemap`.

---

MIT license. Customize freely.