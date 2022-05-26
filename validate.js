function login()
    {
        var uname = document.getElementById("email").value;
        var pwd = document.getElementById("password").value;
        var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        if(uname =='')
        {
            email.style.border = "1px solid red";
		    email_error.style.display = "block";
		    email.focus();
            return false;
        }
        else if(!filter.test(uname))
        {
            email.style.border = "1px solid red";
		    email_error.style.display = "block";
		    email.focus();
            return false;
        }
        else if(pwd=='')
        {
            password.style.border = "1px solid red";
		    pass_error.style.display = "block";
		    password.focus();
            return false;
        }
        else if(pwd.length < 8)
        {
            password.style.border = "1px solid red";
		    pass_error.style.display = "block";
		    password.focus();
            return false;
        }
        else
        {
            return true;
        }
    }