import * as PIXI from 'pixi.js';
import { Spine } from 'pixi-spine';

const app = new PIXI.Application();
document.body.appendChild(app.view);

app.loader
    .add('spineCharacter', './assets/export/goblins-pro.json')
    .load(function (loader, resources) {
        const animation = new Spine(resources.spineCharacter.spineData);

        // add the animation to the scene and render...
        app.stage.addChild(animation);

        if (animation.state.hasAnimation('walk')) {
            // run forever, little boy!
            animation.state.setAnimation(0, 'walk', true);
            // dont run too fast
            animation.state.timeScale = 0.1;
        }

        app.start();
    });