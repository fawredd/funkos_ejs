// Buscador de Admin

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
  
    const getURLParams = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const params = {};
  
      for (const [key, value] of searchParams) {
          params[key] = value;
      }
  
      return params;
    }

    // Function to load form values from query string parameters.
    
    const loadURLParams = () => {
      const urlParams = getURLParams();
  
      if (urlParams.search) {
        searchInput.value = urlParams.search;
      }
    };
  
    loadURLParams();

    // Submit form function
  
    const submitForm = () => {
      const currentURL = window.location.origin + window.location.pathname;
        
      const params = new URLSearchParams();

      // Add search parameters
      const searchValue = searchInput.value.trim().replace(/ /g, "");
      if (searchValue == "") {
        params.append('search', searchValue);
      };

      // New URL with parameters
      const queryString = params.toString();

      const newURL = queryString ? `${currentURL}?${queryString}` : currentURL;
      window.location.href = newURL;
    };
    
    // Add events to submit form

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            submitForm();
        };
    });
  });