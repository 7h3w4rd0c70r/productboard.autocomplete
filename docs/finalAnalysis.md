
# Final Analysis

## Met Goals

* Component is capable to guess user's search term using Google Autocomplete API
* Component is user friendly - antd's AutoComplete met our requirements for nice and intuitive UI

### All our inital goals have been met

## Notes

* While connecting to Google Autocomplete API, we hit on the problem with CROS requests. This forced us to create custom back-end solution, only for forwarding autocomplete queries to google api. BE solution is [available here](https://github.com/7h3w4rd0c70r/google-autocomplete). BE is available on domain googlesuggest.cz, running on VPS (CentOS).

## Time Spent

Inital time estimates on individual tasks have been met. Yet unexpected development of custom BE solution has been necessary. Because of this, we oversteped our time budget with cca .125MD.

### Total time spent of .390MD

## Additional Notes

* Accessibility
    * After small research about accessibility, we conducted that component is accessibile (this conduction comes mostly from [this article](https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b) - the component checks most of the criteria from on accessibility criteria list in this article)
    * Component is accessibile namely thaks to: autofocus; input border; good color contrast; etc.
* Options list loader
    * **Ommited feature**
    * In the interest of user friendly UI we could implement a loader to indicate that the component is fetching data from remote source
    * **Time estimate** - After initial discusion about the feature implementation estimated development time is cca .125MD
