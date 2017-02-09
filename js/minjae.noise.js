//noise function

function noiseGen (subdivisions, heightScale) {
    this.sideVtxCount = subdivisions + 1;
    this.heightScale = heightScale;
    this.slowgrowthfactor = 0.2;
    this.xseeds = new Array(subdivisions + 1);
    this.yseeds = new Array(subdivisions + 1);
    this.initiated = false;

    this.getHeightAt = function (i) {
        if (!this.initiated) {
            this.init();
        }
        return (this.getxh(this.i2x(i)) + this.getyh(this.i2y(i)));
    }

    this.init = function () {
        this.hslg = Math.log2(this.heightScale);
        for(var j = 0; j < this.sideVtxCount; j++) {
            this.xseeds[j] = 0;
            this.yseeds[j] = 0;
            for(var k = 1; k <= this.hslg; k++) {
                this.xseeds[j] += Math.pow(2,k-1)*Math.random();
                this.yseeds[j] += Math.pow(2,k-1)*Math.random();
            }
        }
        this.initiated = true;
    }

    this.reseed = function () {
        this.initiated = false;
    }

    this.getxh = function (x) {
        return this.xseeds[x];
    }

    this.getyh = function (y) {
        return this.yseeds[y];
    }

    this.i2x = function (i) {
        return i%this.sideVtxCount;
    }

    this.i2y = function (i) {
        return Math.floor((i)/this.sideVtxCount);
    }    
}