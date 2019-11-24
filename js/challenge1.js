$('#subscribe').change(function(){
    var x = $('#emailField');
    if (this.checked){
      console.log("selected");
      x.css("display", "block");
    } else {
      console.log("Not selected");
      x.css("display", "none");
    }
  })
  // 	Advanced Option....
  // 	x.style.display == "block" ? 
		// x.style.display = "none" : 
		// x.style.display = "block"; 


