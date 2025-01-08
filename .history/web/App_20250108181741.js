
/*
  This code belongs to Pawvan.
  It is part of the stripe_api_inte
  Licensed under MIT.
*/
async function loadWasm(){
    const wasm  = await fetch('main.wasm')
    const buffer = await wasm.arrayBuffer()
    const {instance} =await WebAssembly.instantiate(buffer)
    return instance.exports
}
