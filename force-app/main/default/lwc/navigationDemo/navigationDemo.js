import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavigationDemo extends NavigationMixin(LightningElement) {


    navHomeClickHandler(){
        let pageReg = {
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        };
        this[NavigationMixin.Navigate](pageReg);
    } 

    navAccListViewClickHandler(){
        let pageRef = // Navigates to account list with the filter set to Recent.
        {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'PlatinumandGoldSLACustomers'
          }
        };
        this[NavigationMixin.Navigate](pageRef);

    }

    createNewAccClickHandler(){
      let pageReff = {
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Account',
            actionName: 'new'
        } 
    };
    this[NavigationMixin.Navigate](pageReff);
    }

    createNewAccDefaultValClickHandler(){
     const defaultValues = encodeDefaultFieldValues({
        Industry :'Energy',
        Rating : 'Hot'
     });

     let pageRefff = {
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Account',
            actionName: 'new'
        },
        state: {
            defaultFieldValues : defaultValues
            
        }
    };
    this[NavigationMixin.Navigate](pageRefff);
    }

    editAccClickHandler(){
        let pageRef = {
            type: 'standard__recordPage',
            attributes: {
                recordId: '0015j00001XE9xyAAD',
                objectApiName: 'Account',
                actionName: 'edit'
            }
    };
    this[NavigationMixin.Navigate](pageRef);
    }
}