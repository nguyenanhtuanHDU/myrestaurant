
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

	if(a.style.display == 'block'  b.style.display == 'block'){
		a.style.display = 'none'
		b.style.display = 'none'

	}
}


function open_menu2(){
	var b = document.getElementById('spe_1')
	if(b.style.display == 'block'){
		b.style.display = 'none'
	}else{
		b.style.display = 'none'
	}
}






