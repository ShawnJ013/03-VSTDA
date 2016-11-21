(function() {
        'use strict';

        angular
            .module('app')
            .controller('PostController', PostController);

        PostController.$inject = [];
        // vm.sort = 'priority';

        /* @ngInject */
        function PostController() {
            var vm = this;
            vm.title = 'PostController',
            vm.addPost = addPost;

            vm.posts = [];



            //////////////////////

            vm.sort = "priority";

            function addPost() {
                vm.posts.push({
                        text: vm.newPost,
                        priority: vm.priority

                    });

                vm.newPost = "";
                
        }
    }
})()
