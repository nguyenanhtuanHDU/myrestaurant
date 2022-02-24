
var myIndex = 0;
        carousel();
        
        function carousel() {
          var i;
          var x = document.getElementsByClassName("img_dish");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          myIndex++;
          if (myIndex > x.length) {myIndex = 1}    
          x[myIndex-1].style.display = "block";  
          setTimeout(carousel, 3000); 
        }

        const buyBtns = document.querySelectorAll('.js-buy-ticket')
		const modal = document.querySelector('.js-modal')
		const modalClose = document.querySelector('.js-modal-close')
		const modalContainer = document.querySelector('.js-modal-container')

		function showBuyTickets() {
			modal.classList.add('open')
		}


		function hideBuyTickets() {
			modal.classList.remove('open')
		}


		for (const buyBtn of buyBtns) {
			buyBtn.addEventListener('click', showBuyTickets)
		}


		modalClose.addEventListener('click', hideBuyTickets)
		modal.addEventListener('click', hideBuyTickets)
		modalContainer.addEventListener('click', function (event) {
			event.stopPropagation()
		})

function open_menu(){
	var a = document.getElementById('nav_1')
	var b = document.getElementById('nav_2')

	if(a.style.display == 'block' && b.style.display == 'block'){
		a.style.display = 'none'
		b.style.display = 'none'

	}else{
		a.style.display = 'block'
		b.style.display = 'block'

	}
}




let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});



