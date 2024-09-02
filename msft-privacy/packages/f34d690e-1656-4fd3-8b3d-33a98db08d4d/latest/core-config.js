(function () {
  window.__MSFT_SDK = window.__MSFT_SDK || {};
  window.__MSFT_SDK.trackerConsent = window.__MSFT_SDK.trackerConsent || {};
  window.__MSFT_SDK.trackerConsent.config = {
    id: 'f34d690e-1656-4fd3-8b3d-33a98db08d4d',
    accountId: 'c0644734-c32d-49d8-a2c2-4ea0afcb81d0',
    kind: 'MICROSOFT.WebConsent',
    name: 'PunitPackage5',
    friendlyName: 'Test-PunitPackage5',
    consentSDKVersion: '1.0.1',
    configurations: {
      assetsPath: '',
      headless: false,
      isGeoTrackingEnabled: true,
      geoTrackingURL: 'https://consent.privacy.purview-service.azure-test.com',
      isConsentMasteringEnabled: false,
      consentRate: {
        url: '',
        isEnabled: false,
        performanceSignalThreshold: 50.0,
      },
    },
    properties: {
      defaultConsentModel: 'PunitWebCM5',
      trackerBlocking: { isEnabled: false, isUnknownTagBlockingEnabled: false },
      purposes: [
        {
          properties: { isEssential: false },
          name: '39s1hd',
          friendlyName: 'TestDummy',
          version: 2,
          objectId: '03c603f0-5d1d-4404-a982-1588ae9bc6ed',
          validations: null,
          lastModifiedAt: '2024-08-14T09:21:17.7268778Z',
        },
        {
          properties: { isEssential: false },
          name: 'ydlvcr',
          friendlyName: 'TestDummy2',
          version: 2,
          objectId: 'd5ee138b-279d-4288-9b77-1061c809d655',
          validations: null,
          lastModifiedAt: '2024-08-14T09:15:20.2582012Z',
        },
        {
          properties: { isEssential: true },
          name: 'PunitPurpose5',
          friendlyName: 'Test-PunitPurpose5',
          version: 1,
          objectId: '472203f7-11e1-4d94-b81f-33aaedfc267d',
          validations: null,
          lastModifiedAt: '2024-08-20T17:57:54.7579904Z',
        },
      ],
    },
    models: [
      {
        name: 'PunitWebCM5',
        friendlyName: 'PunitWebCM5',
        id: '7b59214c-29a0-4ec3-a4a0-59d1e7c7ed5f',
        kind: 'MICROSOFT.WebConsent',
        properties: {
          consentId: '58b45bd3-8b05-4cf3-a601-e43ee4182d1a',
          consentVersion: 1,
          defaultLCID: 'en',
          consentType: 'Explicit',
          startDate: null,
        },
        attributes: [
          { key: 'CountriesOrRegions', value: ['ALL'] },
          { key: 'GeoLocations', value: ['ALL'] },
        ],
        headless: false,
        controls: [
          {
            name: 'MICROSOFT.TrackerCategory',
            type: 'Purpose',
            instances: [
              {
                properties: { isEssential: false },
                name: '39s1hd',
                friendlyName: 'TestDummy',
                version: 2,
                objectId: '03c603f0-5d1d-4404-a982-1588ae9bc6ed',
                validations: null,
                lastModifiedAt: '2024-08-14T09:21:17.7268778Z',
              },
              {
                properties: { isEssential: false },
                name: 'ydlvcr',
                friendlyName: 'TestDummy2',
                version: 2,
                objectId: 'd5ee138b-279d-4288-9b77-1061c809d655',
                validations: null,
                lastModifiedAt: '2024-08-14T09:15:20.2582012Z',
              },
              {
                properties: { isEssential: true },
                name: 'PunitPurpose5',
                friendlyName: 'Test-PunitPurpose5',
                version: 1,
                objectId: '472203f7-11e1-4d94-b81f-33aaedfc267d',
                validations: null,
                lastModifiedAt: '2024-08-20T17:57:54.7579904Z',
              },
            ],
          },
        ],
        translations: ['en'],
        layout: {
          name: 'MICROSOFT.ConsentModelDefaultDialogLayout',
          id: 'MICROSOFT.ConsentModelDefaultDialogLayout',
          version: 1,
          attributes: {},
          components: [
            {
              name: 'MICROSOFT.TrackerCategoryDefault',
              id: 'MICROSOFT.TrackerCategoryDefault',
              version: '1',
            },
          ],
        },
        version: 1,
      },
    ],
    version: 1,
  };
})();
