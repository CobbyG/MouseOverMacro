console.log("setup");
function generateMacro(){
  var outputLocation = document.getElementById("output");
  var spellName = document.getElementById("spellName").value;
  outputLocation.innerHTML = "#showtooltip " + spellName + " \n/cast [mod:alt, target=player] " + spellName + " \n/cast [target=mouseover,help] " + spellName + "; [help] " + spellName + "; " + spellName + "";

}
