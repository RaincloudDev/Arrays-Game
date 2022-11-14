const main = document.querySelector('main');
let string = '';
let newStoreName = '';
let newStoreColor1 ='';
let newStoreColor2 ='';
let newShopKeep='';

let newManager= ['Lax', 'Medium', 'Stiff'];

const ownedShops =[
    {           
        shopName: 'ace', //player chooses name
                
        color1: 'blue',  
        color2: 'pink', //player chooses colors
        shopKeep: 'jim', //player names shopkeep
        manager: 'Lax',//random as of now
        
        level: '0',  //player pays to upgrade level
        production: '1', //in Cr., affected by level
        cost: '1', //cost mod per level to upgrade. math this with level in the looop
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
            <p>level: ${ownedShops[i].level}</p>
            
            <p>production: ${ownedShops[i].production}</p>
        </div>
        <h3 class="store-shopKeep">Shop Keep: ${ownedShops[i].shopKeep}</h4>
        <h4 class="mgmt">Mgmt: ${ownedShops[i].manager}</h4>
        <p><i> + ${ownedShops[i].perks[0]} to stores with ${ownedShops[i].perkMgmt} Mgmt</i></p>
        <button onclick="upgradeShop()" type="submit">Upgrade</button>
    </div>
        `;
        main.innerHTML=string;
    }
    console.log(newStoreName);
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
        
        level: '0', 
        production: '2', 
        cost: '2',
        perks: [0, 1, 2, 2, 3], 
        perkMgmt: `${newManager[num2]}`
    });
    console.log(newStoreName);
   showStore();
   console.log(newStoreName);
}
