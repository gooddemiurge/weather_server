"use strict"

var express = require('express')
var app = express()

app.listen(3000)
console.log("Слухаю на порті 3000")

app.get('/data/2.5/weather', get_weather)

function get_weather(request, response)
{
    console.log(request.query.lat)
    response.json({"coord":{"lon":7.2094,"lat":50.082},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":18.34,"feels_like":17.14,"temp_min":17.51,"temp_max":20.08,"pressure":1029,"humidity":35},"visibility":10000,"wind":{"speed":6.17,"deg":60},"clouds":{"all":0},"dt":1648311221,"sys":{"type":2,"id":2020334,"country":"DE","sunrise":1648272071,"sunset":1648317144},"timezone":3600,"id":6553725,"name":"Senheim","cod":200})
}