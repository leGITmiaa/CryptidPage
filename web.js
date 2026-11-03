
function SearchCryptids() {

    let base_search =
    document.getElementById("searchBox").value;

   let search = base_search.toLowerCase();


    if (search === "bigfoot") {
        window.location.href = "Bigfoot.html"
    }

    if (search === "mothman") {
        window.location.href = "Mothman.html"
    } 

     if (search === "tokoloshe") {
        window.location.href = "Tokoloshe.html"
    }

     if (search === "grootslang") {
        window.location.href = "Grootslang.html"
    }

    if (search === "orang pendek") {
        window.location.href = "Orang.html"
    }

     if (search === "ahool") {
        window.location.href = "Ahool.html"
    }

     if (search === "snallygaster") {
        window.location.href = "Snally.html"
    }


       if (search === "wampus cat") {
        window.location.href = "Wampus.html"
    }
 
 

const buttons = document.querySelectorAll(".collapse-btn");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        const content = this.nextElementSibling;

        if(content.style.display === "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block";
        }

    });

});


}