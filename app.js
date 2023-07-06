let showList = [];

//! bütün fonksiyonlarda api den gelen verileri görebilmek için global e boş bir dizi açıyoruz ve verileri bu diziye atarak herkesin ulaşabilmesini sağlıyoruz

fetch("./tv-shows.json")
  .then((res) => res.json())
  .then((data) => {
                              //fetch ile listeye ulas
  showList=data;              // bilgileri array a at
  setTvShows(data)});



  
function setTvShows(data){
  let liste=document.querySelector(".tvShowList");  //bütün satirlara ulas

  document.querySelector(".tvShowList").innerHTML="";
  data.forEach((showCard)=>{

    document.querySelector(".tvShowList").innerHTML+=`
    <div class="col-md-3">
    <div class="card">
    <img style=width:250px src=${showCard.show.image ? showCard.show.image.medium : ""} class="card-img-top">
    <div class="card-body">
    <h5 class="mt-1">${showCard.show.name}</h5> 
    <a href=${showCard.show.url} class="btn btn-success" style=width:150px>Details</a>
    <p></p>
    </div>
    </div> </div> `;
  }) 
}



document.getElementById("search").oninput=(e)=>{

let yeniDizi=showList.filter((a)=>a.show.name.toLowerCase().includes(e.target.value.toLowerCase()))

  setTvShows(yeniDizi)

};