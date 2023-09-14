/* ---- REGISTERING SERVICE WORKER ---- 
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/Lighthouse/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}*/


/* ---- DISPLAYING CURRENT YEAR IN FOOTER ---- */
window.addEventListener('load', () => {
    const year = document.getElementById('currentYear');
    year.innerHTML = new Date().getFullYear();
})


/* ---- LIGHT & DARK MODE ---- */
document.getElementById('darkMode').addEventListener('click',()=>{
    const darkLight = document.getElementById('darkLight');
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        darkLight.innerHTML = '<i class="bi bi-moon"></i>';
        localStorage.setItem('Mode', 'Light');
    }
    else {
        document.body.classList.add('dark');
        darkLight.innerHTML = '<i class="bi bi-brightness-high"></i>';
        localStorage.setItem('Mode', 'Dark');
    }
})
function mode(){
    if (localStorage.getItem('Mode') === 'Dark'){
        document.body.classList.add('dark');
    }if (localStorage.getItem('Mode') === 'Light'){
        document.body.classList.remove('dark');
    }
}
mode();


/* ---- DISPLAYING MODAL ---- */
window.addEventListener('load', function () {
  var AttModal = new bootstrap.Modal(document.getElementById('attention_modal'), {});

  if (localStorage.getItem('modalShown') !== 'true') {
    AttModal.show();
  }

  document.getElementById('close-btn').disabled = true;

  let remainingSec = 4;
  const displayCountdown = document.getElementById('countdown');
  displayCountdown.textContent = 'You can close this modal in ' + remainingSec + ' seconds';

  let countdown = setInterval(function () {
    remainingSec -= 1;
    displayCountdown.textContent = 'You can close this modal in ' + remainingSec + ' seconds';

    if (remainingSec <= 0) {
      document.getElementById('close-btn').disabled = false;
      displayCountdown.textContent = '';
      clearInterval(countdown);
      setTimeout(function () {
        localStorage.removeItem('modalShown');
      }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
    }
  }, 1000);

  document.getElementById('close-btn').addEventListener('click', function () {
    //localStorage.setItem('modalShown', true);
  });
});


/* ---- LANGUAGE/FONT CHANGE FOR ABOUT US ---- */
$(document).ready(function(){
    $("#MyanmarUni").hide();
    $("#MyanmarZg").hide();

    $('#Language').on('change', function() {
      if ( this.value == 'English'){
        $("#English").show();
        $("#MyanmarUni").hide();
        $("#MyanmarZg").hide();
      }

      if ( this.value == 'Unicode'){
        $("#English").hide();
        $("#MyanmarUni").show();
        $("#MyanmarZg").hide();
      }

      if ( this.value == 'Zawgyi'){
        $("#English").hide();
        $("#MyanmarUni").hide();
        $("#MyanmarZg").show();
      }
    });
});