// import * as PIXI from 'pixi.js';

// const app = new PIXI.Application();

// // The application will create a canvas element for you that you
// // can then insert into the DOM.
// document.body.appendChild(app.view);

// // load the texture we need
// PIXI.loader.add('bunny', './assets/images/4.png').load((loader, resources) => {

//     // This creates a texture from a 'bunny.png' image.
//     const bunny = new PIXI.Sprite(resources.bunny.texture);

//     // Setup the position of the bunny
//     bunny.x = app.renderer.width / 2;
//     bunny.y = app.renderer.height / 2;

//     // Rotate around the center
//     bunny.anchor.x = 0.5;
//     bunny.anchor.y = 0.5;

//     // Add the bunny to the scene we are building.
//     app.stage.addChild(bunny);

//     // Listen for frame updates
//     app.ticker.add(() => {
//         // each frame we spin the bunny around a bit
//         bunny.rotation += 0.01;
//     });
// });

import _ from 'lodash';

function component() {
    const element = document.createElement('div');

  // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());