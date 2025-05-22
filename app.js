document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        //UPDATE CSS VARIABELS FOR THE SPOTLIGHT EFFECT
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    })
})

/*=============== FOOTER ===============*/
document.addEventListener('DOMContentLoaded', () => {
	const today = new Date();
	const options = { weekday: 'long' };
	const dayName = today.toLocaleDateString('en-US', options);
  
	const message = `Thanks for visiting! May your ${dayName} be bright and full of possibilities! 👋🏼`;
  
	document.getElementById('footer-message').innerText = message;
  });  
/*=============== CONTACT FORM ===============*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbyh38uQkf_l4df7yWyndiY3E2l0sam3xAvU7k-obbc61XN45pjnLKKM6m8Sgn6aJaI5/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => {
			msg.innerHTML = "─── ⋆⋅Got it! I dive into messages every Friday—keep an eye out!⋅⋆ ──"
			setTimeout(function(){
				msg.innerHTML = ""
			}, 10000)
			form.reset()
		})
		.catch(error => console.error('Error!', error.message))
})

// Optional: Add interactivity here if needed.
console.log("Circle animation section loaded!");

document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // لمنع زر داخل فورم من إرسال الفورم
      e.preventDefault();
  
      const contactSection = document.getElementById('contact');
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  