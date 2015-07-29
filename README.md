# ProcessWire Module "AssistedURL Field" #

This module offers you a new field type **AssistedURL Field**, providing and input field for storing absolute and relative URLs.
The field type adds a button to open the URL chooser dialog known from the CKEditor link feature without the tab
navigation bar for specifying link attributes.
 
Using the URL chooser dialog the editor may select URLs from internal pages or uploaded files via a search field with 
auto-completion, a page tree control, and a file selector control.

## Installing the module ##

Just copy the module files into you `site/modules/` folder or downoload it via the ModuleManager.  
Your directory structure should look like this:  

site/  
|-> modules/  
|--|-> FieldtypeAssistedURL  
|--|--|-> FieldtypeAssistedURL.module  
|--|--|-> InputfieldAssistedURL.css  
|--|--|-> InputfieldAssistedURL.js  
|--|--|-> InputfieldAssistedURL.module  
|--|--|-> LICENSE.txt     
|--|--|-> README.md    
 
After deploying the module files go to **Setup/Modules** in your ProcessWire backend.
You should find the **AssistedURL Field** module in the **Fieldtype** section. Hit install and be ready. 

## Dependancies ##

The **AssistedURL Field** module uses and depends on the **AssistedURL Input** module which will be shipped and 
installed with this module.

## Honorable mentions ##

The author wants to thank **[felix](https://processwire.com/talk/user/934-felix/)** and
**[mr-fan](https://processwire.com/talk/user/2327-mr-fan/)** from the ProcessWire forums for their support. 


## License

This module is released under the MIT License. See [LICENSE.txt]LICENSE.txt). 