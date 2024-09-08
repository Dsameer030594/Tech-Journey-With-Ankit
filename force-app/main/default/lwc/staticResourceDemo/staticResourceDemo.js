import { LightningElement } from 'lwc';
import TRAILHEAD_LOGO from '@salesforce/resourceUrl/MyLogo';
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';'
export default class StaticResourceDemo extends LightningElement {

    myLogoImage = TRAILHEAD_LOGO;
}