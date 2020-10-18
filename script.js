const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', function (e){
    const number = document.getElementById('number').value;
    const outPut = document.getElementById('outPut');
    let result = "";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);


    xhr.onload = function (){
        if(this.status === 200){

            const response = JSON.parse(this.responseText);
            // console.log(response.value.joke);
            if(response.type === 'success' && number != ''){
                response.value.forEach(function (joke){
                    result += `<div class="alert alert-info"> ${joke.joke}</div>`;
                });
            } else{
                result += `<div class="alert alert-warning">Something Went Wrong!</div>`;
            }

            outPut.innerHTML = result;
        }
    }
    xhr.send();

    // HTTP Request Status
    // 200 : 'ok',
    // 403: 'Forbidden',
    // 404: 'Not Found'

    e.preventDefault();
});