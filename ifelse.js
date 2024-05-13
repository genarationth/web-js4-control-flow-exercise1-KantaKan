const day = ["Sun","Mon", "Tue", "Wed", "Thu","Fri","Sat"]

const date = day[Math.floor(Math.random() * 7)]

if (date === "Sun") {
    console.log("Today is Sunday")
} else if (date === "Mon"){
    console.log("today is monday")
} else if (date === "Tue"){
    console.log("today is tuesday")
} else if (date === "Wed"){
    console.log("today is wednesday")
} else if (date === "Thu"){
    console.log("today is thursday")
} else if (date === "Fri"){
    console.log("today is friday")
} else {
    console.log("today is Saturday")
}