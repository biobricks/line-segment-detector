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
          for(i=0; i < resultCount; i++) {
              ret.push({
                  a1: Module.getValue(outPtr, 'double'),
                  a2: Module.getValue(outPtr+8, 'double'),
                  a3: Module.getValue(outPtr+16, 'double'),
                  a4: Module.getValue(outPtr+24, 'double'),
                  a5: Module.getValue(outPtr+32, 'double'),
                  a6: Module.getValue(outPtr+40, 'double'),
                  a7: Module.getValue(outPtr+48, 'double'),
              });
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
