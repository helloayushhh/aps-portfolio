/* ===================== DATA ===================== */
const projects = [
  {
  tag:"Backend · Security",
  title:"SwiftUPI",
  icon:"₹",
  category:["software"],
  desc:"Offline UPI payment backend that securely routes transactions through a Bluetooth-style mesh network using hybrid encryption and exactly-once settlement.",
  tech:["Java 17","Spring Boot","AES-256-GCM","RSA-OAEP","JUnit 5"],
  problem:"Digital payments fail without internet connectivity, making secure offline transactions unreliable in low or no-network environments.",
  solution:"Built a Spring Boot backend that encrypts, validates, deduplicates, and settles offline UPI transactions relayed through a simulated Bluetooth mesh network.",
  challenges:"Implementing hybrid cryptography, preventing duplicate settlements under concurrent requests, and ensuring secure end-to-end transaction processing.",
  impact:"Built a production-inspired backend demonstrating offline payment routing, distributed systems concepts, and secure transaction processing.",
  github:"https://github.com/helloayushhh/SwiftUPI"
},
  {
  tag:"AI · Full-Stack",
  title:"CulinaryAI",
  icon:"🍳",
  category:["software","product"],
  desc:"AI-powered food intelligence and chef marketplace that transforms available ingredients into personalized recipes and connects users with verified chefs.",
  tech:["React","Firebase","JavaScript","AI Integration"],
  problem:"People often struggle to decide what to cook with available ingredients, while home chefs have limited ways to reach potential customers.",
  solution:"Built a multi-role AI platform where users receive personalized recipe recommendations from ingredient images and can seamlessly book verified chefs.",
  challenges:"Designing a scalable multi-role architecture with AI workflows, secure authentication, and marketplace functionality within a hackathon timeline.",
  impact:"Ranked Top 10 among 500+ teams at a national hackathon while delivering a production-style AI-powered marketplace.",
  github:"https://culinaryai0.netlify.app/"
},

  {
  tag:"Frontend · UI/UX",
  title:"GoGym",
  icon:"💪",
  category:["software"],
  desc:"Responsive fitness website designed to showcase gym services, programs, and membership information.",
  tech:["HTML5","CSS3","JavaScript","Bootstrap"],
  problem:"Many local gyms lack a modern, responsive website to effectively present their services and engage potential members.",
  solution:"Designed and developed a responsive multi-section fitness website with an intuitive layout, interactive components, and mobile-friendly experience.",
  challenges:"Creating a visually engaging, responsive interface while maintaining clean structure and smooth user experience across devices.",
  impact:"Delivered a modern fitness website that demonstrates responsive web development, UI design, and frontend engineering skills.",
  github:"https://github.com/helloayushhh/GoGym-Website"
},
  {
  tag:"Desktop · Management",
  title:"Inventory Management System",
  icon:"📦",
  category:["software","analytics"],
  desc:"Java desktop application for managing inventory, sales, purchases, customers, and suppliers through a centralized management system.",
  tech:["Java","MySQL","JDBC","Java Swing","RBAC"],
  problem:"Small businesses often rely on disconnected spreadsheets, making it difficult to manage inventory, sales, and stock accurately.",
  solution:"Built a Java Swing desktop application with a MySQL backend to centralize inventory operations, sales tracking, supplier management, and role-based access control.",
  challenges:"Designing a relational database and desktop workflow that handled inventory, transactions, and user permissions while keeping the system intuitive.",
  impact:"Built a complete business management system demonstrating object-oriented design, database integration, transaction handling, and role-based user management.",
  github:"https://github.com/helloayushhh/inventory-management-system"
}
{
  tag:"AI · Desktop",
  title:"Mira AI",
  icon:"🎙️",
  category:["software"],
  desc:"AI-powered desktop companion with voice and chat interaction, supporting bilingual conversations through a modern desktop interface.",
  tech:["Python","PyQt5","OpenAI API","Speech Recognition"],
  problem:"Most desktop assistants feel robotic, rely on rigid commands, and lack a natural conversational experience.",
  solution:"Built a Python desktop assistant with voice and chat modes, bilingual support (English & Hindi), and AI-powered conversations through an intuitive PyQt5 interface.",
  challenges:"Integrating speech recognition, text-to-speech, and AI responses while maintaining a responsive desktop experience.",
  impact:"Built a conversational desktop companion that combines voice, chat, and multilingual interaction into a seamless AI experience.",
  github:"https://github.com/helloayushhh/MiraAI"
},
];

/* ===================== LOADER ===================== */
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hide"), 1200);
});

/* ===================== SCROLL PROGRESS + NAV ===================== */
const progress = document.getElementById("scroll-progress");
const navHeader = document.getElementById("nav");
const backTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progress.style.width = pct + "%";
  navHeader.classList.toggle("scrolled", h.scrollTop > 40);
  backTop.classList.toggle("show", h.scrollTop > 500);
}, {passive:true});

/* MOBILE NAV */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* active link on scroll */
const sections = document.querySelectorAll("section[id]");
const linkMap = {};
navLinks.querySelectorAll("a").forEach(a => linkMap[a.getAttribute("href").slice(1)] = a);
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      Object.values(linkMap).forEach(a => a.classList.remove("active"));
      if(linkMap[e.target.id]) linkMap[e.target.id].classList.add("active");
    }
  });
}, {threshold:0.4});
sections.forEach(s => navObserver.observe(s));

/* ===================== CURSOR GLOW ===================== */
const glow = document.getElementById("cursor-glow");
if(matchMedia("(pointer:fine)").matches){
  window.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
} else { glow.style.display = "none"; }

/* ===================== PARTICLES ===================== */
const field = document.getElementById("particleField");
for(let i=0;i<28;i++){
  const p = document.createElement("span");
  p.style.left = Math.random()*100+"%";
  p.style.bottom = "-10px";
  p.style.animationDuration = (8+Math.random()*10)+"s";
  p.style.animationDelay = (Math.random()*10)+"s";
  field.appendChild(p);
}

/* ===================== HERO TYPING ===================== */
const roles = ["Software Engineer", "Product Builder", "Data-Driven Thinker", "Problem Solver"];
const roleEl = document.getElementById("roleType");
let ri=0, ci=0, deleting=false;
function typeRole(){
  const word = roles[ri];
  if(!deleting){
    ci++; roleEl.textContent = word.slice(0,ci);
    if(ci===word.length){ deleting=true; setTimeout(typeRole,1400); return; }
  } else {
    ci--; roleEl.textContent = word.slice(0,ci);
    if(ci===0){ deleting=false; ri=(ri+1)%roles.length; }
  }
  setTimeout(typeRole, deleting?40:80);
}
typeRole();

/* TERMINAL CODE TYPING */
const codeStr =
`<span class="c">// about.js</span>
<span class="k">const</span> <span class="n">engineer</span> = {
  name: <span class="s">"Ayush Pandey"</span>,
  role: <span class="s">"Software Engineer"</span>,
  identity: <span class="s">"Product Builder"</span>,
  focus: [<span class="s">"Software"</span>, <span class="s">"Data"</span>, <span class="s">"Product"</span>],
  stack: [<span class="s">"Python"</span>, <span class="s">"Java"</span>, <span class="s">"Spring Boot"</span>, <span class="s">"React"</span>],
  status: <span class="s">"building products that people love to use"</span>
};

<span class="k">export default</span> <span class="n">engineer</span>;`;

const typedEl = document.getElementById("typed-code");

function typeCode() {
  let i = 0;
  const speed = 8;

  function step() {
    if (i <= codeStr.length) {
      typedEl.innerHTML = codeStr.slice(0, i) + '<span class="blink-cursor"></span>';
      i += 3;
      setTimeout(step, speed);
    } else {
      typedEl.innerHTML = codeStr + '<span class="blink-cursor"></span>';
    }
  }

  step();
}

setTimeout(typeCode, 1300);

/* ===================== DRAGGABLE STATUS CARD ===================== */
(function(){
  const card = document.querySelector('.status-card');
  if(!card) return;

  const defaultPos = { top: '140px', right: '40px', left: 'auto', bottom: 'auto' };

  function applyPos(pos){
    card.style.top = pos.top;
    card.style.left = pos.left;
    card.style.right = pos.right;
    card.style.bottom = pos.bottom;
  }

  function resetPos(){
    applyPos(defaultPos);
    localStorage.removeItem('statusCardPos');
  }

  let offsetX = 0, offsetY = 0, dragging = false;

  function startDrag(x, y){
    dragging = true;
    card.classList.add('dragging');
    const rect = card.getBoundingClientRect();
    offsetX = x - rect.left;
    offsetY = y - rect.top;
  }
  function moveDrag(x, y){
    if(!dragging) return;
    const maxX = window.innerWidth - card.offsetWidth;
    const maxY = window.innerHeight - card.offsetHeight;
    const newX = Math.min(Math.max(0, x - offsetX), maxX);
    const newY = Math.min(Math.max(0, y - offsetY), maxY);
    card.style.left = newX + 'px';
    card.style.top = newY + 'px';
    card.style.right = 'auto';
    card.style.bottom = 'auto';
  }
  function endDrag(){
    if(!dragging) return;
    dragging = false;
    card.classList.remove('dragging');
    localStorage.setItem('statusCardPos', JSON.stringify({
      left: card.style.left, top: card.style.top, right: 'auto', bottom: 'auto'
    }));
  }

  card.addEventListener('mousedown', e => {
    if(e.target.closest('.status-reset') || e.target.closest('.status-link')) return;
    startDrag(e.clientX, e.clientY); e.preventDefault();
  });
  window.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
  window.addEventListener('mouseup', endDrag);

  card.addEventListener('touchstart', e => {
    if(e.target.closest('.status-reset') || e.target.closest('.status-link')) return;
    const t = e.touches[0]; startDrag(t.clientX, t.clientY);
  }, {passive:true});
  window.addEventListener('touchmove', e => {
    const t = e.touches[0]; moveDrag(t.clientX, t.clientY);
  }, {passive:true});
  window.addEventListener('touchend', endDrag);

  card.addEventListener('dblclick', e => {
    if(e.target.closest('.status-link')) return;
    resetPos();
  });
  card.querySelector('.status-reset').addEventListener('click', resetPos);

  const saved = localStorage.getItem('statusCardPos');
  if(saved){ applyPos(JSON.parse(saved)); }
  else { applyPos(defaultPos); }
})();

/* ===================== BACKGROUND MUSIC ===================== */
(function(){
  const audio = document.getElementById('bgMusic');
  const btn = document.getElementById('musicToggle');
  const iconPlay = document.getElementById('musicIconPlay');
  const iconPause = document.getElementById('musicIconPause');
  if(!audio || !btn) return;

  audio.volume = 0.35;

  btn.addEventListener('click', () => {
    if(audio.paused){
      audio.play();
      iconPlay.style.display = 'none';
      iconPause.style.display = 'block';
    } else {
      audio.pause();
      iconPlay.style.display = 'block';
      iconPause.style.display = 'none';
    }
  });
})();

/* ===================== STACK GRID ===================== */
const stackGrid = document.getElementById("stackGrid");
const stack = [
  // Languages
  ["python","Python"],
  ["java","Java"],
  ["javascript","JavaScript"],

  // Backend
  ["springboot","Spring Boot"],
  ["fastapi","API Development"],
  ["mysql","MySQL"],
  ["firebase","Firebase"],

  // Frontend
  ["react","React"],
  ["html5","HTML5"],
  ["css3","CSS3"],
  ["bootstrap","Bootstrap"],

  // AI & Cloud
  ["openai","AI Integration"],
  ["amazonaws","AWS"],

  // Tools
  ["git","Git"],
  ["github/ffffff","GitHub"],
  ["figma","Figma"],
  ["jest","Testing (JUnit)"]
];

const iconOverrides = {
  "java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "css3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "openai": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
  "amazonaws": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
};

stack.forEach(item => {
  const slug = item[0];
  const label = item[item.length-1];
  const iconUrl = iconOverrides[slug] || `https://cdn.simpleicons.org/${slug}`;
  const card = document.createElement("div");
  card.className = "stack-card";
  card.innerHTML = `<img src="${iconUrl}" alt="${label}" loading="lazy"><span>${label}</span>`;
  stackGrid.appendChild(card);
});

/* ===================== PROJECT CAROUSEL ===================== */
const track = document.getElementById("carouselTrack");
const dotsWrap = document.getElementById("carouselDots");
projects.forEach((p, idx) => {
  const card = document.createElement("div");
  card.className = "proj-card";
  card.dataset.index = idx;
  card.innerHTML = `
    <div class="proj-media">${p.icon} &nbsp; ${p.title}</div>
    <div class="proj-body">
      <div class="proj-tag">${p.tag}</div>
      <div class="proj-title">${p.title}</div>
      <div class="proj-desc">${p.desc}</div>
      <div class="proj-tech">${p.tech.map(t=>`<span>${t}</span>`).join("")}</div>
      <div class="proj-links">
        <div class="proj-view">View Case Study <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6V6z"/></svg></div>
        <a href="${p.github}" target="_blank" rel="noopener" class="proj-github" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.2 9.3 7.8 10.8.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.4-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/></svg>
          GitHub
        </a>
      </div>
    </div>`;
  card.addEventListener("click", () => openModal(idx));
  track.appendChild(card);

  const dot = document.createElement("span");
  dot.addEventListener("click", () => scrollToCard(idx));
  dotsWrap.appendChild(dot);
});

const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    cards.forEach((card, idx) => {
      const project = projects[idx];
      const matches = filter === 'all' || project.category.includes(filter);
      card.style.display = matches ? '' : 'none';
    });

    // re-center carousel on first visible card after filtering
    const firstVisible = cards.findIndex((card, idx) =>
      filter === 'all' || projects[idx].category.includes(filter)
    );
    if(firstVisible !== -1){
      scrollToCard(firstVisible);
      requestAnimationFrame(updateActiveCard);
    }
  });
});

const cards = Array.from(track.querySelectorAll(".proj-card"));
const dots = Array.from(dotsWrap.querySelectorAll("span"));

function updateActiveCard(){
  const visibleCards = cards.filter(card => card.style.display !== 'none');
  const center = track.scrollLeft + track.clientWidth/2;
  let closest = null, closestDist = Infinity;
  visibleCards.forEach((card) => {
    const cardCenter = card.offsetLeft + card.offsetWidth/2;
    const dist = Math.abs(center - cardCenter);
    if(dist < closestDist){ closestDist = dist; closest = card; }
  });
  cards.forEach((card) => {
    if(card.style.display === 'none'){ card.classList.remove('active'); return; }
    card.classList.toggle("active", card === closest || visibleCards.length === 1);
  });
}
track.addEventListener("scroll", () => window.requestAnimationFrame(updateActiveCard), {passive:true});
window.addEventListener("resize", updateActiveCard);

function scrollToCard(idx){
  const card = cards[idx];
  track.scrollTo({left: card.offsetLeft - (track.clientWidth - card.offsetWidth)/2, behavior:"smooth"});
}
document.getElementById("prevBtn").addEventListener("click", () => {
  const current = cards.findIndex(c => c.classList.contains("active"));
  scrollToCard(Math.max(0, current-1));
});
document.getElementById("nextBtn").addEventListener("click", () => {
  const current = cards.findIndex(c => c.classList.contains("active"));
  scrollToCard(Math.min(cards.length-1, current+1));
});
setTimeout(() => { scrollToCard(0); updateActiveCard(); }, 300);

/* MODAL */
const overlay = document.getElementById("modalOverlay");
const modalBox = document.getElementById("modalBox");
function openModal(idx){
  const p = projects[idx];
  modalBox.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag">${p.tag}</span>
    <h3>${p.title}</h3>
    <div class="modal-section"><h5>Problem</h5><p>${p.problem}</p></div>
    <div class="modal-section"><h5>Solution</h5><p>${p.solution}</p></div>
    <div class="modal-section"><h5>Challenges</h5><p>${p.challenges}</p></div>
    <div class="modal-section"><h5>Impact</h5><p>${p.impact}</p></div>
    <div class="modal-section"><h5>Tech Stack</h5><div class="proj-tech">${p.tech.map(t=>`<span>${t}</span>`).join("")}</div></div>
    <div class="modal-links">
      <a href="${p.github}" target="_blank" rel="noopener" class="btn-ghost">View on GitHub</a>
    </div>`;
  overlay.classList.add("open");
}
function closeModal(){ overlay.classList.remove("open"); }
overlay.addEventListener("click", e => { if(e.target === overlay) closeModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });


/* ===================== CERTS ===================== */
const certifications = [
  {
    name:"AI & Cybersecurity Awareness",
    issuer:"TCS iON",
    category:["ai"],
    logo:"https://cdn.simpleicons.org/tcs/ffffff",
    link:"assets/certificates/AI & Cyber__tcs iON.pdf"
  },
  {
  name:"AWS Gen AI Foundations",
  issuer:"AWS Academy",
  category:["ai"],
  logo:"☁️",
  link:"assets/certificates/AWS Gen AI Foundations__AWS Academy.pdf"
},
  {
    name:"Google Analytics Certification",
    issuer:"Google",
    category:["data"],
    logo:"https://cdn.simpleicons.org/googleanalytics/ffffff",
    link:"assets/certificates/Google Analytics Certification__Skillshop.pdf"
  },
  {
    name:"Gemini Certified Student",
    issuer:"Google for Education",
    category:["ai"],
    logo:"https://cdn.simpleicons.org/googlegemini/ffffff",
    link:"assets/certificates/Gemini Certified Student Certificate.pdf"
  },
  {
    name:"CodeSlayer Hackathon",
    issuer:"NIT Delhi",
    category:["development"],
    logo:"⏳",
    link:"assets/certificates/Hackathon - NIT Delhi CodeSlayer Certificate.pdf"
  },
  {
    name:"AI Micro-Certification",
    issuer:"Product School",
    category:["product","ai"],
    logo:"🎯",
    link:"assets/certificates/AI Micro-Certification__Product School.pdf"
  },
  {
  name:"Cloud Foundations",
  issuer:"AWS Academy",
  category:["development"],
  logo:"☁️",
  link:"assets/certificates/Cloud Foundations certificate__AWS Academy.pdf"
},
  {
    name:"Product Experimentation Micro-Certification",
    issuer:"Product School",
    category:["product"],
    logo:"🎯",
    link:"assets/certificates/PEC Certificate__Product School.pdf"
  },
  {
  name:"Career Transformation Program",
  issuer:"IBM SkillsBuild",
  category:["development"],
  logo:"💼",
  link:"assets/certificates/Completion Certificate_SkillsBuild.pdf"
},
  {
    name:"Digital Applications Fundamentals",
    issuer:"FutureSkills Prime & NASSCOM",
    category:["data"],
    logo:"💻",
    link:"assets/certificates/DAF certificate.pdf"
  },
  {
    name:"HackDays Hackathon",
    issuer:"HackBase",
    category:["development"],
    logo:"⏳",
    link:"assets/certificates/Hackathon - HackDays Participation Ceritificate.pdf"
  },
  {
    name:"Trinity TechJam Hackathon",
    issuer:"Trinity College",
    category:["development"],
    logo:"⏳",
    link:"assets/certificates/Hackathon - Trinity TechJam Certificate.pdf"
  }
];

const certGrid = document.getElementById("certGrid");

// Build all cards once, upfront
certifications.forEach(c => {
  const card = document.createElement("div");
  card.className = "cert-card glass";
  card.dataset.category = c.category.join(",");
  const isImg = c.logo.startsWith("http");
  card.innerHTML = `
    <div class="cert-logo">${isImg ? `<img src="${c.logo}" alt="${c.issuer}">` : c.logo}</div>
    <div class="cert-name">${c.name}</div>
    <div class="cert-issuer">${c.issuer}</div>
    <a href="${c.link}" target="_blank" class="cert-link">View ↗</a>
  `;
  certGrid.appendChild(card);
});

const certCards = Array.from(certGrid.children);
// Lock the grid's height to its tallest state so filtering never shifts the page
requestAnimationFrame(() => {
  certGrid.style.minHeight = certGrid.offsetHeight + "px";
});

function filterCerts(filter){
  certCards.forEach((card, idx) => {
    const matches = filter === "all" || certifications[idx].category.includes(filter);
    card.style.display = matches ? "" : "none";
  });
}

document.querySelectorAll('#certFilters .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#certFilters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterCerts(btn.dataset.filter);
  });
});

/* ===================== REVEAL ON SCROLL ===================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("in"); });
}, {threshold:0.15});
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ===================== CONTACT FORM (EmailJS) ===================== */
emailjs.init("AqWbq4G_LJaWZ2gjD");

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const btn = document.getElementById("sendBtn");
  const originalText = btn.textContent;
  btn.textContent = "Sending...";
  btn.disabled = true;

  emailjs.sendForm("service_vbdsjdm", "template_x2qvkj8", this)
    .then(() => {
      btn.textContent = "Message sent ✓";
      this.reset();
      setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      btn.textContent = "Something went wrong";
      setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
    });
});
