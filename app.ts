let goodsInWarehouse = [];

class InventoryCard {
  name: string;
  quantity: number;
  sku: string;
  place: object;

  constructor(name: string, quantity: number, sku: string, place: object) {
    this.name = name;
    this.quantity = quantity;
    this.sku = sku;
    this.place = place;
  }
}

function addGoods() {}
