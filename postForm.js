"use strict";
const postForm = {
    bindings: {
        onSubmit: "&"
    },
    template: `
    <form ng-submit="$ctrl.onSubmit({newPost: $ctrl.postInfo});">
    <p>Title</p>
    <input type="text" ng-model="$ctrl.postInfo.title" placeholder="Title">
    <p>Thought</p>
    <input class ="textArea" type="textarea" ng-model="$ctrl.postInfo.thought">
    <button class = "addPost" ng-click = "ctrl.hideForm()">Add Post</button>
    </form>
    `
        // 
};

angular
    .module("App")
    .component("postForm", postForm)