document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("form").addEventListener('submit', function(event) {
        event.preventDefault();
        let formData = new FormData(this);
        if(String(formData.get("CF")).length != 16){
            document.getElementById("result").className = "failed";
            document.getElementById("result").innerHTML = "codice fiscale non valido, tu hai messo "+String(formData.get("CF")).length+" (" + String(formData.get("CF")) + ")caratteri ma ne devi mettere 16";
        }else{
            document.getElementById("result").className = "success";
            document.getElementById("result").innerHTML = "accesso riuscito";
            let time = Date.now();
            while(time<Date.now-(3*1000)){

            }
            this.submit();
        }
    });
});