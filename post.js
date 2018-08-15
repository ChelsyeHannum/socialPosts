"use strict";
const post = {
    bindings: {
        post: "<"
    },
    template: `

    <h2>{{ $ctrl.post.title }}</p>
    <p>{{ $ctrl.post.thought}}</p>
    `,


};

angular
    .module("App")
    .component("post", post)