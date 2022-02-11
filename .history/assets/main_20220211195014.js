
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

		//Hàm hiện thị modal mua vé
		function showBuyTickets() {
			modal.classList.add('open')
		}

		//Hàm ẩn modal mua vé

		function hideBuyTickets() {
			modal.classList.remove('open')
		}

		//Lập qua từng thẻ button và nghe hành vi click

		for (const buyBtn of buyBtns) {
			buyBtn.addEventListener('click', showBuyTickets)
		}

		//Nghe hành vi click vào button close

		modalClose.addEventListener('click', hideBuyTickets)
		modal.addEventListener('click', hideBuyTickets)
		modalContainer.addEventListener('click', function (event) {
			event.stopPropagation()
		})






