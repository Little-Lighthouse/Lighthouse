/* ---- LANGUAGE/FONT CHANGE (ABOUT US) ---- */
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


/* ---- CHOOSING TOPIC (POSTS) ---- */
$(document).ready(function(){
  $('#topicTypeCurrent').on('change', function() {
    if ( this.value == 'All'){
      $(".EFY_Post").show();
      $(".NFY_Post").show();
      $(".EY_Post").show();
      $(".VFM_Post").show();
      $(".ESP_Post").show();
      $(".YS_Post").show();
    }

    if ( this.value == 'EFY_Opt'){
      $(".EFY_Post").show();
      $(".NFY_Post").hide();
      $(".EY_Post").hide();
      $(".VFM_Post").hide();
      $(".ESP_Post").hide();
      $(".YS_Post").hide();
    }

    if ( this.value == 'NFY_Opt'){
      $(".EFY_Post").hide();
      $(".NFY_Post").show();
      $(".EY_Post").hide();
      $(".VFM_Post").hide();
      $(".ESP_Post").hide();
      $(".YS_Post").hide();
    }

    if ( this.value == 'VFM_Opt'){
      $(".EFY_Post").hide();
      $(".NFY_Post").hide();
      $(".EY_Post").hide();
      $(".VFM_Post").show();
      $(".ESP_Post").hide();
      $(".YS_Post").hide();
    }

    if ( this.value == 'EY_Opt'){
      $(".EFY_Post").hide();
      $(".NFY_Post").hide();
      $(".EY_Post").show();
      $(".VFM_Post").hide();
      $(".ESP_Post").hide();
      $(".YS_Post").hide();
    }

    if ( this.value == 'ESP_Opt'){
      $(".EFY_Post").hide();
      $(".NFY_Post").hide();
      $(".EY_Post").hide();
      $(".VFM_Post").hide();
      $(".ESP_Post").show();
      $(".YS_Post").hide();
    }

    if ( this.value == 'YS_Opt'){
      $(".EFY_Post").hide();
      $(".NFY_Post").hide();
      $(".EY_Post").hide();
      $(".VFM_Post").hide();
      $(".ESP_Post").hide();
      $(".YS_Post").show();
    }
  });
});


/* ---- NOT AVAILABLE ---- */
function notAvailable(){
  alert("The requested page is currently not available.\nWe apologize for the inconvenience.");
}
// ---- TOGGLE POSTS ----
function togglePost(post) {
  post.classList.toggle("expanded");
}
