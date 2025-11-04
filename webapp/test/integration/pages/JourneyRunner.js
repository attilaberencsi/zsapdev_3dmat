sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/sapdev/threed/zsapdev3dpproduct/test/integration/pages/ZC_SAPDEV_MaterialList",
	"com/sapdev/threed/zsapdev3dpproduct/test/integration/pages/ZC_SAPDEV_MaterialObjectPage"
], function (JourneyRunner, ZC_SAPDEV_MaterialList, ZC_SAPDEV_MaterialObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/sapdev/threed/zsapdev3dpproduct') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_SAPDEV_MaterialList: ZC_SAPDEV_MaterialList,
			onTheZC_SAPDEV_MaterialObjectPage: ZC_SAPDEV_MaterialObjectPage
        },
        async: true
    });

    return runner;
});

