$('form').submit(function(e) {
    var valid = true;
    var name = true;
    var email=true;
    var phone = true;
    var card= true;
    var emailregex = /^\S+@\S+\.\S+$/;
    var phoneregex = /^[1-9]\d{2}-\d{3}-\d{4}$/;

    if($("#fullName").attr('required')=="required"){
        if($("#fullName").val().length<4){
            valid = false;
            name=false;
            $("#fullName").addClass('cmp-form-text__validation');
            $("#fullName").parent().parent().addClass('cmp-form-text__error');
            $('#nameError').addClass('cmp-form-text__validation--error');
            $('#nameError').attr('type','text');
    	}
    }

   if(emailregex.test($("#email").val()) === false) {
        $("#email").addClass('cmp-form-text__validation');
        $("#email").parent().parent().addClass('cmp-form-text__error');
        $('#emailError').addClass('cmp-form-text__validation--error');
        $('#emailError').attr('type','text');
        valid = false;
        email=false;
   }


   if(phoneregex.test($("#phone").val()) === false) {
         $("#phone").addClass('cmp-form-text__validation');
         $("#phone").parent().parent().addClass('cmp-form-text__error');
         $('#phoneError').addClass('cmp-form-text__validation--error');
         $('#phoneError').attr('type','text');
         valid = false;
         phone=false;
   }

   if($("#cardNumber").attr('required')=="required"){
        if($("#cardNumber").val().length<16){
            valid = false;
            card=false;
            $("#cardNumber").addClass('cmp-form-text__validation');
            $("#cardNumber").parent().parent().addClass('cmp-form-text__error');
            $('#cardError').addClass('cmp-form-text__validation--error');
            $('#cardError').attr('type','text');
    	}
   }

   if(!valid){
   e.preventDefault();
       if(name){
            $("#fullName").removeClass('cmp-form-text__validation');
            $("#fullName").parent().parent().removeClass('cmp-form-text__error');
            $('#nameError').removeClass('cmp-form-text__validation--error');
            $('#nameError').attr('type','hidden');
       }
       if(email){
            $("#email").removeClass('cmp-form-text__validation');
            $("#email").parent().parent().removeClass('cmp-form-text__error');
            $('#emailError').removeClass('cmp-form-text__validation--error');
            $('#emailError').attr('type','hidden');
        }
        if(phone){
            $("#phone").removeClass('cmp-form-text__validation');
            $("#phone").parent().parent().removeClass('cmp-form-text__error');
            $('#phoneError').removeClass('cmp-form-text__validation--error');
            $('#phoneError').attr('type','hidden');
        }
        if(card){
            $("#cardNumber").removeClass('cmp-form-text__validation');
            $("#cardNumber").parent().parent().removeClass('cmp-form-text__error');
            $('#cardError').removeClass('cmp-form-text__validation--error');
            $('#cardError').attr('type','hidden');
        }
    }else{
            $("#fullName").removeClass('cmp-form-text__validation');
            $("#fullName").parent().parent().removeClass('cmp-form-text__error');
            $('#nameError').removeClass('cmp-form-text__validation--error');
            $('#nameError').attr('type','hidden');
            $("#email").removeClass('cmp-form-text__validation');
            $("#email").parent().parent().removeClass('cmp-form-text__error');
            $('#emailError').removeClass('cmp-form-text__validation--error');
            $('#emailError').attr('type','hidden');
            $("#phone").removeClass('cmp-form-text__validation');
            $("#phone").parent().parent().removeClass('cmp-form-text__error');
            $('#phoneError').removeClass('cmp-form-text__validation--error');
            $('#phoneError').attr('type','hidden');
            $("#cardNumber").removeClass('cmp-form-text__validation');
            $("#cardNumber").parent().parent().removeClass('cmp-form-text__error');
            $('#cardError').removeClass('cmp-form-text__validation--error');
            $('#cardError').attr('type','hidden');
            $('form').submit();
    }
  });
