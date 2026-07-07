import './style.css';

// Certificate data store
const certificateData = {
  deloitte: {
    title: "Data Analytics Job Simulation",
    org: "Deloitte (via Forage)",
    date: "June 23, 2026",
    code: "vkFKED5tKS8YDGyYg",
    userCode: "6a3ab3dc05af6522ac4cd64a",
    issuer: "Tina McCreery (Chief Human Resources Officer, Deloitte)",
    logo: "Deloitte.",
    logoColor: "#86efac",
    logoText: "#000000",
    themeColor: "#10b981",
    file: "/documents/Delotile data anlyst_completion_certificate.pdf",
    details: [
      "Conducted data analysis and forensic technology simulations mimicking real-world advisory projects.",
      "Performed data extraction, validation, and analytical calculations to investigate data integrity anomalies.",
      "Practiced forensic investigation techniques using tech tools to trace and identify transactional issues.",
      "Summarized findings into strategic suggestions for client stakeholders."
    ]
  },
  knowledgegate: {
    title: "NodeJS + ExpressJs + MongoDB",
    org: "KnowledgeGate",
    date: "June 5, 2026",
    code: "CERT-1780655055602-B0201EEC",
    score: "98%",
    issuer: "Sanchit Jain (Founder and CEO, KnowledgeGate)",
    logo: "KG | KNOWLEDGE GATE",
    logoColor: "#f97316",
    logoText: "#ffffff",
    themeColor: "#f97316",
    file: "/documents/NodeJs + ExpressJs + MongoDB.pdf",
    details: [
      "Mastered backend web development technologies including Node.js runtime environment.",
      "Designed and built RESTful web APIs using Express.js middleware.",
      "Managed databases using MongoDB and designed structured schemas using Mongoose ORM.",
      "Achieved a top completion score of 98% in final examinations and lab projects."
    ]
  },
  tata: {
    title: "GenAI Powered Data Analytics",
    org: "TATA (via Forage)",
    date: "June 23, 2026",
    code: "yXsjeXhttvtbRu9HX",
    userCode: "6a3ab3dc05af6522ac4cd64a",
    issuer: "Tom Brunskill (Co-Founder of Forage)",
    logo: "TATA | Forage",
    logoColor: "#1d4ed8",
    logoText: "#ffffff",
    themeColor: "#3b82f6",
    file: "/documents/Tata job internship.pdf",
    details: [
      "Conducted exploratory data analysis (EDA) and built risk profiles for customer delinquency portfolios.",
      "Created predictive classification models utilizing AI algorithms to forecast payment delinquency.",
      "Prepared data storytelling elements and business reports for collections strategies.",
      "Implemented a simulated GenAI-driven strategy mapping to customer recovery systems."
    ]
  },
  inamigos: {
    title: "Content Writing Internship",
    org: "InAmigos Foundation",
    date: "April 10, 2026",
    code: "CSR - 1 Registered - CSR00083159",
    issuer: "Shiwani (HR Operations Lead, InAmigos)",
    logo: "InAmigos Foundation",
    logoColor: "#8b5cf6",
    logoText: "#ffffff",
    themeColor: "#8b5cf6",
    file: "/documents/completion certificate.jpg",
    details: [
      "Completed a content writing and copywriting internship from March 24, 2026, to April 7, 2026.",
      "Drafted high-quality web articles, SEO-focused copy, and social media announcements.",
      "Conducted thorough keyword research and content optimization reviews.",
      "Worked collaboratively with the digital branding and content strategy teams."
    ]
  },
  internshala: {
    title: "Internship Selection Certificate",
    org: "Internshala",
    date: "March 19, 2026",
    code: "8uybu38c7v_",
    issuer: "Sarvesh Agrawal (Founder & CEO, Internshala)",
    logo: "INTERNSHALA",
    logoColor: "#0ea5e9",
    logoText: "#ffffff",
    themeColor: "#0ea5e9",
    file: "/documents/certificate of selection.jpg",
    details: [
      "Formally selected from Galgotias College Of Engineering And Technology for a Copywriting Internship.",
      "Vetted through competitive application tests matching copywriting requirements.",
      "Demonstrated writing agility, vocabulary strength, and deadline adherence."
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');
  const progress = document.getElementById('scrollProgress');

  // Page Loader Setup
  const pageLoader = document.createElement('div');
  pageLoader.className = 'page-loader';
  pageLoader.innerHTML = `<div class="loader-spinner"></div>`;
  document.body.appendChild(pageLoader);
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      pageLoader.classList.add('fade-out');
      setTimeout(() => pageLoader.remove(), 500);
    }, 300);
  });

  // Mobile Menu Toggling
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
      const isActive = nav.classList.contains('active');
      menuBtn.innerHTML = isActive ? '&#x2715;' : '&#x2630;';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuBtn.innerHTML = '&#x2630;';
      });
    });
  }

  // 1. Theme Switcher (Light / Dark / System)
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    const savedTheme = localStorage.getItem('theme') || 'system';
    themeSelect.value = savedTheme;
    applyTheme(savedTheme);

    themeSelect.addEventListener('change', (e) => {
      const theme = e.target.value;
      localStorage.setItem('theme', theme);
      applyTheme(theme);
    });
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      // System preference
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', isSystemDark ? 'dark' : 'light');
    }
  }

  // Listen for system theme changes dynamically if 'system' theme is selected
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (themeSelect && themeSelect.value === 'system') {
      applyTheme('system');
    }
  });

  // 2. Custom Cursor Glow
  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  document.body.appendChild(cursorGlow);

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.opacity = '1';
  });

  window.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });

  function updateCursor() {
    // Smooth trailing animation (lerp)
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    cursorGlow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(updateCursor);
  }
  updateCursor();

  // 3. Typing Effect
  const typingSpan = document.getElementById('typing-text');
  if (typingSpan) {
    const roles = ["Full Stack MERN Developer", "AI & ML Enthusiast", "Open Source Learner"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeDelay = 100;

    function type() {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typingSpan.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeDelay = 40; // delete faster
      } else {
        typingSpan.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeDelay = 120; // type slower
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeDelay = 2000; // pause at full word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeDelay = 500; // pause before next word
      }

      setTimeout(type, typeDelay);
    }
    setTimeout(type, 1000);
  }

  // 4. Parallax Scroll Effect & Progress Tracker
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    document.documentElement.style.setProperty('--scroll-y', `${scrollTop}px`);
    
    if (progress && docHeight > 0) {
      const pct = (scrollTop / docHeight) * 100;
      progress.style.width = `${pct}%`;
    }
    
    if (header) {
      if (scrollTop > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollTop >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 5. Scroll Reveal Animation (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        if (entry.target.id === 'skills' || entry.target.querySelector('.skill-bar-fill')) {
          animateSkillBars(entry.target);
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));

  function animateSkillBars(container) {
    const bars = container.querySelectorAll('.skill-bar-fill');
    bars.forEach(bar => {
      const val = bar.getAttribute('data-value');
      bar.style.width = `${val}%`;
    });
  }

  // 6. Interactive Certificate Modal Viewer
  const modal = document.getElementById('certModal');
  const modalContainer = modal ? modal.querySelector('.modal-container') : null;
  const viewCertBtns = document.querySelectorAll('.btn-view-cert');
  const closeModalBtn = document.querySelector('.btn-close-modal');

  if (modal && viewCertBtns.length > 0) {
    viewCertBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const certKey = btn.getAttribute('data-cert');
        const data = certificateData[certKey];
        if (data) {
          populateModal(data);
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    };

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  function populateModal(data) {
    const modalTitle = modal.querySelector('.modal-title');
    const certViewContainer = modal.querySelector('.cert-view-container');
    const certMetaList = modal.querySelector('.cert-meta-info ul');
    const certMetaTitle = modal.querySelector('.cert-meta-info h4');
    
    modalTitle.textContent = `${data.title} - Certificate`;
    
    let certHTML = '';
    const isPDF = data.file.toLowerCase().endsWith('.pdf');
    
    if (isPDF) {
      certHTML = `
        <div style="width: 100%; display: flex; flex-direction: column; gap: 1rem;">
          <iframe src="${data.file}#toolbar=0&navpanes=0&view=Fit" style="width:100%; height:65vh; border:none; border-radius: 8px;"></iframe>
          <div style="display: flex; justify-content: center; gap: 1rem;">
            <a href="${data.file}" target="_blank" class="btn btn-secondary" style="font-size:0.85rem; padding:0.4rem 1.2rem; border-radius: 6px;">Open in New Tab ↗</a>
            <a href="${data.file}" download class="btn btn-primary" style="font-size:0.85rem; padding:0.4rem 1.2rem; border-radius: 6px; color: white; text-shadow: none;">Download PDF ↓</a>
          </div>
        </div>
      `;
    } else {
      certHTML = `
        <div style="width: 100%; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
          <img src="${data.file}" alt="${data.title}" style="max-width: 100%; max-height: 68vh; width: auto; height: auto; display: block; border-radius: 8px; border: 1px solid var(--border-glass); margin: 0 auto;" />
          <div style="display: flex; justify-content: center; gap: 1rem;">
            <a href="${data.file}" target="_blank" class="btn btn-secondary" style="font-size:0.85rem; padding:0.4rem 1.2rem; border-radius: 6px;">Open in New Tab ↗</a>
            <a href="${data.file}" download class="btn btn-primary" style="font-size:0.85rem; padding:0.4rem 1.2rem; border-radius: 6px; color: white; text-shadow: none;">Download Image ↓</a>
          </div>
        </div>
      `;
    }
    
    certViewContainer.innerHTML = certHTML;
    
    certMetaTitle.textContent = `Acquired Competencies & Tasks:`;
    certMetaList.innerHTML = data.details.map(detail => `<li>${detail}</li>`).join('');
  }

  // 7. Contact Form Handler (Web3Forms)
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending Message...';
      
      // Reset status display
      formStatus.style.display = 'none';
      formStatus.className = 'form-status';
      formStatus.textContent = '';
      
      const formData = new FormData(contactForm);
      
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      .then(async (response) => {
        const json = await response.json();
        if (response.status === 200) {
          formStatus.className = 'form-status success';
          formStatus.style.display = 'block';
          formStatus.textContent = 'Thank you, Sudheer will get back to you shortly!';
          contactForm.reset();
        } else {
          console.error(json);
          formStatus.className = 'form-status error';
          formStatus.style.display = 'block';
          formStatus.textContent = json.message || 'Something went wrong. Please try again.';
        }
      })
      .catch((error) => {
        console.error(error);
        formStatus.className = 'form-status error';
        formStatus.style.display = 'block';
        formStatus.textContent = 'Something went wrong. Please try again.';
      })
      .then(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        
        setTimeout(() => {
          formStatus.style.display = 'none';
        }, 6000);
      });
    });
  }
});
