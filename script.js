let listProducts = document.querySelector('.list-product');
    for(let i= 1; i < 10; i++){
        listProducts.innerHTML += `
    <div class="box-img">
        <img src="IMG/images-products-${i}.png" alt="">
        <div class="box-title">
            <h4>Galactus La Parte</h4>
        </div>
    </div>`
    }
    
    let arr = [1,2,3];

    let paginationNumber = document.querySelector('.number');
    function addToListPage(){
        for(let i= 0; i < arr.length; i++){
            paginationNumber.innerHTML += `
            <span>${arr[i]}</span>`
        }
    } 
    addToListPage();


    function nextBtn(){
        paginationNumber.innerHTML = ''
        for(let i= 0; i < arr.length; i++){
            arr[i] = arr[i]+1
            paginationNumber.innerHTML += `
            <span>${arr[i]}</span>`
        }
    }

    function prevBtn(){
        paginationNumber.innerHTML = ''
        for(let i= 0; i < arr.length; i++){
            arr[i] = arr[i]-1
            paginationNumber.innerHTML += `
            <span>${arr[i]}</span>`
        }
    }
    
