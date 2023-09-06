function mainMenu() {
    var userchoise = prompt("- to add goods to warehouse - please enter add, \n - to remove goods from warehouse - please enter - remove, \n, to edit warehouse inventory card - please enter edit, \n - to list of all goods - enter list.");
    switch (userchoise) {
        case "add":
            addGoods();
            break;
        case "remove":
            removeGoods();
            break;
        case "edit":
            editGoods();
            break;
        case "list":
            listOfgoods();
            break;
        default:
            mainMenu();
    }
}
function listOfgoods() {
    alert(JSON.stringify(goodsInWarehouse));
    mainMenu();
}
var goodsInWarehouse = [];
// class InventoryCard {
//   name: string;
//   quantity: number;
//   sku: string;
//   place: object;
//   constructor(name: string, quantity: number, sku: string, place: object) {
//     this.name = name;
//     this.quantity = quantity;
//     this.sku = sku;
//     this.place = place;
//   }
// }
function addGoods() {
    var newGoodsName = prompt("Please enter the name of the good");
    var newGoodsquantity = Number(prompt("Please enter quantity of the good"));
    var newGoodsSku = prompt("Please enter the SKU of the good");
    var newGoodsPlace = Number(prompt("Please enter the place of the good"));
    goodsInWarehouse.push({
        goodsName: newGoodsName,
        goodsquantity: newGoodsquantity,
        goodsSku: newGoodsSku,
        goodsPlace: newGoodsPlace
    });
    console.log(goodsInWarehouse);
    mainMenu();
}
mainMenu();
