import {TooltipTypeEnum} from "../enums";

/**
 * Mодель описывающая tooltip
 */

export class TooltipModel {
    Text: string
    Type: TooltipTypeEnum

    constructor(obj: Partial<TooltipModel>) {
        Object.assign(this, obj)
    }
}
