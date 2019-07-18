(function () {
    
    'use strict';
    
    // Define Variables
    
    var bodyE1 = document.body,
        videoWrap = document.querySelector('.video-wrap'),
        videoE1 = videoWrap.querySelector('video'),
        playCtrl = document.querySelector('.action--play'),
        closeCtrl = document.querySelector('.action--close');
    
    function init() {
        initEvents();
    }
    
    //Add Event Listeners
    
    function initEvents() {
        playCtrl.addEventListener('click', play);
        closeCtrl.addEventListener('click', hide);
        videoE1.addEventListener('canplaythrough', allowPlay);
        videoE1.addEventListener('ended', hide);
    }
    
    function allowPlay() {
        bodyE1.classList.add('video-loaded');
    }
    
    function play() {
        videoE1.currentTime = 0;
        videoWrap.classList.remove('video-wrap--hide');
        videoWrap.classList.add('video-wrap--show');
        setTimeout(function() {videoE1.play();}, 600);
    }
    
    function hide() {
        videoWrap.classList.remove('video-wrap--show');
        videoWrap.classList.add(videoWrap, 'video-wrap--hide');
        videoE1.pause();
    }
    
    init();
    
})();