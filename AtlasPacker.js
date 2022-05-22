// import * as PIXI from './node_modules/pixi.js/dist/browser/pixi.min.mjs';
// // import { Spine } from 'pixi-spine';

// const app = new PIXI.Application();


// document.body.appendChild(app.view);

// app.loader.add('bunny', 'assets/images/4.png').load((loader, resources) => {
//     const bunny = new PIXI.Sprite(resources.bunny.texture);

//     bunny.x = app.renderer.width / 2;
//     bunny.y = app.renderer.height / 2;

//     // Rotate around the center
//     bunny.anchor.x = 0.5;
//     bunny.anchor.y = 0.5;

//     app.stage.addChild(bunny);

//     // Listen for frame updates
//     app.ticker.add(() => {
//         bunny.rotation += 0.01;
//     });
// });

import * as PIXI from './node_modules/pixi.js/index'

import { Spine } from './node_modules/pixi-spine/index';

const app = new PIXI.Application();
document.body.appendChild(app.view);

app.loader
    .add('spineCharacter', 'spine-data-1/HERO.json')
    .load(function (loader, resources) {
        const animation = new Spine(resources.spineCharacter.spineData);

        // add the animation to the scene and render...
        app.stage.addChild(animation);

        if (animation.state.hasAnimation('run')) {
            // run forever, little boy!
            animation.state.setAnimation(0, 'run', true);
            // dont run too fast
            animation.state.timeScale = 0.1;
        }

        app.start();
    });