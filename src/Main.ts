/* -----------------------------------------------
/* Author : Matteo Bruni - https://www.matteobruni.it
/* MIT license: https://opensource.org/licenses/MIT
/* Demo / Generator : https://particles.matteobruni.it/
/* GitHub : https://www.github.com/matteobruni/tsparticles
/* How to use? : Check the GitHub README
/* v1.11.0
/* ----------------------------------------------- */
import { Container } from "./Classes/Container";
import { Loader } from "./Classes/Loader";
import { IOptions } from "./Interfaces/Options/IOptions";
import { RecursivePartial } from "./Types/RecursivePartial";

declare global {
    interface Window {
        particlesJS: any;
        tsParticles: Main;
        pJSDom: () => Container[];
    }
}

/* ---------- global functions - vendors ------------ */

window.customRequestAnimationFrame = (() => {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        ((callback) => window.setTimeout(callback, 1000 / 60));
})();

window.customCancelRequestAnimationFrame = (() => {
    return window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout
})();

/* ---------- tsParticles functions - start ------------ */

/**
 * Main class for creating the singleton on window.
 * It's a proxy to the static [[Loader]] class
 */
class Main {
    /**
     * Loads an options object from the provided array to create a [[Container]] object.
     * @param tagId the particles container element id
     * @param params the options array to get the item from
     * @param index if provided gets the corresponding item from the array
     */
    public async loadFromArray(tagId: string,
        params: RecursivePartial<IOptions>[],
        index?: number): Promise<Container | undefined> {
        return Loader.loadFromArray(tagId, params, index);
    }

    /**
     * Loads the provided options to create a [[Container]] object.
     * @param tagId the particles container element id
     * @param params the options object to initialize the [[Container]]
     */
    public async load(tagId: string, params: RecursivePartial<IOptions>): Promise<Container | undefined> {
        return Loader.load(tagId, params);
    }

    /**
     * Loads the provided json with a GET request. The content will be used to create a [[Container]] object.
     * This method is async, so if you need a callback refer to JavaScript function `fetch`
     * @param tagId the particles container element id
     * @param pathConfigJson the json path to use in the GET request
     */
    public loadJSON(tagId: string, pathConfigJson: string): Promise<Container | undefined> {
        return Loader.loadJSON(tagId, pathConfigJson);
    }

    /**
     * Adds an additional click handler to all the loaded [[Container]] objects.
     * @param callback the function called after the click event is fired
     */
    public setOnClickHandler(callback: EventListenerOrEventListenerObject): void {
        Loader.setOnClickHandler(callback);
    }

    /**
     * All the [[Container]] objects loaded
     */
    public dom(): Container[] {
        return Loader.dom();
    }

    /**
     * Retrieves a [[Container]] from all the objects loaded
     * @param index the object index
     */
    public domItem(index: number): Container {
        return Loader.domItem(index);
    }
}

const tsParticles = new Main();

Object.freeze(tsParticles);

/**
 * The new singleton, replacing the old particlesJS
 */
window.tsParticles = tsParticles;

Object.freeze(window.tsParticles);

/* particles.js compatibility */

/**
 * Loads the provided options to create a [[Container]] object.
 * @deprecated this method is obsolete, please use the new tsParticles.load
 * @param tagId the particles container element id
 * @param params the options object to initialize the [[Container]]
 */
window.particlesJS = function (tagId: string, params: RecursivePartial<IOptions>) {
    tsParticles.load(tagId, params);
};

/**
 * Loads the provided json with a GET request. The content will be used to create a [[Container]] object.
 * @deprecated this method is obsolete, please use the new tsParticles.loadJSON
 * @param tagId the particles container element id
 * @param pathConfigJson the json path to use in the GET request
 * @param callback the function called after the [[Container]] object is loaded that will be passed as a parameter
 */
window.particlesJS.load = function (tagId: string, pathConfigJson: string, callback: (container: Container) => void) {
    tsParticles.loadJSON(tagId, pathConfigJson).then((container) => {
        if (container) {
            callback(container);
        }
    });
};

/**
 * Adds an additional click handler to all the loaded [[Container]] objects.
 * @deprecated this method is obsolete, please use the new tsParticles.setOnClickHandler
 * @param callback the function called after the click event is fired
 */
window.particlesJS.setOnClickHandler = function (callback: EventListenerOrEventListenerObject) {
    tsParticles.setOnClickHandler(callback);
};

/**
 * All the [[Container]] objects loaded
 * @deprecated this method is obsolete, please use the new tsParticles.dom
 */
window.pJSDom = () => {
    if (console) {
        console.warn("this method is obsolete, please use the new tsParticles.dom");
    }

    return window.tsParticles.dom();
};
