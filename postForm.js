"use strict";
const postForm = {
    bindings: {
        onSubmit: "&"
    },
    template: `
    <form >
    <p>Title</p>
    <input type="text" ng-model="$ctrl.postInfo.title" placeholder="Title">
    <p>Thought</p>
    <textarea rows: "50" class ="textArea" type="text" ng-model="$ctrl.postInfo.thought"></textarea>
     <button class = "addPost" ng-click = "ctrl.hideForm()">Add Post</button>
    </form>
    `
        // ng-submit="$ctrl.onSubmit({newPost: $ctrl.postInfo});"
};

angular
    .module("App")
    .component("postForm", postForm)