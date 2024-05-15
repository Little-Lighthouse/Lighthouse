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

  $('#topicType').on('change', function() {
    if ( this.value == 'All'){
      $(".education").show();
      $(".NewsForYouth").show();
      $(".motivation").show();
      $(".entertainment").show();
      $(".mentalPsycho").show();
      $(".EngSetoutPete").show();
    }

    if ( this.value == 'Education'){
      $(".education").show();
      $(".NewsForYouth").hide();
      $(".motivation").hide();
      $(".entertainment").hide();
      $(".mentalPsycho").hide();
      $(".EngSetoutPete").hide();
    }

    if ( this.value == 'Motivation'){
      $(".education").hide();
      $(".NewsForYouth").hide();
      $(".motivation").show();
      $(".entertainment").hide();
      $(".mentalPsycho").hide();
      $(".EngSetoutPete").hide();
    }

    if ( this.value == 'Entertainment'){
      $(".education").hide();
      $(".NewsForYouth").hide();
      $(".motivation").hide();
      $(".entertainment").show();
      $(".mentalPsycho").hide();
      $(".EngSetoutPete").hide();
    }

    if ( this.value == 'MentPsy'){
      $(".education").hide();
      $(".NewsForYouth").hide();
      $(".motivation").hide();
      $(".entertainment").hide();
      $(".mentalPsycho").show();
      $(".EngSetoutPete").hide();
    }

    if ( this.value == 'News For Youth'){
      $(".education").hide();
      $(".NewsForYouth").show();
      $(".motivation").hide();
      $(".entertainment").hide();
      $(".mentalPsycho").hide();
      $(".EngSetoutPete").hide();
    }

    if ( this.value == 'Eng Setout Pete'){
      $(".education").hide();
      $(".NewsForYouth").hide();
      $(".motivation").hide();
      $(".entertainment").hide();
      $(".mentalPsycho").hide();
      $(".EngSetoutPete").show();
    }
  });
});


/* ---- NOT AVAILABLE ---- */
function notAvailable(){
  alert("The requested page is currently not available.\nWe apologize for the inconvenience.");
}