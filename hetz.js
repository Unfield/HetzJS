const request = require("request");

class HetzJS {
  authenticate(token) {
    this.apiToken = token;
  }

  isAPIkeyRegistered() {
    return typeof this.apiToken !== "undefined";
  }

  server(id) {
    let self = this;
    return {
      id: id,
      poweron: function(callback) {
        var options = {
          url:
            "https://api.hetzner.cloud/v1/servers/" + id + "/actions/poweron",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (self.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      shutdown: function(callback) {
        var options = {
          url:
            "https://api.hetzner.cloud/v1/servers/" + id + "/actions/shutdown",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (self.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      reboot: function(callback) {
        var options = {
          url: "https://api.hetzner.cloud/v1/servers/" + id + "/actions/reboot",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (self.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      reset: function(callback) {
        var options = {
          url: "https://api.hetzner.cloud/v1/servers/" + id + "/actions/reset",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (self.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      changeName: function(name, callback) {
        var options = {
          url: "https://api.hetzner.cloud/v1/servers/" + id,
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          },
          body: JSON.stringify({ name: name })
        };
        if (self.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      delete: function(callback) {
        var options = {
          url: "https://api.hetzner.cloud/v1/servers/" + id,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (self.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      get: function(callback) {
        var options = {
          url: "https://api.hetzner.cloud/v1/servers/" + id,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (self.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      getAll: function(callback) {
        var options = {
          url: "https://api.hetzner.cloud/v1/servers/",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (self.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      create: function(buildData, callback) {
        var options = {
          url: "https://api.hetzner.cloud/v1/servers",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (self.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      resetRootPassword: function(callback) {
        var options = {
          url:
            "https://api.hetzner.cloud/v1/servers/" +
            id +
            "/actions/reset_password",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (self.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      enableRescue: function(callback) {
        var options = {
          url:
            "https://api.hetzner.cloud/v1/servers/" +
            id +
            "/actions/enable_rescue",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (self.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      disableRescue: function(callback) {
        var options = {
          url:
            "https://api.hetzner.cloud/v1/servers/" +
            id +
            "/actions/disable_rescue",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (self.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      requestConsole: function(callback) {
        var options = {
          url:
            "https://api.hetzner.cloud/v1/servers/" +
            id +
            "/actions/request_console",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (self.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      }
    };
  }

  location(id) {
    return {
      id: id,
      get: function(callback) {
        var options = {
          url: "https://api.hetzner.cloud/v1/locations/" + id,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (module.parent.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      getAll: function(callback) {
        var options = {
          url: "https://api.hetzner.cloud/v1/locations/",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (module.parent.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      }
    };
  }

  datacenter(id) {
    return {
      id: id,
      get: function(callback) {
        var options = {
          url: "https://api.hetzner.cloud/v1/datacenters/" + id,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (module.parent.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      },
      getAll: function(callback) {
        var options = {
          url: "https://api.hetzner.cloud/v1/datacenterss/",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + self.apiToken
          }
        };
        if (module.parent.isAPIkeyRegistered())
          request(options, (err, res, body) => {
            callback(body);
          });
      }
    };
  }
}

module.exports = new HetzJS();
