const main = document.querySelector('main');
const level = document.getElementById('level');
const production = document.getElementById('production');

let empire = '';        //prompt to name the empire.

let string = '';        //html string 
let newStoreName = '';  //newStore variables customize new stores
let newStoreColor1 =''; //bg color
let newStoreColor2 =''; //text color
let newShopKeep='';     //new store shopkeep

//adding math stuffs. 
let money = 5;          //start with 5 dollars.
let prodMod;            //production modifier, increases each time you buy a new store
let costMod;            //cost modifier, increases with each building and upgrade. make the player decide to upgrade or buy more shops





let newManager= ['Lax', 'Medium', 'Stiff'];

const ownedShops =[
    {           
        shopName: 'ace', //player chooses name
                
        color1: 'blue',  
        color2: 'pink', //player chooses colors
        shopKeep: 'jim', //player names shopkeep
        manager: 'Lax',//random as of now
        
        level: 0,  //player pays to upgrade level
        production: 1, //in Cr., affected by level
        cost: 1, //cost mod per level to upgrade. math this with level in the looop
        perks: [0, 1, 2, 2, 3], //perks effect management. each building targets its own kind of management, boosting the stores that use that manager. perks are fixed.
        perkMgmt: 'Lax'
    },
  
];

//init
showStore();

//add another array using a button. then make it cosr money.

function showStore(){
//displays the new store.
    for (let i=0; i<ownedShops.length; i++){
        
        string += `
        <div class="store-container" style="background-color: ${ownedShops[i].color1}; color:${ownedShops[i].color2};">
        <h1>${ownedShops[i].shopName}</h1>
        <div class="store-stats">
            <p id="level">level: ${ownedShops[i].level}</p>
            
            <p id="production">production: ${ownedShops[i].production}</p>
        </div>
        <h3 class="store-shopKeep">Shop Keep: ${ownedShops[i].shopKeep}</h4>
        <h4 class="mgmt">Mgmt: ${ownedShops[i].manager}</h4>
        <p><i> + ${ownedShops[i].perks[0]} to stores with ${ownedShops[i].perkMgmt} Mgmt</i></p>
        <button onclick="upgradeShop(${i})" type="submit">Upgrade</button>
    </div>
        `;
        main.innerHTML=string;
        // level.innerHTML=ownedShops[i].level;
        // production.innerHTML=ownedShops[i].production;
    }
    console.log(newStoreName);
}

function upgradeShop(id){
    //id is passed in the loop as i when the button is created so this always points to the correct shop.
    //console.log(`${money} minus ${ownedShops[id].cost} is`);
    money = (money - ownedShops[id].cost);                                      //pay the cost of the shop
    //console.log(money);
    
    //apply level mods to shop
    ownedShops[id].level += 1;
    //update shop stats and cost.
    costMod += (id*.27);
    prodMod += (id*.3);
    ownedShops[id].cost += costMod;
    ownedShops[id].production += prodMod;     
    
    return;
}

//display the stores 

function buyStore(){
    string = '';
    newShopName= prompt('datNameTho');
    newStoreColor1 = prompt ('Background color');
    newStoreColor2 = prompt ('Font Color');
    newShopKeep= prompt('Name your guy')
    console.log(newStoreName);
    let newManager= ['Lax', 'Medium', 'Stiff'];
    let num=Math.floor(Math.random() * 3)
    let num2=Math.floor(Math.random() * 3);
    ownedShops.push(
    {           
        shopName: `${newShopName}`,
                
        color1: `${newStoreColor1}`,  
        color2: `${newStoreColor2}`, 
        shopKeep: `${newShopKeep}`,
        manager: `${newManager[num]}`,
        
        level: 0, 
        production: 2, 
        cost: 2,
        perks: [0, 1, 2, 2, 3], 
        perkMgmt: `${newManager[num2]}`
    });
    console.log(newStoreName);
   showStore();
   console.log(newStoreName);
}
