sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.sapdev.threed.zsapdev3dpproduct',
            componentId: 'ZC_SAPDEV_MaterialObjectPage',
            contextPath: '/ZC_SAPDEV_Material'
        },
        CustomPageDefinitions
    );
});