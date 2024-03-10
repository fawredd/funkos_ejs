//  Filtro desplegable en el shop para versión mobile.

const filterButton = document.querySelector(".filter__button");
const filterContent = document.querySelector(".filter__content--desplegable");
const filterChevron = document.querySelector(".filter__button--icon");

filterButton.addEventListener("click", () => {
  filterContent.classList.toggle("filter-show");
  filterChevron.classList.toggle("filter__button--rotate");
});

//  Find

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const searchInput = document.getElementById('search');
  const catSelect = document.getElementById('cat');
  const orderSelect = document.getElementById('order');
  const priceInputs = document.querySelectorAll('.filter__price');

  const getURLParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {};

    for (const [key, value] of searchParams) {
        params[key] = value;
    };

    return params;
  };

  // Function to load form values from query string parameters.

  const loadURLParams = () => {
    const urlParams = getURLParams();

    if (urlParams.search) {
      searchInput.value = urlParams.search;
    };

    if (urlParams.cat) {
      catSelect.value = urlParams.cat;
  };

    if (urlParams.order) {
        orderSelect.value = urlParams.order;
    };

    if (urlParams.min) {
        document.getElementById('min').value = urlParams.min;
    };

    if (urlParams.max) {
        document.getElementById('max').value = urlParams.max;
    };
  };

  loadURLParams();

  // Form data upload function
  const submitForm = () => {
    const formData = new FormData(form);
    const currentURL = window.location.origin + window.location.pathname;  
    const params = new URLSearchParams();

    // Add search parameters
    const searchValue = searchInput.value.trim().replace(/ /g, "");
    if (searchValue) {
      params.append('search', searchValue);
    }

    // Add cat parameters
    const catValue = catSelect.value;
    if (catValue) {
      params.append('cat', catValue);
    }

    // Add order parameters
    const orderValue = orderSelect.value;
    if (orderValue) {
      params.append('order', orderValue);
    }
  
    // Add price parameters
    const minPrice = formData.get('min').trim();
    const maxPrice = formData.get('max').trim();
    if (minPrice !== '' && maxPrice !== '') {
      params.append('min', minPrice);
      params.append('max', maxPrice);
    } else {
      if (minPrice !== '') {
        params.append('min', minPrice);
      } else if (maxPrice !== '') {
        params.append('max', maxPrice);
      };
    };
  
    // New URL with parameters
    const queryString = params.toString();
    const newURL = queryString ? `${currentURL}?${queryString}` : currentURL;
    window.location.href = newURL;
  }

  // Add events to submit form

  searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          submitForm();
      }
  });

  catSelect.addEventListener('change', function() {
    submitForm();
});

  orderSelect.addEventListener('change', function() {
      submitForm();
  });

  priceInputs.forEach(input => {
      input.addEventListener('keypress', function(event) {
          if (event.key === 'Enter') {
              submitForm();
          }
      });
  });
});

