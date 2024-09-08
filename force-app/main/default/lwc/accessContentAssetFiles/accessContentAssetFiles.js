import { LightningElement, wire } from 'lwc';
import ASSET_FILES from '@salesforce/contentAssetUrl/Trailhead_asset_file_logo';

import GREETING from '@salesforce/label/c.greeting';
import SALESFORCE_PLATFORM from '@salesforce/label/c.salesforcePlatform';

import USER_Id from '@salesforce/user/Id'
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/user.Name'

import DISPLAY_TEXT from '@salesforce/customPermission/displaayText';

import { loadStyle,loadScript } from 'lightning/platformResourceLoader';
import ANIMATE from '@salesforce/resourceUrl/ThirdPartyCSS';
import MOMENT from '@salesforce/resourceUrl/ThirdPartyJSFile';
export default class AccessContentAssetFiles extends LightningElement {

    contentTrailheadFile = ASSET_FILES;
    userId = USER_Id;
    
    label = {
        greeting : GREETING,
        platform : SALESFORCE_PLATFORM
    }

    // to get the user Id we use @salesforce/user/Id
    // but to get current user name, profle we have to use getRecord
    isFirstLoad = true;
    name = "";
    displayDate = "";

    

    @wire(getRecord, {
    recordId: USER_Id,
    fields: NAME_FIELD,
  })
    wired_user_output({ data, error }) {
        if (data) {
            console.log('logged in user Details', data);
           this.name = getFieldValue(data, NAME_FIELD)
        } else if (error) {
            console.log(
                'Failed to get the logged in user details',error);
        }
    }
    
    get checkPermission() {
        return DISPLAY_TEXT;
    }

    renderedCallback() { 
        if (this.isFirstLoad) {

             Promise.all([
            loadStyle(this, ANIMATE),
            loadScript(this, MOMENT),
             ]).then(() => {
                 console.log('File loaded successfully');
                 this.fatchDate();
             })
                 .catch((error) => {
                     console.log('file load failed', error);
            })
        }
    }

    fatchDate() {
        this.displayDate = moment().format('LLLL');
    }
        
}