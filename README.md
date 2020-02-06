# Hetz-JS

Hetz-JS is an Node.js library that communicates with the Hetzner-Cloud API to make thinks even more easy for you.

## Installation

You can install **Hetz-JS** with **NPM**

> npm install hetz-js

After you installed **Hetz-JS** you need to include it in your **Project**

    var HetzJS = require('hetz-js');

now you just need to register you **API-Key**. You can get an API-Key at [https://console.hetzner.cloud/](https://console.hetzner.cloud/)

    HetzJS.authenticate(YOUR API TOKEN);

## Usage

### Create

creates a Server

for ServerTypes visit Hetzner.com and look out for the prices-tab

    HetzJS.server().create({name: "YOUR SERVERNAME", server_type: "cx11", image: "ubuntu-18.04"}, (result) => {
        console.log(result);
    });

there are more buildData-Parameters for full documentation please visit [https://docs.hetzner.cloud/#servers-create-a-server](https://docs.hetzner.cloud/#servers-create-a-server)

### Delete

deletes the Server

    HetzJS.server("SERVERID").delete((result) => {
        console.log(result);
    });

### PowerOn

powers the Server on

    HetzJS.server("SERVERID").poweron((result) => {
        console.log(result);
    });

### Shutdown

powers the Server down

    HetzJS.server("SERVERID").shutdown((result) => {
        console.log(result);
    });

### Reboot

reboots the Server

    HetzJS.server("SERVERID").reboot((result) => {
        console.log(result);
    });

### ChangeName

changes the Servername visible in the Hetzner Interface

    HetzJS.server("SERVERID").changeName("SERVERNAME",(result) => {
        console.log(result);
    });

### reset Rootpassword

resets the Password for the Rootuser

    HetzJS.server("SERVERID").resetRootPassword((result) => {
        console.log(result);
    });

### Get

returns all Informations about the Server

    HetzJS.server("SERVERID").get((result) => {
        console.log(result);
    });

### Get All

returns all Servers

    HetzJS.server().getAll((result) => {
        console.log(result);
    });

### enable Rescue

enables the Rescue-Mode for the Server

    HetzJS.server("SERVERID").enableRescue((result) => {
        console.log(result);
    });

### disable Rescue

disables the Rescue-Mode for the Server

    HetzJS.server("SERVERID").disableRescue((result) => {
        console.log(result);
    });

### request Console

returns the Console

    HetzJS.server("SERVERID").requestConsole((result) => {
        console.log(result);
    });
