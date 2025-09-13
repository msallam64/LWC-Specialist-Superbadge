import { LightningElement,api } from 'lwc';
const TILE_WRAPPER_SELECTED_CLASS = 'tile-wrapper selected';
const TILE_WRAPPER_UNSELECTED_CLASS = 'tile-wrapper';

export default class BoatTile extends LightningElement {

    @api boat;             // boat data
    @api selectedBoatId;   // currently selected boat Id

    // Background image
    get backgroundStyle() {
        return `background-image:url(${this.boat.Picture__c})`;
    }

    // CSS class based on selection
    get tileClass() {
        return this.selectedBoatId === this.boat.Id
            ? TILE_WRAPPER_SELECTED_CLASS
            : TILE_WRAPPER_UNSELECTED_CLASS;
    }

    // Handle click
    selectBoat() {
        const boatselect = new CustomEvent('boatselect', {
            detail: { boatId: this.boat.Id }
        });
        this.dispatchEvent(boatselect);
    }

}