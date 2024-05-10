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

function ClassicTea()
{
    let choose = document.getElementById('choose-id1').innerText = ('Classic Tea');
    let percent = 0.20;
    let inputClassicTea = document.getElementById('SulfurInput').value;
    let RockSulfurPercentResult =  inputClassicTea * sulfurRock * percent;
    let RockSulfurResult = inputClassicTea * sulfurRock + RockSulfurPercentResult;
    document.getElementById('rock').innerText = (RockSulfurResult);
}
