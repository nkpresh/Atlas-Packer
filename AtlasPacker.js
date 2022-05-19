import * as PIXI from './node_modules/pixi.js/dist/browser/pixi.min.mjs';

const app = new PIXI.Application();


document.body.appendChild(app.view);

app.loader.add('bunny', 'assets/images/4.png').load((loader, resources) => {
    const bunny = new PIXI.Sprite(resources.bunny.texture);

    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;

    // Rotate around the center
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    app.stage.addChild(bunny);

    // Listen for frame updates
    app.ticker.add(() => {
        bunny.rotation += 0.01;
    });
});