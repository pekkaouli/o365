/**
 * @ngInject
 */
export default class IFrameController {
  /**
   * Constructor of the class.
   */
  constructor() {
    this.url = '';
    this.IFrameTag = `<iframe src='${this.url}' width='1186px' height='691px' frameborder='0'>Tämä on liitetty <a target='_blank' href='https://office.com'>Microsoft Office</a> esitys, jonka tarjoaa <a target='_blank' href='https://office.com/webapps'>Office Online</a>.</iframe>`;
  }
}
