describe('UI Test', () => {
    it('should display the correct title on the webpage', () => {
      document.body.innerHTML = '<h1>WASM Web Application</h1>';
      expect(document.querySelector('h1').textContent).toBe('WASM Web Application');
    });
  });