(function(){
  const btn = document.querySelector('.nav-toggle');
  const list = document.getElementById('nav-list');
  if(btn && list){
    btn.addEventListener('click', () => {
      const isOpen = list.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
})();
