"use strict";

const socialPosts = {
    template: `
    <section>
    <h1>My Thoughts</h1>
    <button class = "thoughtBtn" ng-click = "$ctrl.showForm()">New Thought</button>
    <post-form ng-show="$ctrl.show" ng-hide="$ctrl.hide"></post-form>
    <post post="post"index=$index ng-repeat="post in $ctrl.postList track by $index".
    ></post>
    </section>
    `,

    controller: function() {
        const vm = this;
        vm.postList = [{

        }];

        vm.onSubmit = (newPost) => {
            vm.postList.unshift(angular.copy(newPost));
        };

        vm.showForm = () => {
            vm.show = true;
        }

        vm.hideForm = () => {
            vm.hide = false;
        }
    }

};




angular
    .module("App")
    .component("socialPosts", socialPosts)