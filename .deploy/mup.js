module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: "52.87.223.21",
      username: "ubuntu",
      pem: "../TripRec-Alpha.pem"
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },
  hooks: {
    "pre.deploy": {
      localCommand: "meteor npm install"
    }
  },
  app: {
    // TODO: change app name and path
    name: "tripRec",
    path: "/tripRec",

    servers: {
      one: {}
    },

    buildOptions: {
      serverOnly: true
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: "http://52.87.223.21",
      MONGO_URL: "mongodb://mongodb/meteor",
      MONGO_OPLOG_URL: "mongodb://mongodb/local"
    },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: "abernix/meteord:node-8.4.0-base"
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: "3.4.1",
    servers: {
      one: {}
    }
  }

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  // proxy: {
  //   domains: 'mywebsite.com,www.mywebsite.com',

  //   ssl: {
  //     // Enable Let's Encrypt
  //     letsEncryptEmail: 'email@domain.com'
  //   }
  // }
};
