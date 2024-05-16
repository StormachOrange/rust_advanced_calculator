let sulfurCalc =
    sulfurRock = 100;
sulfurClub = 101;
sulfurMolot = 146;
sulfurPickaxe = 257;
sulfurAdvancedPickaxe = 300;
let stoneCalc =
    stoneRock = 375;
stoneClub = 450;
stoneMolot = 536;
stonePickaxe = 794;
stoneAdvancedPickaxe = 1000;
let metalCalc =
    metalRock = 250;
metalClub = 286;
metalMolot = 358;
metalPickaxe =  485;
metalAdvancedPickaxe = 600;


function sulfurcalc(){let choose1 = document.getElementById('choose-id1').innerText = ('no tea:(');let choose = document.getElementById('choose-id').innerText = ('Sulfur');let inputCalculatorSulfur = document.getElementById('SulfurInput').value; console.log(inputCalculatorSulfur + ' Sulfur');let RockCalc = inputCalculatorSulfur * sulfurRock; document.getElementById('rock').innerText = (RockCalc); let ClubCalc = inputCalculatorSulfur * sulfurClub; document.getElementById('club').innerText = (ClubCalc); let HammerCalc = inputCalculatorSulfur * sulfurMolot; document.getElementById('hammer').innerText = (HammerCalc);let StonePickaxeCalc = inputCalculatorSulfur * sulfurPickaxe; document.getElementById('stonePickaxe').innerText = (StonePickaxeCalc); let AdvancedPickaxeCalc = inputCalculatorSulfur * sulfurAdvancedPickaxe; document.getElementById('advancedPickaxe').innerText = (AdvancedPickaxeCalc); let AdvancedPickaxeCalc1 = inputCalculatorSulfur * sulfurAdvancedPickaxe; document.getElementById('advancedPickaxe1').innerText = (AdvancedPickaxeCalc1); let AdvancedPickaxeCalc2 = inputCalculatorSulfur * sulfurAdvancedPickaxe; document.getElementById('advancedPickaxe2').innerText = (AdvancedPickaxeCalc2);}
function ClassicTea() {
    // Osnova vsego
    let choose = document.getElementById('choose-id1').innerText = ('Classic Tea');
    let percent = 0.20;
    let inputClassicTea2 = document.getElementById('SulfurInput').value;
    console.log(inputClassicTea2)
    let STCalc =
        rockST = document.getElementById('rock').innerText;
    clubST = document.getElementById('club').innerText;
    molotST = document.getElementById('hammer').innerText;
    pickaxeST = document.getElementById('stonePickaxe').innerText;
    advpickaxeST = document.getElementById('advancedPickaxe').innerText;
    // Rock ---- sulfur
    let RockSulfurPercentResult = inputClassicTea2 * rockST * percent;
    let RockSulfurResult = inputClassicTea2 * rockST + RockSulfurPercentResult;
    document.getElementById('rock').innerText = (RockSulfurResult);
    // Club
    let ClubSulfurPercentResult = inputClassicTea2 * clubST * percent;
    let ClubSulfurResult = inputClassicTea2 * clubST + ClubSulfurPercentResult;
    document.getElementById('club').innerText = (ClubSulfurResult);
    // Molot
    let MolotSulfurPercentResult = inputClassicTea2 * molotST * percent;
    let MolotSulfurResult = inputClassicTea2 * molotST + MolotSulfurPercentResult;
    document.getElementById('hammer').innerText = (MolotSulfurResult);
    // Pickaxe
    let PickaxeSulfurPercentResult = inputClassicTea2 * pickaxeST * percent;
    let PickaxeSulfurResult = inputClassicTea2 * pickaxeST + PickaxeSulfurPercentResult;
    document.getElementById('stonePickaxe').innerText = (PickaxeSulfurResult);
    // Advanced pickaxe
    let AdvPickaxeSulfurPercentResult = inputClassicTea2 * advpickaxeST * percent;
    let AdvPickaxeSulfurResult = inputClassicTea2 * advpickaxeST + AdvPickaxeSulfurPercentResult;
    document.getElementById('advancedPickaxe').innerText = (AdvPickaxeSulfurResult);
    // Advanced pickaxe1
    let AdvPickaxeSulfurPercentResult1 = inputClassicTea2 * advpickaxeST * percent;
    let AdvPickaxeSulfurResult1 = inputClassicTea2 * advpickaxeST + AdvPickaxeSulfurPercentResult1;
    document.getElementById('advancedPickaxe1').innerText = (AdvPickaxeSulfurResult1);
    // Advanced pickaxe2
    let AdvPickaxeSulfurPercentResult2 = inputClassicTea2 * advpickaxeST * percent;
    let AdvPickaxeSulfurResult2 = inputClassicTea2 * advpickaxeST + AdvPickaxeSulfurPercentResult2;
    document.getElementById('advancedPickaxe2').innerText = (AdvPickaxeSulfurResult2);
    if (STCalc === undefined || NaN)
    {
        let valueFinder =
            rockvalue = document.getElementById('rock').value;
        console.log(rockvalue)
    }
}
function AdvancedTea() {
    // Osnova vsego
    let choose = document.getElementById('choose-id1').innerText = ('Advanced Tea');
    let percent = 0.35;
    let inputClassicTea2 = document.getElementById('SulfurInput').value;
    console.log(inputClassicTea2)
    let STCalc =
        rockST = document.getElementById('rock').innerText;
    clubST = document.getElementById('club').innerText;
    molotST = document.getElementById('hammer').innerText;
    pickaxeST = document.getElementById('stonePickaxe').innerText;
    advpickaxeST = document.getElementById('advancedPickaxe').innerText;
    // Rock ---- sulfur
    let RockSulfurPercentResult = inputClassicTea2 * rockST * percent;
    let RockSulfurResult = inputClassicTea2 * rockST + RockSulfurPercentResult;
    document.getElementById('rock').innerText = (RockSulfurResult);
    // Club
    let ClubSulfurPercentResult = inputClassicTea2 * clubST * percent;
    let ClubSulfurResult = inputClassicTea2 * clubST + ClubSulfurPercentResult;
    document.getElementById('club').innerText = (ClubSulfurResult);
    // Molot
    let MolotSulfurPercentResult = inputClassicTea2 * molotST * percent;
    let MolotSulfurResult = inputClassicTea2 * molotST + MolotSulfurPercentResult;
    document.getElementById('hammer').innerText = (MolotSulfurResult);
    // Pickaxe
    let PickaxeSulfurPercentResult = inputClassicTea2 * pickaxeST * percent;
    let PickaxeSulfurResult = inputClassicTea2 * pickaxeST + PickaxeSulfurPercentResult;
    document.getElementById('stonePickaxe').innerText = (PickaxeSulfurResult);
    // Advanced pickaxe
    let AdvPickaxeSulfurPercentResult = inputClassicTea2 * advpickaxeST * percent;
    let AdvPickaxeSulfurResult = inputClassicTea2 * advpickaxeST + AdvPickaxeSulfurPercentResult;
    document.getElementById('advancedPickaxe').innerText = (AdvPickaxeSulfurResult);
    // Advanced pickaxe1
    let AdvPickaxeSulfurPercentResult1 = inputClassicTea2 * advpickaxeST * percent;
    let AdvPickaxeSulfurResult1 = inputClassicTea2 * advpickaxeST + AdvPickaxeSulfurPercentResult1;
    document.getElementById('advancedPickaxe1').innerText = (AdvPickaxeSulfurResult1);
    // Advanced pickaxe2
    let AdvPickaxeSulfurPercentResult2 = inputClassicTea2 * advpickaxeST * percent;
    let AdvPickaxeSulfurResult2 = inputClassicTea2 * advpickaxeST + AdvPickaxeSulfurPercentResult2;
    document.getElementById('advancedPickaxe2').innerText = (AdvPickaxeSulfurResult2);
    if (STCalc === undefined || NaN)
    {
        let valueFinder =
            rockvalue = document.getElementById('rock').value;
        console.log(rockvalue)
    }
}
function PureTea() {
    // Osnova vsego
    let choose = document.getElementById('choose-id1').innerText = ('Pure Tea');
    let percent = 0.50;
    let inputClassicTea2 = document.getElementById('SulfurInput').value;
    console.log(inputClassicTea2)
    let STCalc =
        rockST = document.getElementById('rock').innerText;
    clubST = document.getElementById('club').innerText;
    molotST = document.getElementById('hammer').innerText;
    pickaxeST = document.getElementById('stonePickaxe').innerText;
    advpickaxeST = document.getElementById('advancedPickaxe').innerText;
    // Rock ---- sulfur
    let RockSulfurPercentResult = inputClassicTea2 * rockST * percent;
    let RockSulfurResult = inputClassicTea2 * rockST + RockSulfurPercentResult;
    document.getElementById('rock').innerText = (RockSulfurResult);
    // Club
    let ClubSulfurPercentResult = inputClassicTea2 * clubST * percent;
    let ClubSulfurResult = inputClassicTea2 * clubST + ClubSulfurPercentResult;
    document.getElementById('club').innerText = (ClubSulfurResult);
    // Molot
    let MolotSulfurPercentResult = inputClassicTea2 * molotST * percent;
    let MolotSulfurResult = inputClassicTea2 * molotST + MolotSulfurPercentResult;
    document.getElementById('hammer').innerText = (MolotSulfurResult);
    // Pickaxe
    let PickaxeSulfurPercentResult = inputClassicTea2 * pickaxeST * percent;
    let PickaxeSulfurResult = inputClassicTea2 * pickaxeST + PickaxeSulfurPercentResult;
    document.getElementById('stonePickaxe').innerText = (PickaxeSulfurResult);
    // Advanced pickaxe
    let AdvPickaxeSulfurPercentResult = inputClassicTea2 * advpickaxeST * percent;
    let AdvPickaxeSulfurResult = inputClassicTea2 * advpickaxeST + AdvPickaxeSulfurPercentResult;
    document.getElementById('advancedPickaxe').innerText = (AdvPickaxeSulfurResult);
    // Advanced pickaxe1
    let AdvPickaxeSulfurPercentResult1 = inputClassicTea2 * advpickaxeST * percent;
    let AdvPickaxeSulfurResult1 = inputClassicTea2 * advpickaxeST + AdvPickaxeSulfurPercentResult1;
    document.getElementById('advancedPickaxe1').innerText = (AdvPickaxeSulfurResult1);
    // Advanced pickaxe2
    let AdvPickaxeSulfurPercentResult2 = inputClassicTea2 * advpickaxeST * percent;
    let AdvPickaxeSulfurResult2 = inputClassicTea2 * advpickaxeST + AdvPickaxeSulfurPercentResult2;
    document.getElementById('advancedPickaxe2').innerText = (AdvPickaxeSulfurResult2);
    if (STCalc === undefined || NaN)
    {
        let valueFinder =
            rockvalue = document.getElementById('rock').value;
        console.log(rockvalue)
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
