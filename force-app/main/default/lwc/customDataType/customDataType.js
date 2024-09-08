import LightningDataTable from 'lightning/datatable';

import customNameTemplate from './customName.html';
import customImageTemplate from './customImage.html';
import customRankTemplate from './customRank.html';

import customPickListTemplate from './customPickList.html';
import customPickListEditTemplate from './customPickListEdit.html';

export default class CustomDataType extends LightningDataTable {

  static customTypes = {
    customName: {
      template: customNameTemplate,
      standardCellLayout: true,
      typeAttributes: ["contactName"]
    },
      
    customImage: {
      template: customImageTemplate,
      standardCellLayout: true,
      typeAttributes: ["pictureUrl"]
    },

    customRank: {
      template: customRankTemplate,
      standardCellLayout: false,
      typeAttributes: ["RRankIcon"]
    },
      
    customPickList: {
      template: customPickListTemplate,
      editTemplate:customPickListEditTemplate,
      standardCellLayout: true,
      typeAttributes: ["options", "value", "context"]
    }
      
  };

}