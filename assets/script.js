
const greetings = [
    "مرحباً",
    "Hola",
    "你好",
    "Bienvenue",
    "Hallo",
    "Merhaba",
    "Hello",
    "خوش آمدید"
  ];
  
  let index = 0;
  const greetingElement = document.getElementById("greeting");
  
  setInterval(() => {
    index = (index + 1) % greetings.length;
    greetingElement.style.opacity = 0;
    setTimeout(() => {
      greetingElement.textContent = greetings[index];
      greetingElement.style.opacity = 1;
    }, 500);
  }, 2000);

  function onSubmit(e) {
    var sheet = SpreadsheetApp.getActiveSheet();
    var formData = e.values; // This captures form submission data
    sheet.appendRow(formData); // Append data to the sheet
  }
  
  function setupTrigger() {
    var form = FormApp.openById('YOUR_FORM_ID');
    ScriptApp.newTrigger('onSubmit')
      .forForm(form)
      .onFormSubmit()
      .create();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".language").forEach(item => {
      item.addEventListener("click", function (event) {
        // إزالة show-tooltip من العناصر الأخرى
        document.querySelectorAll(".language").forEach(el => {
          if (el !== this) el.classList.remove("show-tooltip");
        });
  
        // تفعيل أو تعطيل التلميح
        this.classList.toggle("show-tooltip");
  
        // منع انتشار الحدث حتى لا يتم إغلاق التلميح فورًا
        event.stopPropagation();
      });
    });
  
    // إغلاق التلميح عند الضغط في أي مكان خارج العناصر
    document.addEventListener("click", function () {
      document.querySelectorAll(".language").forEach(el => {
        el.classList.remove("show-tooltip");
      });
    });
  });
  
  

  // تحميل Google Translate API
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'ar', // لغة الصفحة الأصلية (العربية)
    includedLanguages: 'ar,en,es', // اللغات التي يمكن الترجمة إليها (عربي، إنجليزي، إسباني)
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

/*=============== CONTACT FORM ===============*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbxUJJtqkP5vqnOU1HkXsD02F-_WjWA4LN00eJUNgwpa9tSPrx66Etuickna1xlXUvd3/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => {
			msg.innerHTML = "وصلتني رسالتك 💌"
			setTimeout(function(){
				msg.innerHTML = ""
			}, 10000)
			form.reset()
		})
		.catch(error => console.error('Error!', error.message))
})

// Optional: Add interactivity here if needed.
console.log("Circle animation section loaded!");

/*=============== FOOTER ===============*/
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  const options = { weekday: 'long' };
  let dayName = today.toLocaleDateString('ar-AE', options);

  // إزالة "الـ" من اسم اليوم إذا وُجدت
  dayName = dayName.replace(/^ال/, "");

  // رسالة باللغة العربية بدون "الـ"
  const message = `شكرًا على زيارتك! أتمنى لك ${dayName} مشرقًا ومليئًا بالفرص والتجارب الجميلة! 🌟`;

  // تغيير النص في عنصر الفوتر
  document.getElementById('footer-message').innerText = message;
});

