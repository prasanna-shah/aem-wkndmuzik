# WKNDMUZIK Project for AEM Lean Code Contest

This is a project for AEM application, created using AEM Archetype 23 and tested on AEM 6.5 with latest service pack.    
It is built using Digital Foundation Blueprint’s set of best practices and core components which can further be extended to develop more custom functionality.  

## Features

* All pages are built using AEM Core Components - version 2.10.0 and no new custom component is being created.
* Some core components are extended using Customizing Core components best practices (https://docs.adobe.com/content/help/en/experience-manager-core-components/using/developing/customizing.html).
* All the components are configurable using content policies and content can be added using edit dialogs.
* All the components are webApp ready and they can be exported as JSON output using Sling Model Exporter.
* Pages are responsive for tablet and mobile as well.
* Style system is used extensively in almost all the components to create pages and provide different UI layouts.
* Less preprocessor is used to style each component and each component's less files are organized into separate folder inside clientlibs.
* BEM notation is used to add classes to all HTML's and style them.
* A content author would be able to update styling and website content without the need for code changes.

## Modules

The main parts of the template are:

* **core**: Java bundle containing all core functionality like OSGi services, listeners or schedulers, as well as component-related Java code such as servlets or request filters.
* **ui.apps**: contains the /apps (and /etc) parts of the project, ie JS & CSS clientlibs, components, templates, runmode specific configs as well as Hobbes-tests
* **ui.content**: contains mutable content (not /apps) that is integral to the running of the WKNDMUZIK site. This include template types, templates, policies and base-line organization page and asset structures.
* **ui.tests**: Java bundle containing JUnit tests that are executed server-side. This bundle is not to be deployed onto production.
* **ui.launcher**: contains glue code that deploys the ui.tests bundle (and dependent bundles) to the server and triggers the remote JUnit execution
* **all**: An empty module that embeds the above sub-modules and any vendor dependencies into a single deployable package.

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

To build all the modules and deploy the `all` package to a local instance of AEM, run in the project root directory the following command:

    mvn clean install -PautoInstallSinglePackage

Or to deploy it to a publish instance, run

    mvn clean install -PautoInstallSinglePackagePublish

Or alternatively

    mvn clean install -PautoInstallSinglePackage -Daem.port=4503

Or to deploy only the bundle to the author, run

    mvn clean install -PautoInstallBundle

Or to deploy only a single content package, run in the sub-module directory (i.e `ui.apps`)

    mvn clean install -PautoInstallPackage

## Testing

Unit test in core: this show-cases classic unit testing of the code contained in the bundle. To test, execute:

    mvn clean test

### Building wkndmuzik wireframes content

By default, wireframes content for the contest from `ui.content` will be deployed and will merge with any authored content during each build. If you wish to cleanly re-set an environment, modify the [filter.xml](ui.content/src/main/content/META-INF/vault/filter.xml) file and remove the `mode=merge` attribute to cleanly overwrite the paths.

```diff
- <filter root="/content/wkndmuzik" mode="merge"/>
+ <filter root="/content/wkndmuzik" />
```

### Author urls to access wkndmuzik wireframe pages
http://localhost:4502/editor.html/content/wkndmuzik/us/en.html
http://localhost:4502/editor.html/content/wkndmuzik/us/en/learn-more.html
http://localhost:4502/editor.html/content/wkndmuzik/us/en/sign-up.html
http://localhost:4502/editor.html/content/wkndmuzik/us/en/confirmation.html

### Publish urls to access wkndmuzik wireframe pages
http://localhost:4503/content/wkndmuzik/us/en.html  
http://localhost:4503/content/wkndmuzik/us/en/learn-more.html
http://localhost:4503/content/wkndmuzik/us/en/sign-up.html
http://localhost:4503/content/wkndmuzik/us/en/confirmation.html

## ClientLibs

The frontend of the site is made available using [AEM ClientLib](https://helpx.adobe.com/experience-manager/6-5/sites/developing/using/clientlibs.html). 

A ClientLib will consist of the following files and directories:

- `css/`: CSS files which can be requested in the HTML
- `less/`: Component specific less files which will be compiled to css and rendered in HTML
- `css.txt` (tells AEM the order and names of files in `css/` so they can be merged)
- `js/`: JavaScript files which can be requested in the HTML
- `js.txt` (tells AEM the order and names of files in `js/` so they can be merged
- `resources/`: Source maps, static assets (e.g. icons, fonts), etc.

## Maven settings

The project comes with the auto-public repository configured. To setup the repository in your Maven settings, refer to:

    http://helpx.adobe.com/experience-manager/kb/SetUpTheAdobeMavenRepository.html
