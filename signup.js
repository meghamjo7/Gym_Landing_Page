// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (validateForm()) {
          alert('Form submitted successfully!');
          form.reset();
      }
  });

  function validateForm() {
      let isValid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const plan = document.getElementById('membership-plan');

      if (name.value.trim() === '') {
          showError(name, 'Name is required');
          isValid = false;
      } else {
          showSuccess(name);
      }

      if (email.value.trim() === '') {
          showError(email, 'Email is required');
          isValid = false;
      } else if (!isValidEmail(email.value)) {
          showError(email, 'Please enter a valid email');
          isValid = false;
      } else {
          showSuccess(email);
      }

      if (plan.value === '') {
          showError(plan, 'Please select a membership plan');
          isValid = false;
      } else {
          showSuccess(plan);
      }

      return isValid;
  }

  function showError(input, message) {
      const formGroup = input.parentElement;
      formGroup.className = 'form-group error';
      const small = formGroup.querySelector('small') || document.createElement('small');
      small.innerText = message;
      if (!formGroup.contains(small)) {
          formGroup.appendChild(small);
      }
  }

  function showSuccess(input) {
      const formGroup = input.parentElement;
      formGroup.className = 'form-group success';
      const small = formGroup.querySelector('small');
      if (small) {
          small.remove();
      }
  }

  function isValidEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  // Dynamic content update
  const pricingCards = document.querySelectorAll('.plan');
  pricingCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.querySelector('button').textContent = 'Join Now!';
      });
      card.addEventListener('mouseleave', function() {
          this.querySelector('button').textContent = 'Select Plan';
      });
  });

  // Testimonial rotation
  const testimonials = [
      { text: "Joining MomentumGym has been life-changing! The trainers are amazing, and the community is so welcoming.", author: "Sarah B." },
      { text: "I've never felt stronger or more confident. The 24/7 access fits perfectly with my busy schedule.", author: "Mike R." },
      { text: "The variety of classes keeps me motivated. I've found workouts I actually look forward to!", author: "Emily T." }
  ];

  let currentTestimonialIndex = 0;
  const testimonialElement = document.querySelector('.testimonials blockquote');

  function rotateTestimonial() {
      const testimonial = testimonials[currentTestimonialIndex];
      testimonialElement.innerHTML = `
          <p>"${testimonial.text}"</p>
          - ${testimonial.author}
      `;
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  }

  setInterval(rotateTestimonial, 5000); // Rotate testimonials every 5 seconds
});