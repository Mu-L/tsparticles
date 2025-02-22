import { EasingType, type EasingTypeAlt, type IOptionLoader, type RecursivePartial, isNull } from "@tsparticles/engine";
import type { IRepulseBase } from "../Interfaces/IRepulseBase.js";

/**
 */
export abstract class RepulseBase implements IRepulseBase, IOptionLoader<IRepulseBase> {
    distance;
    duration;
    easing: EasingType | EasingTypeAlt;
    factor;
    maxSpeed;
    speed;

    constructor() {
        this.distance = 200;
        this.duration = 0.4;
        this.factor = 100;
        this.speed = 1;
        this.maxSpeed = 50;
        this.easing = EasingType.easeOutQuad;
    }

    load(data?: RecursivePartial<IRepulseBase>): void {
        if (isNull(data)) {
            return;
        }

        if (data.distance !== undefined) {
            this.distance = data.distance;
        }

        if (data.duration !== undefined) {
            this.duration = data.duration;
        }

        if (data.easing !== undefined) {
            this.easing = data.easing;
        }

        if (data.factor !== undefined) {
            this.factor = data.factor;
        }

        if (data.speed !== undefined) {
            this.speed = data.speed;
        }

        if (data.maxSpeed !== undefined) {
            this.maxSpeed = data.maxSpeed;
        }
    }
}
