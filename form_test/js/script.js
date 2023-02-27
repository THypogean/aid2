

  var input = document.querySelector("#phone");
      window.intlTelInput(input, {
        // allowDropdown: false,
        // autoHideDialCode: false,
        // autoPlaceholder: "off",
        // dropdownContainer: document.body,
        // excludeCountries: ["us"],
        // formatOnDisplay: false,
        // geoIpLookup: function(callback) {
        //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
        //     var countryCode = (resp && resp.country) ? resp.country : "";
        //     callback(countryCode);
        //   });
        // },
        // hiddenInput: "full_number",
        // initialCountry: "auto",
        // localizedCountries: { 'de': 'Deutschland' },
        // nationalMode: false,
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        // placeholderNumberType: "MOBILE",
        // preferredCountries: ['cn', 'jp'],
        // separateDialCode: true,
        utilsScript: "build/js/utils.js",
      });


function test(){
  let a=document.getElementsByClassName('form__group')
  
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    element.addEventListener('click', (e) => {
      element.classList.add('form__group__active')
      element.children[0].classList.replace('form__label__big','form__label__small')
      element.children[1].style.display = 'block'
    })
    
  }

}

test()

inputName()