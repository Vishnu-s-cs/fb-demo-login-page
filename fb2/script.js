$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
        fname:{
            required:true,
            minlength:4
        },
        sname:{
            required:true,
            minlength:1
        },
        emailAddress:{
            required:true,
            email:true

        },
        password:{
            minlength:6
        },
        day:{
            required:true
        },
    a:{
        required:true
        }
    },
    messages:{
        fname:{
        required:"enter first name",
        minlength:"enter 4 chars"
    }
}
    
    
    })

})