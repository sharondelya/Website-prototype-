
      function showPage(pageId) {
   
        const pages = document.querySelectorAll(".page");
        pages.forEach((page) => {
          page.style.display = "none";
        });

      
        document.getElementById(pageId).style.display = "block";


        const navLinks = document.querySelectorAll(".nav a");
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

 
        const currentLink = document.querySelector(
          `.nav a[onclick*="${pageId}"]`
        );
        if (currentLink) {
          currentLink.classList.add("active");
        }

  
        updateBreadcrumb(pageId);

   
        window.scrollTo(0, 0);
      }

   
      function updateBreadcrumb(pageId) {
        const breadcrumb = document.querySelector(".breadcrumb");
        if (!breadcrumb) return;

        const pageNames = {
          home: "Home",
          dogs: "Dogs",
          cats: "Cats",
          "small-animals": "Small Animals",
          contact: "Contact",
        };

        breadcrumb.innerHTML = `<a href="#" onclick="showPage('home')">Home</a> > <span>${pageNames[pageId]}</span>`;
      }

  
      document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.querySelector(".contact-form");
        if (contactForm) {
          contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert(
              "Thank you for your consultation request! We will contact you within 48 hours to schedule your consultation."
            );
          });
        }

       
        showPage("home");
      });

   
      function goHome() {
        showPage("home");
      }

const searchData = [
 
  {
    page: 'home',
    title: 'Pet Care Advice',
    content: 'Evidence-based pet care advice for every pet lover. 12 years of experience with certified pet health and nutrition experts.',
    keywords: ['pet care', 'advice', 'experts', 'consultation', 'evidence-based']
  },
  {
    page: 'home',
    title: 'Virtual Consultations',
    content: 'Get expert advice from the comfort of your home through our virtual consultation services.',
    keywords: ['virtual', 'consultation', 'online', 'remote', 'advice']
  },
  {
    page: 'home',
    title: 'One-on-One Consultations',
    content: 'Personalized pet care guidance tailored to your specific pet\'s needs and your family situation.',
    keywords: ['personal', 'consultation', 'one-on-one', 'tailored', 'guidance']
  },
  {
    page: 'home',
    title: 'Group Presentations',
    content: 'Educational sessions for veterinary professionals, pet shelters, and breeding organizations.',
    keywords: ['group', 'presentation', 'education', 'veterinary', 'professional']
  },
  

  {
    page: 'dogs',
    title: 'Dog Care Guide',
    content: 'Comprehensive guide for dog care including diet, exercise, grooming, and vaccinations.',
    keywords: ['dog', 'canine', 'puppy', 'care', 'guide']
  },
  {
    page: 'dogs',
    title: 'Dog Diet & Exercise',
    content: 'Feeding guidelines for puppies and adult dogs. Exercise recommendations from 30-120 minutes per day.',
    keywords: ['dog diet', 'dog food', 'dog exercise', 'puppy feeding', 'dog nutrition']
  },
  {
    page: 'dogs',
    title: 'Dog Grooming',
    content: 'Keep your dog clean and healthy. Brush frequently to reduce shedding and check for ticks and fleas.',
    keywords: ['dog grooming', 'brushing', 'shedding', 'ticks', 'fleas', 'hygiene']
  },
  {
    page: 'dogs',
    title: 'Dog Vaccinations',
    content: 'Core vaccines for dogs including hepatitis, rabies, and parvovirus. Consult with your veterinarian.',
    keywords: ['dog vaccination', 'vaccines', 'rabies', 'hepatitis', 'parvovirus', 'vet']
  },
  

  {
    page: 'cats',
    title: 'Cat Care Guide',
    content: 'Complete cat care information from kitten to senior cat, including feeding and nutrition guidelines.',
    keywords: ['cat', 'feline', 'kitten', 'care', 'guide']
  },
  {
    page: 'cats',
    title: 'Kitten Care (0-4 weeks)',
    content: 'Nursing and early kitten care. Monitor growth and feeding for healthy development.',
    keywords: ['kitten', 'nursing', 'newborn', 'growth', 'early care']
  },
  {
    page: 'cats',
    title: 'Young Cat Care (4 weeks - 1 year)',
    content: 'Introduction to solid food, feeding amounts, and nutrition for growing cats.',
    keywords: ['young cat', 'kitten food', 'solid food', 'feeding', 'nutrition']
  },
  {
    page: 'cats',
    title: 'Adult Cat Care (1-7 years)',
    content: 'Feeding schedules and nutrition for adult cats. Avoid free feeding to prevent obesity.',
    keywords: ['adult cat', 'feeding schedule', 'cat nutrition', 'obesity prevention']
  },
  {
    page: 'cats',
    title: 'Senior Cat Care (7+ years)',
    content: 'Special dietary needs for senior cats including quality proteins and reduced fats.',
    keywords: ['senior cat', 'elderly cat', 'senior diet', 'quality protein', 'aging']
  },
  

  {
    page: 'small-animals',
    title: 'Small Animal Care Guide',
    content: 'Care guide for guinea pigs, hamsters, mice, gerbils, chinchillas, and hermit crabs.',
    keywords: ['small animals', 'guinea pig', 'hamster', 'mouse', 'gerbil', 'chinchilla', 'hermit crab']
  },
  {
    page: 'small-animals',
    title: 'Small Animal Housing',
    content: 'Cages, aquariums, bedding, toys, exercise wheels, and other amenities for small pets.',
    keywords: ['cage', 'habitat', 'bedding', 'toys', 'exercise wheel', 'housing']
  },
  {
    page: 'small-animals',
    title: 'Guinea Pig Care',
    content: 'Specific care instructions and resources for guinea pig owners.',
    keywords: ['guinea pig', 'cavy', 'guinea pig care', 'guinea pig housing']
  },
  {
    page: 'small-animals',
    title: 'Hamster Care',
    content: 'Housing requirements and care tips for hamsters.',
    keywords: ['hamster', 'hamster care', 'hamster cage', 'hamster habitat']
  },
  

  {
    page: 'contact',
    title: 'Contact & Consultation',
    content: 'Schedule a consultation with our pet care experts. We respond within 48 hours.',
    keywords: ['contact', 'consultation', 'schedule', 'appointment', 'expert']
  },
  {
    page: 'contact',
    title: 'Pet Consultation Form',
    content: 'Fill out our consultation form with your pet\'s information to get personalized advice.',
    keywords: ['form', 'consultation form', 'pet information', 'personalized advice']
  }
];


function performSearch() {
  const searchTerm = document.getElementById('searchInput').value.trim();
  if (searchTerm.length < 2) {
    hideSearchResults();
    return;
  }
  
  const results = searchContent(searchTerm);
  displaySearchResults(results, searchTerm);
}

function searchContent(searchTerm) {
  const term = searchTerm.toLowerCase();
  const results = [];
  
  searchData.forEach(item => {
    let score = 0;
    
    
    if (item.title.toLowerCase().includes(term)) {
      score += 10;
    }
    
    
    if (item.content.toLowerCase().includes(term)) {
      score += 5;
    }
    

    item.keywords.forEach(keyword => {
      if (keyword.toLowerCase().includes(term) || term.includes(keyword.toLowerCase())) {
        score += 3;
      }
    });
    
    if (score > 0) {
      results.push({
        ...item,
        score: score
      });
    }
  });
  

  return results.sort((a, b) => b.score - a.score);
}

function displaySearchResults(results, searchTerm) {
  const resultsContainer = document.getElementById('searchResults');
  
  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no-results">
        <p>No results found for "${searchTerm}"</p>
        <p>Try searching for: dogs, cats, small animals, care, nutrition, consultation</p>
      </div>
    `;
  } else {
    resultsContainer.innerHTML = results.map(result => `
      <div class="search-result-item" onclick="navigateToResult('${result.page}')">
        <div class="search-result-title">${highlightText(result.title, searchTerm)}</div>
        <div class="search-result-content">${highlightText(result.content, searchTerm)}</div>
        <div class="search-result-page">Found in: ${getPageDisplayName(result.page)}</div>
      </div>
    `).join('');
  }
  
  resultsContainer.classList.add('show');
}

function highlightText(text, searchTerm) {
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<strong style="background-color: yellow;">$1</strong>');
}

function getPageDisplayName(page) {
  const pageNames = {
    'home': 'Home',
    'dogs': 'Dogs',
    'cats': 'Cats',
    'small-animals': 'Small Animals',
    'contact': 'Contact'
  };
  return pageNames[page] || page;
}

function navigateToResult(page) {
  showPage(page);
  hideSearchResults();
  document.getElementById('searchInput').value = '';
}

function hideSearchResults() {
  document.getElementById('searchResults').classList.remove('show');
}


document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  

  searchInput.addEventListener('input', function() {
    if (this.value.length >= 2) {
      performSearch();
    } else {
      hideSearchResults();
    }
  });
  

  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
      hideSearchResults();
    }
  });
  

  document.getElementById('searchResults').addEventListener('click', function(e) {
    e.stopPropagation();
  });
});
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileMenuOverlay');
  
  if (mobileMenu.classList.contains('open')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileMenuOverlay');
  
  mobileMenu.classList.add('open');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden'; 
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileMenuOverlay');
  
  mobileMenu.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = ''; 
}


function performMobileSearch() {
  const searchInput = document.getElementById('mobileSearchInput');
  const query = searchInput.value.trim();
  
  if (query) {

    performSearch(query);
    closeMobileMenu();
  }
}


function showPage(pageId) {

  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });


  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }


  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  const activeLink = document.getElementById(`nav-${pageId}`);
  if (activeLink) {
    activeLink.classList.add('active');
  }


  const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a');
  mobileNavLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  const activeMobileLink = document.getElementById(`mobile-nav-${pageId}`);
  if (activeMobileLink) {
    activeMobileLink.classList.add('active');
  }


  updateBreadcrumb(pageId);
  

  if (targetPage) {
    targetPage.classList.add('fade-in');
    setTimeout(() => {
      targetPage.classList.remove('fade-in');
    }, 500);
  }

  window.scrollTo(0, 0);
}


document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});
   