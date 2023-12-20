function theme() {
    const checkbox = document.querySelector('.switch input[type="checkbox"]');
    const el = document.documentElement;
 
    el.style.transition = 'background-color 0.5s ease, color 0.5s ease';
  
    
 
    checkbox.addEventListener('change', () => {
      if (el.hasAttribute('data-theme')) {
        el.removeAttribute('data-theme');
        localStorage.removeItem('theme');
      } else {
        el.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });

    function setThemeFromMediaQuery() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        el.setAttribute('data-theme', 'dark');
        checkbox.checked = true;
      }
    }
  
      
    function updateThemeByTime() {
      const currentHour = new Date().getHours();
      if (currentHour >= 18 || currentHour < 6) {
        el.setAttribute('data-theme', 'dark');
        checkbox.checked = true;
      } else {
        el.removeAttribute('data-theme');
        checkbox.checked = false;
      }
    }
  
      
      
    if (localStorage.getItem('theme') !== null) {
      el.setAttribute('data-theme', 'dark');
      checkbox.checked = true;
    } else {
      setThemeFromMediaQuery();
      updateThemeByTime();
    }
  
    el.style.transition = 'background-color 0.3s, color 0.3s';
  }
  
  theme();