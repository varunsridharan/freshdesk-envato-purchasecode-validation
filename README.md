## Fresh Desk Envato Purchase Code Validation

This addon will create a new widget in the ticket view page where there will be an option to validate purchase code given by the customer. and get information about the purchase code. 

### Features
1. Check if its a valid purchase code
2. Provide indepth information about the purchase if its valid purchase code.
3. Provides exact status ( Valid, Invalid)

### Installation
#### Step 1 : 
Please create a new personal token @ https://build.envato.com/my-apps/
And make sure that you have these 2 permissions
1. View and search Envato sites
2. View your items' sales history

#### Step 2 :
Create a custom field for purchase code in ticket fields if not already created

#### Step 3:
Install this addon and configure it.

## Screenshot
![TicketList View](https://raw.githubusercontent.com/varunsridharan/freshdesk-envato-purchasecode-validation/master/1551195726-12.jpg)

## Contribute
If you would like to help, please take a look at the list of
[issues](https://github.com/varunsridharan/freshdesk-envato-purchasecode-validation/issues) or the [To Do](#-todo) checklist.

# License
This project is licensed under **General Public License v3.0 license**. See the [LICENSE](LICENSE) file for more info.

## Copyright
2017 - 2018 Varun Sridharan, [varunsridharan.in](https://varunsridharan.in/)

If you find it useful, let me know :wink:

You can contact me on [Twitter](https://twitter.com/varunsridharan2) or through my [email](mailto:varunsridharan23@gmail.com).

---
## Backed By
| [![DigitalOcean](https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/DO_Logo_Horizontal_Blue-small.png)](https://s.svarun.in/Ef)           | [![JetBrains](https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/phpstorm-small.png?v3)](https://www.jetbrains.com) | [![FreshDesk](https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/freshdesk.svg)](https://freshdesk.com) | [![Tidio Chat](https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/tidiochat-small.png)](https://tidiochat.com) |
| --- | --- | --- | --- |

---
## Development

### Folder structure explained

    .
    ├── README.md                  This file
    ├── app                        Contains the files that are required for the front end component of the app
    │   ├── app.js                 JS to render the dynamic portions of the app
    │   ├── icon.svg               Sidebar icon SVG file. Should have a resolution of 64x64px.
    │   ├── freshdesk_logo.png     The Freshdesk logo that is displayed in the app
    │   ├── style.css              Style sheet for the app
    │   ├── template.html          Contains the HTML required for the app’s UI
    ├── config                     Contains the installation parameters and OAuth configuration
    │   ├── iparams.json           Contains the parameters that will be collected during installation
    │   └── iparam_test_data.json  Contains sample Iparam values that will used during testing
    └── manifest.json              Contains app meta data and configuration information
