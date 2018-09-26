<!doctype html>
<html class="no-js" lang="">
    
<!-- Mirrored from bootexperts.com/html/lilama-preview/lilama/index-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 06 Sep 2018 13:06:32 GMT -->
<head>
		<!-- Basic page needs
		============================================ -->	
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title> @yield('title')</title>
        <meta name="description" content="">
		<!-- Mobile specific metas -->		
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- Favicon -->
		<link rel="shortcut icon" type="image/x-icon" href="{!! asset('cdt76_admin/img/fav_icon.ico') !!}">
		<!--All Fonts  Here -->
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800,300' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Bitter:400,700' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Oswald:400,700' rel='stylesheet' type='text/css'>
		
		<!-- ALL CSS FILES HERE -->
		<!-- Bootstrap CSS -->
        <link rel="stylesheet" href="{!! asset('cdt76_admin/css/bootstrap.min.css') !!}">
		<!-- font-awesome CSS -->
        <link rel="stylesheet" href="{!! asset('cdt76_admin/css/font-awesome.min.css') !!}">
		<!-- fancybox CSS -->
        <link rel="stylesheet" href="{!! asset('cdt76_admin/css/fancybox/jquery.fancybox.css') !!}">	
		<!--bxslider CSS -->
        <link rel="stylesheet" href="{!! asset('cdt76_admin/css/jquery.bxslider.min.css') !!}">	
		<!-- owl.carousel CSS-->
        <link rel="stylesheet" href="{!! asset('cdt76_admin/css/owl.carousel.css') !!}">
         <!-- owl.carousel transitions CSS-->
        <link rel="stylesheet" href="{!! asset('cdt76_admin/css/owl.transitions.css') !!}">
		<!-- owl.theme CSS-->
        <link rel="stylesheet" href="{!! asset('cdt76_admin/css/owl.theme.css') !!}">
		<!-- nivo slider CSS  -->
		<link rel="stylesheet" href="{!! asset('cdt76_admin/custom-slider/css/nivo-slider.css') !!}" type="text/css" />
		<link rel="stylesheet" href="{!! asset('cdt76_admin/custom-slider/css/preview.css') !!}" type="text/css" media="screen" />
		<!-- animate CSS -->
        <link rel="stylesheet" href="{!! asset('cdt76_admin/css/animate.css') !!}">
		<!-- jquery-ui-->
        <link rel="stylesheet" href="{!! asset('cdt76_admin/css/jquery-ui.css') !!}">
		<!-- css for mobile menu-->
        <link rel="stylesheet" href="{!! asset('cdt76_admin/css/mobile_menu.min.css') !!}">
		<!-- normalize CSS -->		
        <link rel="stylesheet" href="{!! asset('cdt76_admin/css/normalize.css') !!}">
		<!-- main CSS -->		
        <link rel="stylesheet" href="{!! asset('cdt76_admin/css/main.css') !!}">
		<!-- style CSS -->			
        <link rel="stylesheet" href="{!! asset('cdt76_admin/style.css') !!}">
		<!-- responsive CSS -->			
        <link rel="stylesheet" href="{!! asset('cdt76_admin/css/responsive.css') !!}">
		
		<!-- modernizr js -->		
        <script src="{!! asset('cdt76_admin/js/vendor/modernizr-2.8.3.min.js') !!}"></script>
        @yield('style')
    </head>
    <body class="home-2" >
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
		<!-- start preloader -->
        <div id="loader-wrapper">
            <div class="logo"></div>
            <div id="loader">
            </div>
        </div>
        <!-- end preloader -->
        <!-- header area start -->
		 @include('layouts.site.header')
		<!-- main menu area start  -->
		
		 @include('layouts.site.navbar')
		<!-- main menu area end  -->
		<!-- mobile-menu-area start -->
        <div class="mobile-menu-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mobile-menu">
                            <nav id="dropdown">
                                <ul>
                                    <li><a href="index.html">Home</a>
                                        <ul>
                                            <li><a href="index.html">Home 1</a></li>
                                            <li><a href="index-2.html">Home 2</a></li>
                                            <li><a href="index-3.html">Home 3</a></li>
                                            <li><a href="index-4.html">Home 4</a></li>
                                            <li><a href="index-5.html">Home 5</a></li>
                                            <li><a href="index-6.html">Home 6</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul>
                                            <li><a href="blog-post.html">blog post page</a></li>
                                            <li><a href="cart.html">cart page</a></li>
                                            <li><a href="checkout.html">checkout page</a></li>
                                            <li><a href="login.html">login page</a></li>
                                            <li><a href="shop.html">shop page</a></li>
                                            <li><a href="single-product.html">single product page</a></li>
                                            <li><a href="wishlist.html">wishlist</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="corporate.html">Corporate</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>                  
                    </div>
                </div>
            </div>
        </div>
        <!-- mobile-menu-area end -->
		<!-- search area start  -->
		<div class="nk-search-area">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-8 col-md-9 col-lg-9">
						<div class="nk-search">
							<div class="search_input" style="width: 100%">
								<input type="text" placeholder="Type and hit enter" />
								<div class="search-button-wrapper">
									<button class="search-button" type="submit"><i class="fa fa-search"></i></button>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-10 col-sm-4 col-md-3 col-lg-3">
						<div class="h2-top-cart">
							<div class="top-nav-area">
							 <ul>
								<li>
									<a href="cart.html">
										<div class="cart_area">
											<i class="fa fa-shopping-cart"></i>
											<div class="nav-select">
												<div class="text_menu">
													cart
												</div>
											</div>
										</div>
									</a>
									<div class="cart-sub">
										<div class="all-cart">
											<p>1x <a href="#">Sollicitudin Rhoncus</a> <span>$150.00</span> </p>
											<p>2x <a href="#">Sollicitudin Rhoncus</a> <span>$600.00</span> </p>
										</div>
										<h3>3 product<span>Total <span>$1350.00</span></span></h3>
										<div class="sub-button">
											<a href="#">Show Cart</a>
										</div>
									</div>
								</li>			
							 </ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- main menu area end  -->
		<!-- slider area start -->
		<div class="home-1-slider-area">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-12 col-lg-12 ">
						<div class="h1-slider">
						<!-- HOME SLIDER -->
						 <div class="slider-wrap">
							<!-- slider -->
								<div class="slider-area">
									<div class="bend niceties preview-2">
										<div id="ensign-nivoslider" class="slides">	
											<img src="{{asset('cdt76_admin/img/slider/h2/1.jpg')}}" alt="" title="#slider-direction-1"  />
											<img src="{{asset('cdt76_admin/img/slider/h2/2.jpg')}}" alt="" title="#slider-direction-2"  />
										</div>
										<!-- direction 1 -->
										<div id="slider-direction-1" class="t-cn slider-direction ">
											<div class="slider-content t-lfl s-tb slider-1 slid-2 ">
												<div class="title-container s-tb-c title-compress">
													<h2 class="title2" > 2015 collection  </h2>
													<h1 class="title1">Men’s style </h1>
													<h2 class="title2" >Claritas est etiam processus dynam </h2>
													<a class="spnowbtn" href="#">SHOP NOW </a>
												</div>
											</div>	
										</div>
										<!-- direction 2 -->
										<div id="slider-direction-2" class="t-cn slider-direction">
											<div class="slider-content t-lfl s-tb slider-1 ">
												<div class="title-container s-tb-c title-compress">
													<h2 class="title2" > 2015 collection  </h2>
													<h1 class="title1">Men’s style </h1>
													<h2 class="title2" >Claritas est etiam processus dynam </h2>
													<a class="spnowbtn" href="#">SHOP NOW </a>
												</div>
											</div>	
										</div>
									</div>
								</div>
								<!-- slider end-->
							</div>
							<!-- END HOME SLIDER -->
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<!-- slider area end -->
	    <!-- header area end -->
		<!-- home-2 main area start -->
		<div class="home-2-main-area">
			<div class="container">
				<div class="row">
					<div class=" col-sm-12 col-md-3 col-lg-3">
						@include('layouts.site.menu_left')
						<div class="left-side-slider">
							  <!-- HOME SLIDER -->
								<div class="slider-wrap">
									<div class="fullwidthbanner-container" >
									  <div class="side-slider">
										<ul>
											<li data-transition="random" data-slotamount="7" data-masterspeed="1000">
												<img src="{{asset('cdt76_admin/img/slider/h2/2.png')}}" alt="slide">
											</li>
											<li data-transition="random" data-slotamount="7" data-masterspeed="1000">
												<img src="{{asset('cdt76_admin/img/slider/h2/3.jpg')}}" alt="slide">
											</li>
											<li data-transition="random" data-slotamount="7" data-masterspeed="1000">
												<img src="{{asset('cdt76_admin/img/slider/h2/4.jpg')}}" alt="slide">
											</li>
										 </ul>
										</div>
									</div>
								</div>
							   <!-- END HOME SLIDER -->
						</div>
						<!-- spesal product -->
						<div class="single-special-products">
							<h3 class="sp-module-title"><span>Special Products</span></h3>
							<div class="home-2-all-sp-slides">
								<!-- SP-SINGLE Product -->
								@include('layouts.site.poster')
								<!-- SP-SINGLE Product -->
								@include('layouts.site.single_product')
							</div>
						</div>
						<!-- spesal product End -->
						<!-- Featured Products start -->
						<div class="featured-product-area">
							<h3 class="left-p-title"><span>Featured Products</span></h3>
							<div class="nav-scroll">
							  <span id="featured-prev"></span>
							  <span id="featured-next"></span>
							</div>
							<div class="all-f-p">
								<div class="single-f-p">
									<div class="f-img">
										<a href="#"><img src="{{asset('cdt76_admin/img/all-sp/new-p/1.jpg')}}" alt="" /> </a>
									</div>
									<div class="f-info">
										<div class="sp-info-area">
											<h2 class="product-name"><a href="#" title="Dolor Dignissim Semper">Semper Dolor Dignissim </a></h2>
											<div class="product-rating">
												<div title=" Rating: 3/5" class="ratingbox">
													<div class="stars-orange" style="width:45px"></div>
												</div>
											</div>
											<p class="all-prices">
												<span class="sp-price price-lessprice">$250.00</span> 
												<span class="sp-price main-price">$189.00</span>
											</p>
										</div>
									</div>
								</div>
								<div class="single-f-p">
									<div class="f-img">
										<a href="#"><img src="{{asset('cdt76_admin/img/all-sp/new-p/2.jpg')}}" alt="" /> </a>
									</div>
									<div class="f-info">
										<div class="sp-info-area">
											<h2 class="product-name"><a href="#" title="Dignissim Dolor  Semper">Semper Dolor Dignissim </a></h2>
											<div class="product-rating">
												<div title=" Rating: 3/5" class="ratingbox">
													<div class="stars-orange" style="width:60px"></div>
												</div>
											</div>
											<p class="all-prices">
												<span class="sp-price main-price">$289.00</span>
											</p>
										</div>
									</div>
								</div>
								<div class="single-f-p">
									<div class="f-img">
										<a href="#"><img src="{{asset('cdt76_admin/img/all-sp/new-p/3.jpg')}}" alt="" /> </a>
									</div>
									<div class="f-info">
										<div class="sp-info-area">
											<h2 class="product-name"><a href="#" title="Dolor Dignissim Semper">Dolor Semper  Dignissim </a></h2>
											<div class="product-rating">
												<div title=" Rating: 3/5" class="ratingbox">
													<div class="stars-orange" style="width:25px"></div>
												</div>
											</div>
											<p class="all-prices">
												<span class="sp-price price-lessprice">$550.00</span> 
												<span class="sp-price main-price">$389.00</span>
											</p>
										</div>
									</div>
								</div>
								<div class="single-f-p">
									<div class="f-img">
										<a href="#"><img src="{{'cdt76_admin/img/all-sp/new-p/4.jpg'}}" alt="" /> </a>
									</div>
									<div class="f-info">
										<div class="sp-info-area">
											<h2 class="product-name"><a href="#" title="Dolor Dignissim Semper">Semper Dolor Dignissim </a></h2>
											<div class="product-rating">
												<div title=" Rating: 3/5" class="ratingbox">
													<div class="stars-orange" style="width:45px"></div>
												</div>
											</div>
											<p class="all-prices">
												<span class="sp-price main-price">$289.00</span>
											</p>
										</div>
									</div>
								</div>
								<div class="single-f-p">
									<div class="f-img">
										<a href="#"><img src="{{asset('cdt76_admin/img/all-sp/new-p/5.jpg')}}" alt="" /> </a>
									</div>
									<div class="f-info">
										<div class="sp-info-area">
											<h2 class="product-name"><a href="#" title="Dolor Dignissim Semper">Semper Dolor Dignissim </a></h2>
											<div class="product-rating">
												<div title=" Rating: 3/5" class="ratingbox">
													<div class="stars-orange" style="width:70px"></div>
												</div>
											</div>
											<p class="all-prices">
												<span class="sp-price price-lessprice">$350.00</span> 
												<span class="sp-price main-price">$289.00</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Featured Products End -->
						<!-- Best sellers start -->
						@include('layouts.site.product_sale')
						<!-- Best sellers End -->
					</div>	
					<div class=" col-sm-12 col-md-9 col-lg-9">
						@include('layouts.site.banner')
						
						@yield('content')
						<!-- home-2 new product  -->
						 
						<!-- home-2 Gifts  product  -->
						
	
			           <!-- home-2 Health  product  -->
						

	                    
	
			           <!-- home-2 Health  product  -->
						


					</div>		
				</div>		
			</div>		
		</div>		
		<!-- home-2 main area end -->

		<!-- Brand area start -->
		@include('layouts.site.brand')
		
		<!-- footer top area start -->
		@include('layouts.site.footer')
		<!-- footer top area end -->
		
		<!-- ALL JS FILES HERE -->
        <!-- jquery js -->
        <script src="{!! asset('cdt76_admin/js/vendor/jquery-1.11.3.min.js') !!}"></script>
        <!-- price_slider js -->
        <script src="{!! asset('cdt76_admin/js/price_slider.js') !!}"></script>  
        <!-- bootstrap js -->
        <script src="{!! asset('cdt76_admin/js/bootstrap.min.js') !!}"></script>
        <!-- owl.carousel.min js -->
        <script src="{!! asset('cdt76_admin/js/owl.carousel.min.js') !!}"></script>
        <!-- slicknav js -->
        <script src="{!! asset('cdt76_admin/js/jquery.mobilemenu.js') !!}"></script>
        <!-- parallax js -->
        <script src="{!! asset('cdt76_admin/js/parallax.js') !!}"></script>  
        <!-- treeview js -->
        <script src="{!! asset('cdt76_admin/js/jquery.treeview.js') !!}"></script>  
        <!-- jquery mixitup js -->
        <script src="{!! asset('cdt76_admin/js/jquery.mixitup.min.js') !!}"></script>  
        <!-- jquery.scrollUp js -->
        <script src="{!! asset('cdt76_admin/js/jquery.scrollUp.min.js') !!}"></script>  
         <!-- jquerye levatezoom js -->
        <script src="{!! asset('cdt76_admin/js/jquery.elevatezoom.js') !!}"></script>   
		 <!-- jquerye countdown js -->
        <script src="{!! asset('cdt76_admin/js/countdown.js') !!}"></script> 
        <!-- jquery fancybox js -->
        <script src="{!! asset('cdt76_admin/js/jquery.fancybox.pack.js') !!}"></script>  
        <!-- jquery bx-slider js -->
        <script src="{!! asset('cdt76_admin/js/bx-slider.min.js') !!}"></script> 
        <!-- jquery.easing js -->
        <script src="{!! asset('cdt76_admin/js/jquery.easing.1.3.min.js') !!}"></script> 
		<!-- Nivo slider js  --> 		
		<script src="{!! asset('cdt76_admin/custom-slider/js/jquery.nivo.slider.js') !!}" type="text/javascript"></script>
		<script src="{!! asset('cdt76_admin/custom-slider/home.js') !!}" type="text/javascript"></script>
        <!-- jquery.appear js -->
        <script src="{!! asset('cdt76_admin/js/jquery.appear.js') !!}"></script> 
        <!-- wow js -->
        <script src="{!! asset('cdt76_admin/js/wow.js') !!}"></script>       
        <script>
            new WOW().init();
        </script>
        <!-- plugins js -->
        <script src="{!! asset('cdt76_admin/js/plugins.js') !!}"></script>
        <!-- main js -->
        <script src="{!! asset('cdt76_admin/js/main.js') !!}"></script>
	 	@yield('javascript')
    </body>

<!-- Mirrored from bootexperts.com/html/lilama-preview/lilama/index-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 06 Sep 2018 13:06:38 GMT -->
</html>
