/*
* Created by Steven Lee
* Date: 2022/3/23
* Time: 15:07
* Project: DIY
* */

let obj = {}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
};

// FIXME 最常用
JSON.parse(JSON.stringify(obj))

// FIXME 浅拷贝
function clone1 (target) {
  let newTarget = {}
  for (const key in target) {
    newTarget[key] = target[key]
  }
  return newTarget
}

// FIXME 支持深层对象
function clone2 (target) {
  if (typeof target === 'object') {
    let newTarget = {}
    for (const key in target) {
      newTarget[key] = clone2(target[key])
    }
    return newTarget
  } else {
    return target
  }
}

// FIXME 支持数组
function clone3 (target) {
  if (typeof target === 'object') {
    let newTarget = Array.isArray(target) ? [] : {}
    for (const key in target) {
      newTarget[key] = clone3(target[key])
    }
    return newTarget
  } else {
    return target
  }
}

// FIXME 循环引用
function clone4 (target, map = new Map()) {
  if (typeof target === 'object') {
    let newTarget = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, newTarget)
    
    for (const key in target) {
      newTarget[key] = clone4(target[key], map)
    }
    return newTarget
  } else {
    return target
  }
}

// TODO https://juejin.cn/post/6844903929705136141

// FIXME 获取数据类型
function getType(target) {
  return Object.prototype.toString.call(target);
}

// 使用while实现forEach遍历
function forEach(array, iteratee) {
  let index = -1;
  const length = array.length;
  while (++index < length) {
    iteratee(array[index], index);
  }
  return array;
}

// FIXME 定义常用数据类型 第一部分可继续遍历 第二部分不可遍历
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';

const deepTag = [mapTag, setTag, arrayTag, objectTag]

// FIXME 使用原对象的构造方法 防止原型丢失
function getInit(target) {
  const Ctor = target.constructor;
  return new Ctor();
}

// FIXME 判断基础类型 or 引用类型
function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}

// 复制可遍历数据类型
function clone5 (target, map = new Map()) {
  if (!isObject(target)) { // 基础类型 直接复制
    return target
  }
  
  const type = getType(target)
  let newTarget
  // if (deepTag.includes(type)) {
  //   newTarget = getInit(target, type);
  // }
  
  // 防止循环引用
  if (map.get(target)) {
    return map.get(target)
  }
  map.set(target, newTarget)
  
  // 克隆set
  if (type === setTag) {
    target.forEach(value => {
      newTarget.add(clone5(value,map))
    })
    return newTarget
  }
  
  // 克隆map
  if (type === mapTag) {
    target.forEach((value, key) => {
      newTarget.set(key, clone(value,map))
    })
    return newTarget
  }
  
  // 克隆对象和数组
  const keys = type === arrayTag ? undefined : Object.keys(target);
  forEach(keys || target, (value, key) => {
    if (keys) {
      key = value
    }
    newTarget[key] = clone(target[key], map)
  })
  
  return newTarget
  
  
}

// 克隆Symbol
function cloneSymbol(targe) {
  // return Symbol(targe.description)
  return Object(Symbol.prototype.valueOf.call(targe))
}

// 克隆正则
function cloneReg(targe) {
  const reFlags = /\w*$/;
  const result = new targe.constructor(targe.source, reFlags.exec(targe));
  result.lastIndex = targe.lastIndex;
  return result;
}

