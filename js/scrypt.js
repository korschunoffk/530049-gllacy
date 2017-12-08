        var link = document.querySelector(".contacts_button");
        var black = document.querySelector(".global-container");
        
        var popup = document.querySelector(".feedback");
        var close = popup.querySelector(".feedback_close");
        
        var form = popup.querySelector("feedback_form");
        var login = popup.querySelector("[name=name]");
        var email = popup.querySelector("[name=email]");
        
        var storage = localStorage.getItem("login");
        
        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("feedback-show");
            black.classList.add("black");
            if (storage) {
                login.value = storage;
                } else {
                login.focus();
                }
        });
        
       close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("feedback-show");
            black.classList.remove("black");
            popup.classList.remove("feedback-error");
        }); 
        
        form.addEventListener("submit", function (evt) {
            evt.preventDefault();
            black.classList.remove("black");
        });