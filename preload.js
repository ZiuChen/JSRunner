const{readFileSync}=require("fs"),electron=require("electron"),{Buffer}=require("buffer"),vm=require("vm");window.preload={electron,Buffer,require,vm,readFileSync};
