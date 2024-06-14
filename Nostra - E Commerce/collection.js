var sidenav = document.querySelector('.side-navbar');

function showNavbar() {
  sidenav.style.display = 'block'; // Ensure the sidebar is displayed
  setTimeout(() => {
    sidenav.classList.add('active'); // Add the class to slide it in
  }, 10); // Slight delay to allow display property to take effect
}

function closeNavbar() {
  sidenav.classList.remove('active'); // Remove the class to slide it out
  sidenav.addEventListener('transitionend', () => {
    if (!sidenav.classList.contains('active')) {
      sidenav.style.display = 'none'; // Hide the sidebar after transition ends
    }
  }, { once: true });
}


var productContainer = document.getElementById('products')
var search = document.getElementById('search')
var productlist  = productContainer.querySelectorAll('div')

search.addEventListener('keyup', function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count = 0; count<productlist.length;count=count+1)
        {
            var productname = productlist[count].querySelector('p').textContent

            if(productname.toUpperCase().indexOf(enteredValue)<0)
                {
                    productlist[count].style.display = 'none'
                }
                else {
                    productlist[count].style.display='block'
                }
        }
}) 