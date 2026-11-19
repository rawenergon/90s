class SocialLinks extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="social">
        <h3>Social</h3>
        <p>Follow Me on Social Media</p>
        <div class="social-links">
          <a href="https://github.com/rawenergon" target="_blank" rel="noopener noreferrer">Git</a>
          <a href="https://x.com/adibxr" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://instagram.com/recolabshq" target="_blank" rel="noopener noreferrer">Ig</a>
          <a href="mailto:devadibxr@gmail.com">Mail</a>
        </div>
      </div>
    `;
  }
}

customElements.define('social-links', SocialLinks);
