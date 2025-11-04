sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.sapdev.threed.zsapdev3dpproduct',
            componentId: 'ZC_SAPDEV_MaterialList',
            contextPath: '/ZC_SAPDEV_Material'
        },
        CustomPageDefinitions
    );
});