/**
 * Created by 2500K on 13/09/2014.
 */
'use strict';

describe('gpAdminApp', function() {

    beforeEach(function () {
        browser.get('index.html');
    });

    it('should automatically redirect to / when location hash is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });
});
