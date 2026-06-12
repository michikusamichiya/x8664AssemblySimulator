class int64 {
    constructor(v) {
        this.v = BigInt.asIntN(64, BigInt(v));
    }

    add(x) {
        this.v = BigInt.asIntN(64, this.v + x.v);
    }

    xor(x) {
        this.v = BigInt.asIntN(64, this.v ^ x.v);
    }

    not() {
        this.v = BigInt.asIntN(64, ~this.v);
    }
}