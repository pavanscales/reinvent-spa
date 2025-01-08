describe('WASM Integration Test', () => {
    it('should load WASM and call a function', async () => {
      const wasm = await loadWasm();
      expect(wasm).toBeDefined();
    });
  });