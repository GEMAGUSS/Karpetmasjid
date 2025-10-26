    // Hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    function openMenu(){
      mobileMenu.style.display = 'block';
      mobileMenu.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu(){
      mobileMenu.style.display = 'none';
      mobileMenu.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', ()=>{
      const open = mobileMenu.style.display === 'block';
      if(open) closeMenu(); else openMenu();
    });

    // close when tapping outside on mobile
    mobileMenu.addEventListener('click', (e)=>{
      if(e.target === mobileMenu) closeMenu();
    });

    // keyboard accessibility
    hamburger.addEventListener('keydown',(e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        hamburger.click();
      }
    });

    // simple entrance animation
    document.addEventListener('DOMContentLoaded', ()=>{
      document.querySelectorAll('.card').forEach((c,i)=>{
        c.style.opacity = 0; c.style.transform = 'translateY(14px)';
        setTimeout(()=>{ c.style.transition = 'all 420ms cubic-bezier(.2,.9,.2,1)'; c.style.opacity=1; c.style.transform='translateY(0)'; }, 120*i);
      });
    });