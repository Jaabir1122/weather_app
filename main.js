
let button = document.getElementById('btn')
btn.onclick =function(){
   let formvalue = document.getElementById('formfield').value
console.log(formvalue)
let key= "194c39acc5a8284381fc4214331d32b6"
let city="Tamale"
let api=`https://api.openweathermap.org/data/2.5/weather?q=${formvalue}&appid=${key}`

fetch(api)
   .then((response)=>response.json())
   .then((data)=>{
      console.log(data)
      let city=document.getElementById('cityname')
      city.innerHTML= data.name
      let countryName=document.getElementById('country')
       countryName.innerHTML=data.sys.country
       let temp =document.getElementById('temperature')
       temp.innerHTML=data.main.temp
       let feels_like=document.getElementById('feels')
       feels_like.innerHTML=data.main.feels_like
       let humidity= document.getElementById('humidity')
       humidity.innerHTML=data.main.humidity
       let pressure= document.getElementById('pressure')
       pressure.innerHTML=data.main.pressure
       let Rainprobability= document.getElementById('Rainprobability')
       Rainprobability.innerHTML= data.main.Rainprobability
       let Windspeed= document.getElementById('Windspeed')
       Windspeed.innerHTML=data.main.Windspeeds
})
   .catch((error)=>console.log(error))
}
