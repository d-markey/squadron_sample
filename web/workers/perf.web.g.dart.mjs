
// Compiles a dart2wasm-generated main module from `source` which can then
// instantiatable via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm modules from `bytes` which is then
// instantiatable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export async function instantiate(modulePromise, importObjectPromise) {
  var moduleOrCompiledApp = await modulePromise;
  if (!(moduleOrCompiledApp instanceof CompiledApp)) {
    moduleOrCompiledApp = new CompiledApp(moduleOrCompiledApp);
  }
  const instantiatedApp = await moduleOrCompiledApp.instantiate(await importObjectPromise);
  return instantiatedApp.instantiatedModule;
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export const invoke = (moduleInstance, ...args) => {
  moduleInstance.exports.$invokeMain(args);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredWasm` is a JS function that takes a module name matching a
  //   wasm file produced by the dart2wasm compiler and returns the bytes to
  //   load the module. These bytes can be in either a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  async instantiate(additionalImports, {loadDeferredWasm} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + js;
    }

    // Converts a Dart List to a JS array. Any Dart objects will be converted, but
    // this will be cheap for JSValues.
    function arrayFromDartList(constructor, list) {
      const exports = dartInstance.exports;
      const read = exports.$listRead;
      const length = exports.$listLength(list);
      const array = new constructor(length);
      for (let i = 0; i < length; i++) {
        array[i] = read(list, i);
      }
      return array;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {

      _10: () => new Array(),
      _13: x0 => x0.length,
      _15: (x0,x1) => x0[x1],
      _31: x0 => new Int32Array(x0),
      _33: x0 => new Uint32Array(x0),
      _38: (o, t) => typeof o === t,
      _39: (o, c) => o instanceof c,
      _67: (o) => !!o,
      _80: Date.now,
      _82: s => new Date(s * 1000).getTimezoneOffset() * 60,
      _83: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      _84: () => {
        let stackString = new Error().stack.toString();
        let frames = stackString.split('\n');
        let drop = 2;
        if (frames[0] === 'Error') {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      _104: s => JSON.stringify(s),
      _105: s => printToConsole(s),
      _106: a => a.join(''),
      _109: (s, t) => s.split(t),
      _116: (s, p, i) => s.indexOf(p, i),
      _122: (a, i) => a.push(i),
      _133: a => a.length,
      _135: (a, i) => a[i],
      _136: (a, i, v) => a[i] = v,
      _139: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _140: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _141: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _142: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _143: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _144: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _145: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _148: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _149: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _152: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _153: o => o.byteLength,
      _156: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _157: (b, o) => new DataView(b, o),
      _158: (b, o, l) => new DataView(b, o, l),
      _159: Function.prototype.call.bind(DataView.prototype.getUint8),
      _160: Function.prototype.call.bind(DataView.prototype.setUint8),
      _161: Function.prototype.call.bind(DataView.prototype.getInt8),
      _162: Function.prototype.call.bind(DataView.prototype.setInt8),
      _163: Function.prototype.call.bind(DataView.prototype.getUint16),
      _164: Function.prototype.call.bind(DataView.prototype.setUint16),
      _165: Function.prototype.call.bind(DataView.prototype.getInt16),
      _166: Function.prototype.call.bind(DataView.prototype.setInt16),
      _167: Function.prototype.call.bind(DataView.prototype.getUint32),
      _168: Function.prototype.call.bind(DataView.prototype.setUint32),
      _169: Function.prototype.call.bind(DataView.prototype.getInt32),
      _170: Function.prototype.call.bind(DataView.prototype.setInt32),
      _175: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _176: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _177: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _178: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _195: o => Object.keys(o),
      _200: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      _222: (x0,x1,x2) => x0.postMessage(x1,x2),
      _249: () => globalThis.self,
      _250: () => new MessageChannel(),
      _251: x0 => x0.close(),
      _252: x0 => x0.close(),
      _253: x0 => x0.close(),
      _254: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._254(f,arguments.length,x0) }),
      _255: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._255(f,arguments.length,x0) }),
      _256: (x0,x1,x2) => x0.postMessage(x1,x2),
      _257: (x0,x1) => x0.postMessage(x1),
      _262: (x0,x1) => globalThis.Object.is(x0,x1),
      _271: (x0,x1) => x0.push(x1),
      _272: (x0,x1) => x0.push(x1),
      _273: () => new Map(),
      _274: (x0,x1,x2) => x0.set(x1,x2),
      _275: () => new Set(),
      _276: (x0,x1) => x0.add(x1),
      _277: x0 => globalThis.BigInt(x0),
      _278: (x0,x1) => x0.at(x1),
      _279: x0 => x0.entries(),
      _280: (x0,x1) => x0.at(x1),
      _281: (x0,x1) => x0.at(x1),
      _282: x0 => x0.values(),
      _283: x0 => x0.toString(),
      _288: x0 => x0.length,
      _299: x0 => x0.buffer,
      _315: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      _316: (x0,x1) => x0.exec(x1),
      _322: o => o === undefined,
      _341: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      _343: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      _344: o => o instanceof RegExp,
      _345: (l, r) => l === r,
      _346: o => o,
      _347: o => o,
      _348: o => o,
      _349: b => !!b,
      _350: o => o.length,
      _353: (o, i) => o[i],
      _354: f => f.dartFunction,
      _355: l => arrayFromDartList(Int8Array, l),
      _356: l => arrayFromDartList(Uint8Array, l),
      _357: l => arrayFromDartList(Uint8ClampedArray, l),
      _358: l => arrayFromDartList(Int16Array, l),
      _359: l => arrayFromDartList(Uint16Array, l),
      _360: l => arrayFromDartList(Int32Array, l),
      _361: l => arrayFromDartList(Uint32Array, l),
      _362: l => arrayFromDartList(Float32Array, l),
      _363: l => arrayFromDartList(Float64Array, l),
      _365: (data, length) => {
        const getValue = dartInstance.exports.$byteDataGetUint8;
        const view = new DataView(new ArrayBuffer(length));
        for (let i = 0; i < length; i++) {
          view.setUint8(i, getValue(data, i));
        }
        return view;
      },
      _366: l => arrayFromDartList(Array, l),
      _367: () => ({}),
      _368: () => [],
      _369: l => new Array(l),
      _370: () => globalThis,
      _373: (o, p) => o[p],
      _374: (o, p, v) => o[p] = v,
      _375: (o, m, a) => o[m].apply(o, a),
      _377: o => String(o),
      _379: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        return 17;
      },
      _384: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _398: x0 => x0.flags,
      _405: (o, p) => o[p],
      _408: x0 => x0.random(),
      _409: x0 => x0.random(),
      _413: () => globalThis.Math,
      _415: Function.prototype.call.bind(Number.prototype.toString),
      _2829: x0 => x0.port1,
      _2830: x0 => x0.port2,
      _2836: (x0,x1) => x0.onmessage = x1,
      _2898: (x0,x1) => x0.onmessage = x1,

    };

    const baseImports = {
      dart2wasm: dart2wasm,


      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
    };

    const deferredLibraryHelper = {
      "loadModule": async (moduleName) => {
        if (!loadDeferredWasm) {
          throw "No implementation of loadDeferredWasm provided.";
        }
        const source = await Promise.resolve(loadDeferredWasm(moduleName));
        const module = await ((source instanceof Response)
            ? WebAssembly.compileStreaming(source, this.builtins)
            : WebAssembly.compile(source, this.builtins));
        return await WebAssembly.instantiate(module, {
          ...baseImports,
          ...additionalImports,
          "wasm:js-string": jsStringPolyfill,
          "module0": dartInstance.exports,
        });
      },
    };

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      "deferredLibraryHelper": deferredLibraryHelper,
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}

