class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Людина зайшла в будинок.');
    } else {
      console.log('Двері зачинені! Зайти неможливо.');
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Ключ підійшов. Двері відчинено.');
    } else {
      console.log('Ключ не підходить! Двері залишаються зачиненими.');
    }
  }
}

// Сценарій життя
const key = new Key(); // Створюємо ключ із випадковим підписом
const house = new MyHouse(key); // Створюємо будинок, який відкривається цим ключем
const person = new Person(key); // Даємо цей самий ключ людині

house.openDoor(person.getKey()); // Людина намагається відкрити двері своїм ключем
house.comeIn(person); // Людина заходить, якщо двері відкрилися

export {};