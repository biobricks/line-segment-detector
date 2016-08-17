
var Module = {
  lsd: function(image, width, height) {
      var ret;
      var resultCountPtr = Module._malloc(8);
      var dataPtr = Module._malloc(width * height * 8);
      
      try {

          Module.HEAPF64.set(new Float64Array(image), dataPtr/8);

          var outPtr = Module._lsd(resultCountPtr, dataPtr, width, height);
          
          var resultCount = Module.getValue(resultCountPtr, 'i32');
          
          ret = new Array();
          var i;
          var curPtr = outPtr;
          for(i=0; i < resultCount; i++) {
              ret.push({
                  x1: Module.getValue(curPtr, 'double'),
                  y1: Module.getValue(curPtr+8, 'double'),
                  x2: Module.getValue(curPtr+16, 'double'),
                  y2: Module.getValue(curPtr+24, 'double'),
                  width: Module.getValue(curPtr+32, 'double'),
                  p: Module.getValue(curPtr+40, 'double'),
                  minusLogNFA: Module.getValue(curPtr+48, 'double'),
              });
              curPtr += 56;
          }

      } finally {
          Module._free(dataPtr);
          Module._free(resultCountPtr);
          if(outPtr) {
              Module._free(outPtr);
          }
      }
      return ret;

  }
}
