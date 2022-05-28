let api = "d03b695c83524dd6cd09c3819ae4779a";

async function getData() {
    let city = document.getElementById("city").value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;


    let res = await fetch(url);
    let data = await res.json();

    append(data);

    console.log(data);
  
}

function append(data){
    let container= document.getElementById("container");
    container.innerHTML = null;
    let h3 = document.createElement("h3");
    h3.innerText=data.name;

    let p1= document.createElement("p");
    p1.innerText=`Current temp : ${data.main.temp}`;

    let p2= document.createElement("p");
    p2.innerText=`max temp:  ${data.main.temp_max}`;

    let p3= document.createElement("p");
    p3.innerText=`min temp:  ${data.main.temp_min}`;
        
    container.append(h3, p1, p2, p3);

    let map = document.getElementById("gmap_canvas")
    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=7&ie=UTF8&iwloc=&output=embed`
}
