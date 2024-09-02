# Consent SDK

A JS library to manage privacy consent on client's website

## Terms to consider

* ### **Event**

    As the name suggests, an event is something that happened after which we can do certain things. These events are custom and should not be confused with DOM events. We have our own set of public and private events managed via Event Bus.

* ### **Event Bus**

    Custom in-memory events management system that will manage all the events on client's website.

* ### **Store**

    A state management system that serves as a centralized storage for all the configurations, data and browser API used throughout the SDK.

## Public APIs

| Name  | Description  | Parameters  | Return Type |
| :------ | :------------ | :------------: | :------------: |
| init  | This method should be invoked by user to initialize SDK with required parameters.  | *config*: [InitConfig](#init-config) | - |
| getConsent  | This method will return user\'s consent preference.  | - | [UserConsent](#userconsent) |
| getTrackerCategories  | This method will return all available tracker categories.  | -  | [Tracker Category](#tracker-category) [ ]  |
| getConsentModels | This method will return all available consent model ids. | - | [Consent Model External](#consent-model-external) [ ] |
| on | This method is used to register your callbacks for given event. | *eventName*: string, *callback*: Function | - |
| trigger | This method is used to trigger certain event along with its payload if any. | *eventName*: string, *payload*: any | - |
| off | This method is used to de-register your callbacks for given event. | *eventName*: string, *eventIdOrCallback*: number \| Function | - |

## **Types**

## <a name="init-config">InitConfig</a>

Init Configuration.

* ### `mode` (string, enum)

    This field signifies if user wants to show their own banner, they can opt for headless mode
    This element must be one of the following enum values:
  * `Default`
  * `HeadLess`

* ### `userDetails` (object)

    Session details of end user.
    Properties of the `userDetails` object:

* #### `id` (string, required)

* ### `styles` (array)

    Banner related styles list
    The object is an array with all elements of the type `object`.
    The array object has the following properties:

* #### `type` (string, enum, required)

      Defines the type of style.
      This element must be one of the following enum values:
  * `Url`
  * `Text`

* #### `value` (string, required)

      Provides actual style value it will be stylesheet url in case of url or css in case of text.

* ### `LCID` (string)

    override language detected from browser's settings

* ### `countryOrRegion` (string)

    if user wants to provide country details, then will skip geo location call

## <a name="user-consent">UserConsent</a>

User Consent object.

* ### `preferences` (object, required)

    Key value pair of preferences with key as category name and value as '0' or '1'.

## <a name="tracker-category">Tracker Category</a>

Tracker category details.

* ### `categoryName` (string)

    Category name

* ### `isEssential` (boolean)

    whether or not category is essential

## <a name="consent-model-external">Consent Model External</a>

Consent model basic info.

* ### `name` (string)

    Unique name of consent model

* ### `version` (number)

    Consent model version number

* ### `selected` (boolean)

    Value will be set to true if it is current selected model.

## <a name="template-info">Template Info</a>

Template info

* ### `templateId` (string)

    Template id.

## <a name="update-consent-payload">Update Consent Payload</a>

Update Consent Payload.

* ### `consent` ([UserConsent](#userconsent))

    User's Consent.

## Events

List of events used by the SDK:

* ### Public Events

  * *ConsentChanged :* This event will be triggered every time user's consent is updated. (no payload)
  * *ShowConsentNotice :* This event is triggered to show consent notice. (no payload)
  * *CloseConsentNotice :* This event is triggered to close consent notice. (no payload)
  * *AcceptAll :* This event means user has accepted all non-essential categories. (no payload)
  * *RejectAll :* This event means user has rejected all non-essential categories. (no payload)
  * *ShowTemplate :* This event is triggered to show a particular template. (payload: [Template Info](#template-info))
  * *CloseTemplate :* This event is triggered to close a particular template. (payload: [Template Info](#template-info))
  * *UpdateConsent :* This event means user is requesting to change consent. (payload: [Update Consent Payload](#update-consent-payload))