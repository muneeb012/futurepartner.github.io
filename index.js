let names = ["Aaminah", "Ahlaam", "Aleezeh", "Alishba", "Amal", "Ayesha", "Haya", "Hoorain", "Iram", "Irha", "Isha", "Javeria", "Maliha", "Maryam", "Miraal", "Nawaal", "Reham", "Rida", "Shaima", "Yashal", "Yashma", "Zainab", "Zoya","Noor"]
function tell(){
let partner=Math.floor(Math.random()*names.length)
    let me = document.getElementById("yourname").value
  if(me.length<3){
        document.getElementById("alert").innerHTML="Please enter a valid name "
    }
    else if(me.length>=3){
        document.getElementById("alert").style.display="none"
        let result=me +"         " +"your future partner name is"+ "    "  + names[partner]
        document.getElementById("result").innerHTML= result
        document.getElementById('yourname').style.display="none"
        document.getElementById("tell").style.display="none"
        document.getElementById("none").style.display="inline"
    }
 
}
function reload(){
    location.reload()
}