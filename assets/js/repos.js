<script>
(async function () {
  const el = document.getElementById('repo-app');
  if (!el) return;
  const user = el.dataset.user || 'Amir-Ivry';

  // Basic template
  const card = (r) => `
    <article class="card">
      <div class="card-head">
        <a class="card-title" href="${r.html_url}" target="_blank" rel="noopener">${r.name}</a>
      </div>
      ${r.description ? `<p class="card-desc">${r.description}</p>` : ''}
      <div class="card-meta">
        ${r.language ? `<span class="lang">${r.language}</span>` : ''}
        <span class="star">★ ${r.stargazers_count}</span>
        <span class="updated">Updated ${new Date(r.pushed_at).toLocaleDateString()}</span>
      </div>
      <div class="card-links">
        <a href="${r.html_url}" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub">
          <svg viewBox="0 0 24 24"><path d="M12 .5A11.5 11.5 0 0 0 8.3 22.9c.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.2 1.2a11.2 11.2 0 0 1 5.9 0c2.2-1.5 3.2-1.2 3.2-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z"/></svg>
        </a>
        ${r.homepage ? `
          <a href="${r.homepage}" target="_blank" rel="noopener" title="Project page" aria-label="Project page">
            <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm0 1.5c1.7 0 3.2.5 4.5 1.4-2.4.6-4.3 2.9-5 6.1H6.2A8.5 8.5 0 0 1 12 3.5Zm-8.3 7.5h4.4c-.1.5-.1 1-.1 1.5s0 1 .1 1.5H3.7A8.4 8.4 0 0 1 3.5 12c0-.3 0-.7.2-1Zm1.5 5.9h5.3c.7 3.1 2.6 5.4 5 6a8.5 8.5 0 0 1-10.3-6Zm6.8 0h5.3A7.8 7.8 0 0 1 12 21.5c-1.4-.3-2.7-2-3.3-4.6ZM20.3 9h-5.3c-.6-2.6-1.9-4.3-3.3-4.6A7.8 7.8 0 0 1 20.3 9ZM15 12c0 .5 0 1-.1 1.5H9.1A7.7 7.7 0 0 1 9 12c0-.5 0-1 .1-1.5h5.8ZM14.2 18h5.1A8.5 8.5 0 0 1 18 20.6c-1.7-.3-3.1-1.3-3.8-2.6Z"/></svg>
          </a>` : ''}
      </div>
    </article>
  `;

  try {
    const resp = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`);
    const repos = await resp.json();
    if (!Array.isArray(repos)) throw new Error('Bad response');
    // Filter out forks, sort by stargazers desc
    const data = repos.filter(r => !r.fork).sort((a,b)=>b.stargazers_count-a.stargazers_count);
    el.innerHTML = data.map(card).join('') || '<p>No public repositories found.</p>';
  } catch (e) {
    // Fallback: render _data/code.yml entries (server-rendered noscript already above)
    el.innerHTML = '<p><em>Couldn’t load GitHub API. Showing manual entries below.</em></p>';
  }
})();
</script>
