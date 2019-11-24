$('#useBilling').change(function(){
    var home = $('#home');
    var billing = $('#billing');

    if (this.checked){
      console.log("Same address");
      home.val(billing.val());
	  home.attr("disabled", true);
    } else {
      console.log("Different address");
      home.val("");
	  home.attr("disabled", false);
    }
  })