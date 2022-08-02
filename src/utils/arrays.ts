
// a dummy constant. Something has to be exported from this file and imported where the prototypes should be available.
export const ArrayPrototypes = 0;

declare global {
  interface Array<T> {
    remove(o: T): Array<T>;
  }
}

declare global {
  interface Array<T> {
    average(): T;
  }
}

declare global {
  interface Array<T> {
    sum(): T;
  }
}

declare global {
  interface Array<T> {
    groupBy<K>(keyGetter: (key: T) => K): Map<K, T[]>;
  }
}

Array.prototype.remove = function (item) {
  const index = this.indexOf(item);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
}

Array.prototype.average = function () {
  return this.reduce((a, b) => a + b) / this.length;
}

Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
}

Array.prototype.groupBy = function <T, K>(keyGetter: (key: T) => K) {
  const map = new Map<K, T[]>();
  this.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}