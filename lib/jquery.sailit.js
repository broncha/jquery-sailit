/*
 * Copyright (c) 2012 Rajesh Sharma, broncha.me
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * This software consists of voluntary contributions made by many individuals
 * and is licensed under the LGPL.
 * 
 * 
 * Using jQuery plugin skeleton by OscarGodson https://github.com/OscarGodson/jQuery-Plugin-Skeleton
 */
;(function($){
    $.fn.extend({
        sailit: function(options) {
            this.defaultOptions = {
                width:800,
                height:500
            };
            
            var settings = $.extend({}, this.defaultOptions, options);
            var initializerProp = [
                {opacity:0, left:-100},
                {opacity:0, left:-100, top:-100},
                {opacity:0, top:-100}
            ];
            
            var $this = null;
            
            var images = [];
    
            var rotate = function(){
                var $active = $this.find('img.active');
                if ( $active.length == 0 ) $active = $this.find('img:last');
                var $next =  $active.next().length ? $active.next()
                    : $this.find('img:first');

                $active.addClass('last-active');

                var iprop = initializerProp[Math.floor(Math.random()*initializerProp.length)];

                $next.css(iprop);

                $next
                    .delay('popper')
                    .queue('popper',function(next){
                            $active.animate({opacity: 0},1000);
                            $next.animate({opacity: 1.0}, {
                                            duration: 1000,
                                            queue: false,
                                            complete:function() {
                                                    $next.addClass('active');
                                                    $active.removeClass('active last-active');
                                            }
                                    });
                    })
                    .dequeue('popper')
                    .animate({left:0,top:0},5000);
            }

            return this.each(function() {
                $this = $(this);
                var wrapper = $('<div class="flowSliderWrap" />').css({
                    width:settings.width,
                    height:settings.height
                });
                
                $this.wrapInner(wrapper);
                rotate();
                setInterval(function(){
                    rotate();
                }, 8000 );
                
            });
        }
    });
})(jQuery);

