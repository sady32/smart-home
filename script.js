// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Navbar background change on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Scroll to top button
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "⬆";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Lightbox gallery
const galleryImgs = document.querySelectorAll(".gallery-img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    const lightboxImg = document.createElement("img");
    lightboxImg.src = img.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(lightboxImg);
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

function renderFeedback() {
  // render di bawah kontak
  const feedbackList = document.getElementById('feedbackList');
  if (feedbackList) feedbackList.innerHTML = '';

  // render di testimoni carousel
  const testimoniInner = document.getElementById('testimoniInner');
  // kita biarkan testimoni default tetap ada, hanya tambahkan setelahnya
  // hapus semua testimoni tambahan (bukan yang default)
  if (testimoniInner) {
    // hapus testimoni dengan class 'from-feedback'
    testimoniInner.querySelectorAll('.from-feedback').forEach(el => el.remove());
  }

  const feedbackData = JSON.parse(localStorage.getItem('feedbacks')) || [];
  feedbackData.forEach((fb, index) => {
    // di bawah kontak
    if (feedbackList) {
      const feedbackItem = document.createElement('div');
      feedbackItem.classList.add('feedback-item');
      feedbackItem.innerHTML = `
        <div class="stars">${'★'.repeat(fb.rating)}${'☆'.repeat(5 - fb.rating)}</div>
        <div class="comment">${fb.comment}</div>
      `;
      feedbackList.appendChild(feedbackItem);
    }

    // di testimoni carousel
    if (testimoniInner) {
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item', 'from-feedback');
      // (jangan jadikan active kecuali kalau tidak ada testimoni default)
      carouselItem.innerHTML = `<blockquote class="blockquote">“${fb.comment}”</blockquote>`;
      testimoniInner.appendChild(carouselItem);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeedback();

  const starEls = document.querySelectorAll('.feedback-section .star');
  starEls.forEach(star => {
    star.addEventListener('click', function () {
      selectedRating = this.getAttribute('data-value');
      starEls.forEach(s => s.classList.remove('selected'));
      for (let i = 0; i < selectedRating; i++) {
        starEls[i].classList.add('selected');
      }
    });
  });

  const submitBtn = document.getElementById('submitFeedback');
  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      const comment = document.getElementById('comment').value.trim();
      if (selectedRating === 0) {
        alert('Silakan pilih rating dulu.');
        return;
      }
      if (comment === '') {
        alert('Silakan tulis komentar.');
        return;
      }

      const feedbackData = JSON.parse(localStorage.getItem('feedbacks')) || [];
      feedbackData.push({ rating: parseInt(selectedRating), comment: comment });
      localStorage.setItem('feedbacks', JSON.stringify(feedbackData));

      renderFeedback();
      selectedRating = 0;
      starEls.forEach(s => s.classList.remove('selected'));
      document.getElementById('comment').value = '';
    });
  }
});
