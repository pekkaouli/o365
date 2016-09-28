/**
 * @ngInject
 */
export default class IFrameController {
  /**
   * Constructor of the class.
   *
   * @param {*}             $scope
   * @param {LoggerService} LoggerService
   */
  constructor($scope, LoggerService) {
    this.logger = LoggerService;
    this.url = '';
    this.IFrameTag = '';

    console.log(LoggerService);

    $scope.$watch('vm.url', (valueNew, valueOld) => {
      if (valueNew && valueNew !== valueOld) {
        this.IFrameTag = `<iframe src='${valueNew}&action=embedview&wdAr=1.7777777777777777' width='1186px' height='691px' frameborder='0'>Tämä on liitetty <a target='_blank' href='https://office.com'>Microsoft Office</a> esitys, jonka tarjoaa <a target='_blank' href='https://office.com/webapps'>Office Online</a>.</iframe>`;
      }
    });
  }

  copiedToClipboard() : void {
    this.logger.success('IFrame tagi kopioitu leikepöydälle.');
  }
}
