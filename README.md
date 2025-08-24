# Personal Site Template (GitHub Pages, Jekyll)

This is a minimal, light, and accessible personal site for `USERNAME.github.io`.

## Quick start
1. **Download the ZIP** from the ChatGPT message and extract it.
2. Create a new repo named **`USERNAME.github.io`** (replace with your GitHub username).
3. Upload all files to that repo (or push via git).
4. In `_config.yml`, replace `USERNAME`, your **name**, **title**, **email**, and links.
5. Replace `assets/img/profile.jpg` with your own photo (same filename recommended).
6. Drop your CV at `assets/pdf/cv.pdf` (or edit `cv.md` to link elsewhere).
7. Edit `_data/publications.yml`, `_data/news.yml`, and `_data/code.yml`.
8. Add or edit blog posts in `_posts/` (Markdown). The blog index is at `/blog/`.
9. The site auto-builds at **https://USERNAME.github.io** within a minute.

### Local preview (optional)
If you want to preview locally:
```bash
bundle install
bundle exec jekyll serve --livereload
```
Then open http://127.0.0.1:4000 in your browser.

## Customize colors & spacing
Edit `assets/css/styles.css` – variables at the top control palette, fonts, and spacing.
