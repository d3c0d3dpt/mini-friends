const TEST_THEMES = [
  ["Light Theme", "light"],
  ["Dark Theme", "dark"],
];

describe("Rendered as expected", () => {
  for (const [theme, colorMode] of TEST_THEMES) {
    describe(theme, () => {
      before(() => {
        cy.visit("http://localhost:3000", {
          onBeforeLoad(win) {
            win.localStorage.setItem("nuxt-color-mode", colorMode);
          },
        }).then(() => {
          cy.get("header .btn.btn-circle svg");
        });
      });

      it("Desktop", () => {
        cy.viewport("macbook-15").then(() => {
          cy.document().toMatchImageSnapshot();
        });
      });

      it("Mobile", () => {
        cy.viewport("iphone-xr").then(() => {
          cy.document().toMatchImageSnapshot();
        });
      });
    });
  }
});
