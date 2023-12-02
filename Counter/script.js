(function(){

    const butttons=document.querySelectorAll(".btn-counter");
    let count=0;

    const counter = document.querySelector(".counter-machine");
    const counterContainer = document.querySelector(".counter");

    butttons.forEach(function(buttton){

        buttton.addEventListener('click',function(){


            if(buttton.classList.contains("decrease-btn")){
                count--;
                
            }else if(buttton.classList.contains("increase-btn")){
                count++;
            }

            counter.textContent=count;

            if(count > 0){
                counterContainer.classList.remove("negative");
                counterContainer.classList.add("positive");
            }
            else if(count < 0){
                counterContainer.classList.remove("positive");
                counterContainer.classList.add("negative");
            } 

            else{
                counterContainer.classList.remove("positive","negative")
            }





        });


    });



})();