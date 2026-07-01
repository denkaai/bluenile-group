/* ==========================================================================
   BLUE NILE GROUP & KIFARU STEEL - INTERACTIVE BEHAVIOR CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  /* --------------------------------------------------------------------------
     1. Hamburger Menu Controller (Mobile Navigation Toggle)
     -------------------------------------------------------------------------- */
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      primaryNav.classList.toggle('active');
    });

    // Close mobile nav when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('active');
      });
    });
  }

  /* --------------------------------------------------------------------------
     2. Sticky Header & Scroll To Top Actions
     -------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Sticky header background transition
    if (header) {
      if (scrollPos > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Toggle visibility of Scroll-To-Top button
    if (scrollTopBtn) {
      if (scrollPos > 300) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }
    }
  });

  // Smooth scroll to top on button click
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     3. Hero Section Image Slider (Auto-rotating carousel with indicators)
     -------------------------------------------------------------------------- */
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const sliderContainer = document.querySelector('.hero-slider');
  
  let currentSlideIndex = 0;
  let sliderTimer = null;
  const slideDuration = 5000; // Time in milliseconds per slide

  function showSlide(index) {
    if (slides.length === 0) return;

    // Boundary check
    if (index >= slides.length) {
      currentSlideIndex = 0;
    } else if (index < 0) {
      currentSlideIndex = slides.length - 1;
    } else {
      currentSlideIndex = index;
    }

    // Reset all slides and indicator dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Activate the current slide and dot
    slides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) {
      dots[currentSlideIndex].classList.add('active');
    }
  }

  function nextSlide() {
    showSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    showSlide(currentSlideIndex - 1);
  }

  function startAutoPlay() {
    if (!sliderTimer) {
      sliderTimer = setInterval(nextSlide, slideDuration);
    }
  }

  function stopAutoPlay() {
    if (sliderTimer) {
      clearInterval(sliderTimer);
      sliderTimer = null;
    }
  }

  // Set up event listeners for arrows
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      stopAutoPlay();
      startAutoPlay(); // Restart timer on click
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      stopAutoPlay();
      startAutoPlay(); // Restart timer on click
    });
  }

  // Set up indicator dots navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      stopAutoPlay();
      startAutoPlay(); // Restart timer on click
    });
  });

  // Pause carousel rotation when hover on slider
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopAutoPlay);
    sliderContainer.addEventListener('mouseleave', startAutoPlay);
  }

  // Initialize Slider autoplay
  startAutoPlay();

  /* --------------------------------------------------------------------------
     4. Scrollspy (Highlight nav links as user scrolls)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('.scroll-spy');
  
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Center viewport triggers
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

    // Special rule for Home (top scroll)
    window.addEventListener('scroll', () => {
      if (window.scrollY < 100) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#') {
            link.classList.add('active');
          }
        });
      }
    });
  }

  /* --------------------------------------------------------------------------
     5. Product Inquiries Link Setup (Auto-select category in contact form)
     -------------------------------------------------------------------------- */
  const productSelect = document.getElementById('form-product');
  const cardInquireButtons = document.querySelectorAll('.card-action-btn, .division-link');

  cardInquireButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Find matching value
      const targetProduct = btn.getAttribute('data-product');
      const targetDivision = btn.getAttribute('data-division');
      const selectedValue = targetProduct || targetDivision;

      if (productSelect && selectedValue) {
        // Find option that contains or matches selectedValue
        for (let i = 0; i < productSelect.options.length; i++) {
          const option = productSelect.options[i];
          if (option.value === selectedValue || option.text.includes(selectedValue)) {
            productSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

  /* --------------------------------------------------------------------------
     6. Custom Form Validation & Visual Success Banner
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('inquiry-form');
  const feedbackBlock = document.getElementById('form-feedback');
  const feedbackProduct = document.getElementById('feedback-product');
  const feedbackContact = document.getElementById('feedback-contact-point');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let formIsValid = true;
      const formFields = contactForm.querySelectorAll('input[required], textarea[required]');

      // Validate required elements
      formFields.forEach(field => {
        const parent = field.closest('.form-control-group');
        
        if (!field.value.trim()) {
          parent.classList.add('invalid');
          formIsValid = false;
        } else if (field.type === 'email' && !validateEmail(field.value)) {
          parent.classList.add('invalid');
          formIsValid = false;
        } else {
          parent.classList.remove('invalid');
        }

        // Add dynamically updated keyup event listeners for field cleaning
        field.addEventListener('input', () => {
          if (field.value.trim()) {
            if (field.type === 'email') {
              if (validateEmail(field.value)) {
                parent.classList.remove('invalid');
              }
            } else {
              parent.classList.remove('invalid');
            }
          }
        });
      });

      if (formIsValid) {
        const submitBtn = contactForm.querySelector('.form-submit-btn');
        submitBtn.classList.add('loading');

        // Simulate submission request processing delay (1.2 seconds)
        setTimeout(() => {
          // Gather info for response card
          const senderName = document.getElementById('form-name').value;
          const senderEmail = document.getElementById('form-email').value;
          const selectedProductText = productSelect.options[productSelect.selectedIndex].text;

          // Populate receipt panel
          if (feedbackProduct) {
            feedbackProduct.textContent = productSelect.value ? selectedProductText : 'Kifaru products';
          }
          if (feedbackContact) {
            feedbackContact.textContent = senderEmail;
          }

          // Reset forms and loading triggers
          contactForm.reset();
          submitBtn.classList.remove('loading');

          // Reveal receipt feedback block
          if (feedbackBlock) {
            feedbackBlock.classList.add('active');
            feedbackBlock.setAttribute('aria-hidden', 'false');
            
            // Smoothly scroll the feedback block into central view
            feedbackBlock.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest'
            });
          }
        }, 1200);
      }
    });
  }

  // Simple Regex email check helper
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  /* --------------------------------------------------------------------------
     7. Price Table Toggle (Show/Hide pricing on product cards)
     -------------------------------------------------------------------------- */
  const priceToggleButtons = document.querySelectorAll('.price-toggle');

  priceToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        const isOpen = targetEl.classList.contains('open');
        targetEl.classList.toggle('open');
        btn.textContent = isOpen ? 'Show Prices' : 'Hide Prices';
      }
    });
  });

});
