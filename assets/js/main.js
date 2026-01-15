let showAll = false; // Status apakah sedang menampilkan semua atau tidak

function renderProjects() {
    const container = document.getElementById('projects-data-container');
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    if (!container || typeof myProjects === 'undefined') return;

    // Tentukan limit berdasarkan lebar layar
    // Desktop (> 1024px) = 6, Tablet/HP = 4
    const limit = window.innerWidth > 1024 ? 6 : 4;
    
    // Potong data berdasarkan status showAll
    const projectsToDisplay = showAll ? myProjects : myProjects.slice(0, limit);

    container.innerHTML = projectsToDisplay.map(project => `
        <div class="services__card">
            <div class="services__img-container">
                <img src="${project.img}" alt="${project.title}" class="services__img">
            </div>
            <h3 class="services__title">${project.title}</h3>
            <p class="section__description">${project.client}</p>
            <div class="services__tech">
                ${project.tech.map(t => `<i class="devicon-${t}-plain colored" title="${t}"></i>`).join('')}
            </div>
            <span class="services__button">
                See more <i class='bx bx-right-arrow-alt services__icon'></i>
            </span>
            <div class="services__modal">
                <div class="services__modal-content">
                    <i class="bx bx-x services__modal-close"></i>
                    <h3 class="services__modal-title">
                        <a href="${project.demo}" target="_blank" class="services__modal-link">
                            <i class='bx ${project.isPrivate ? 'bxs-lock' : 'bxs-lock-open'}'></i> 
                            ${project.isPrivate ? 'Private Project' : 'View Live Demo'}
                        </a>
                    </h3> 
                    <p class="services__modal-decription">${project.desc}</p>
                    <ul class="services__modal-list">
                        ${project.details.map(d => `
                            <li class="services__modal-item">
                                <i class="bx bx-check services__modal-icon"></i>
                                <p class="services__modal-info">${d}</p>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');

    // Sembunyikan tombol See More jika jumlah project kurang dari limit
    if (myProjects.length <= limit) {
        seeMoreBtn.style.display = 'none';
    } else {
        seeMoreBtn.style.display = 'inline-block';
        seeMoreBtn.textContent = showAll ? 'See less projects' : 'See more projects';
    }

    initServicesModal();
}

// Tambahkan Event Listener untuk Tombol See More
function initSeeMore() {
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', () => {
            showAll = !showAll;
            renderProjects(); // Render ulang saat diklik
        });
    }
}

// Modifikasi initAll agar memanggil fungsi baru
function initAll() {
    renderProjects();
    initSeeMore();
    initTheme();
}

window.addEventListener('resize', () => {
    // Re-render hanya jika tidak sedang dalam mode "Show All"
    if(!showAll) renderProjects();
});

// Fungsi untuk Modal (Harus dipanggil setelah render)
function initServicesModal() {
    const modalViews = document.querySelectorAll('.services__modal'),
          modalBtns = document.querySelectorAll('.services__button'),
          modalClose = document.querySelectorAll('.services__modal-close');

    modalBtns.forEach((mb, i) => {
        mb.addEventListener('click', () => {
            modalViews[i].classList.add('active-modal');
        });
    });

    modalClose.forEach((mc) => {
        mc.addEventListener('click', () => {
            modalViews.forEach((mv) => {
                mv.classList.remove('active-modal');
            });
        });
    });
}

// Fungsi untuk Theme (Dark/Light)
function initTheme() {
    const themeButton = document.getElementById('theme-button');
    if(!themeButton) return;

    const lightTheme = 'light-theme', iconTheme = 'bx-sun';
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
        themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(lightTheme);
        themeButton.classList.toggle(iconTheme);
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });
}

/*=============== SCROLL FUNCTIONS ===============*/
window.addEventListener('scroll', () => {
    // Header Scroll
    const header = document.getElementById('header-component');
    if(header) {
        window.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
    }

    // Active Link
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id');

        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if(navLink) {
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
});


