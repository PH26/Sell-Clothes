<!doctype html>
<html class="no-js" lang="">
    
<!-- Mirrored from bootexperts.com/html/lilama-preview/lilama/index-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 06 Sep 2018 13:06:32 GMT -->
<head>
		<!-- Basic page needs
		============================================ -->	
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>HOME - STORE  </title>
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
		<div class="header-top">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-3 col-lg-3">
						<div class="logo-area">
							<a href="index.html"><img src="{{asset('cdt76_admin/img/logo.png')}}" alt="logo" /> </a>
						</div>			
					</div>
					<div class="col-sm-12 col-md-9 col-lg-9">
						<div class="top-nav-area">
							<ul>
								<li>
									<i class="fa fa-language"> </i>
									<div class="nav-select">
										<div class="select-wrapper">
											<select class="select-topnav">
												<option selected="selected">English</option>
												<option >Hebrew</option>
											</select>
										</div>
									</div>
								</li>
								<li>
									<i class="fa fa-money"></i>
									<div class="nav-select">
										<div class="select-wrapper">
											<select class="select-topnav">
												<option selected="selected">USD $</option>
												<option >Euro €</option>
											</select>
										</div>
									</div>
								</li>
								<li>
									<a href="#">
										<i class="fa fa-user"></i>
										<div class="nav-select">
											<div class="text_menu">
												My Account
											</div>
										</div>
									</a>
								</li>
								<li>
									<a href="wishlist.html">
										<i class="fa fa-heart-o"></i>
										<div class="nav-select">
											<div class="text_menu">
												My Wishlist
											</div>
										</div>
									</a>
								</li>
								<li>
									<a href="checkout.html">
										<i class="fa fa-exchange"></i>
										<div class="nav-select">
											<div class="text_menu">
												Checkout
											</div>
										</div>
									</a>
								</li>
								<li>
									<a href="login.html">
										<i class="fa fa-key"></i>
										<div class="nav-select">
											<div class="text_menu">
												log in
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>			
					</div>
				</div>
			</div>
		</div>
		<!-- main menu area start  -->
		<div class="main-menu-area ">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						 <nav>
                            <ul>
                                <li class="active" ><a href="index.html">Home</a>
                                    <div class="sp-dropdown-inner">
                                        <ul class="sp-dropdown-items">
                                            <li class="sp-menu-item"><a href="index.html">Home 1</a></li>
                                            <li class="sp-menu-item"><a href="index-2.html">Home 2</a></li>
                                            <li class="sp-menu-item"><a href="index-3.html">Home 3</a></li>
                                            <li class="sp-menu-item"><a href="index-4.html">Home 4</a></li>
                                            <li class="sp-menu-item"><a href="index-5.html">Home 5</a></li>
                                            <li class="sp-menu-item"><a href="index-6.html">Home 6</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="#">pages</a>
                                    <div class="sp-dropdown-inner">
                                        <ul class="sp-dropdown-items">
                                            <li class="sp-menu-item"><a href="blog-post.html">blog post page</a></li>
                                            <li class="sp-menu-item"><a href="cart.html">cart page</a></li>
                                            <li class="sp-menu-item"><a href="checkout.html">checkout page</a></li>
                                            <li class="sp-menu-item"><a href="login.html">login page</a></li>
                                            <li class="sp-menu-item"><a href="shop.html">shop page</a></li>
                                            <li class="sp-menu-item"><a href="single-product.html">single product page</a></li>
                                            <li class="sp-menu-item"><a href="wishlist.html">wishlist</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="corporate.html">Corporate</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </nav>
					</div>
				</div>
			</div>
		</div>
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
							<div class="select-wrapper">
								<select class="select-nksearch">
									<option selected="selected">All Categories</option>
									<option >Baby</option>
									<option >Camera &amp; Camcorder</option>
									<option >-- Bags</option>
									<option >---- Blazers</option>
									<option >---- Bootees  Bags</option>
									<option >---- Coats &amp; Jackets</option>
									<option >Fashion &amp; Accessories</option>
									<option >-- Rings</option>
									<option >---- Diamond Bracelets</option>
									<option >Health &amp; Beauty</option>
									<option >-- Clothing</option>
									<option >-- Handbags</option>
									<option >---- Kids</option>
									<option >---- Sandals</option>
								</select>
							</div>
							<div class="search_input">
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
						<div class="h2-cat">
							<div class="menu-cat-area">
								<h3 class="nk-module-title"><span>Category</span></h3>
								<div class="nk-all-items">
									<div class="sp-module-content">
										<!-- treeview -->
										<div class="vina-treeview-virtuemart" id="vina-treeview-virtuemart93">
											<ul class="level0 treeview">
												<li>
													<a title="Baby" href="#" class="baby">
														<span class="catTitle ">Baby</span>
													</a>
												</li>
												<li class="expandable">
												  <div class="hitarea expandable-hitarea"></div>
													<a title="Camera" href="#" class="camera">
														<span class="catTitle ">Camera &amp; Camcorder</span>
													</a>
													<ul class="sub-menu treeview" style="display:none;">
														<li class="expandable"><div class="hitarea expandable-hitarea"></div>
															<a title="Fashion" href="#" class="">
																<span class="catTitle ">Fashion</span>
															</a>
															<ul class="sub-menu treeview" style="display:none;">
																<li>
																	<a title="Cocktail" href="#">
																		<span class="catTitle ">Cocktail</span>
																	</a>
																</li>
																<li>
																	<a title="Day" href="#">
																		<span class="catTitle ">Day</span>
																	</a>
																</li>
																<li>
																	<a title="Evening" href="#">
																		<span class="catTitle ">Evening</span>
																	</a>
																</li>
																<li class="last">
																	<a title="Sports" href="#">
																		<span class="catTitle ">Sports</span>
																	</a>
																</li>
															</ul>
														</li>
														<li class="expandable"><div class="hitarea expandable-hitarea"></div>
															<a title="Handbags" href="#">
																<span class="catTitle ">Handbags</span>
															</a>
															<ul class="sub-menu treeview" style="display:none;">
																<li>
																	<a title="Sports" href="#">
																		<span class="catTitle ">Sports</span>
																	</a>
																</li>
																<li>
																	<a title="Run" href="#">
																		<span class="catTitle ">Run</span>
																	</a>
																</li>
																<li>
																	<a title="Sandals" href="#">
																		<span class="catTitle ">Sandals</span>
																	</a>
																</li>
																<li class="last">
																	<a title="Books" href="#">
																		<span class="catTitle ">Books</span>
																	</a>
																</li>
															</ul>
														</li>
													</ul>
												</li>
												<li class="expandable"><div class="hitarea expandable-hitarea"></div>
													<a title="Destop" href="#" class="destop">
														<span class="catTitle ">Destop &amp; Laptop</span>
													</a>
													<ul class="sub-menu treeview" style="display:none;">
														<li>
															<a title="Smart Toys" href="#">
																<span class="catTitle ">Smart Toys</span>
															</a>
														</li>
														<li>
															<a title="Boys" href="#">
																<span class="catTitle ">Boys</span>
															</a>
														</li>
														<li>
															<a title="Girls" href="#">
																<span class="catTitle ">Girls</span>
															</a>
														</li>
														<li class="last">
															<a title="Sports" href="#">
																<span class="catTitle ">Sports</span>
															</a>
														</li>
													</ul>
												</li>
												<li>
													<a title="Fashion" href="#" class="fashion">
														<span class="catTitle ">Fashion &amp; Accessories</span>
													</a>
												</li>
												<li class="expandable"><div class="hitarea expandable-hitarea"></div>
													<a title="Furniture" href="#" class="furniture">
														<span class="catTitle ">Furniture</span>
													</a>
													<ul class="sub-menu treeview" style="display:none;">
														<li>
															<a title="Tablet" href="#">
																<span class="catTitle ">Tablet</span>
															</a>
														</li>
														<li>
															<a title="Book Self" href="#">
																<span class="catTitle ">Book Self </span>
															</a>
														</li>
														<li>
															<a title="Girls" href="#">
																<span class="catTitle ">Girls</span>
															</a>
														</li>
														<li class="last">
															<a title="Sports" href="#">
																<span class="catTitle ">Sports</span>
															</a>
														</li>
													</ul>
												</li>
												<li>
													<a title="Beauty" href="#" class="beauty">
														<span class="catTitle ">Health &amp; Beauty</span>
													</a>
												</li>
												<li class="expandable">
												  <div class="hitarea expandable-hitarea"></div>
													<a title="Houseware" href="#" class="houseware">
														<span class="catTitle ">Houseware</span>
													</a>
													<ul class="sub-menu treeview" style="display:none;">
														<li class="expandable"><div class="hitarea expandable-hitarea"></div>
															<a title="Fashion" href="#" class="">
																<span class="catTitle ">Fashion</span>
															</a>
															<ul class="sub-menu treeview" style="display:none;">
																<li>
																	<a title="Cocktail" href="#">
																		<span class="catTitle ">Cocktail</span>
																	</a>
																</li>
																<li>
																	<a title="Day" href="#">
																		<span class="catTitle ">Day</span>
																	</a>
																</li>
																<li>
																	<a title="Evening" href="#">
																		<span class="catTitle ">Evening</span>
																	</a>
																</li>
																<li class="last">
																	<a title="Sports" href="#">
																		<span class="catTitle ">Sports</span>
																	</a>
																</li>
															</ul>
														</li>
													</ul>
												</li>
												<li>
													<a title="tablet" href="#" class="tablet">
														<span class="catTitle ">Mobile &amp; tablet</span>
													</a>
												</li>
												<li>
													<a title="toys" href="#" class="toys">
														<span class="catTitle ">toys &amp; gifts</span>
													</a>
												</li>
												<li>
													<a title="watches" href="#" class="watches">
														<span class="catTitle ">watches &amp; glasses</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>	
						</div>
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
								<div class="sp-single">
									<div class="sp-img-area">
										<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/7.jpg')}}" alt="" />
										<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/1.jpg')}}" alt="" />
										<div class="quick-view-detail">
											<a href="#">View Detail</a>
										</div>
										<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
									</div>
									<div class="sp-info-area">
										<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dolor Dignissim Semper</a></h2>
										<div class="product-rating">
											<div class="ratingbox" title=" Rating: 3/5">
												<div style="width:65px" class="stars-orange"></div>
											</div>
										</div>
										<p class="all-prices">
											<span class="sp-price main-price">$189.00</span>
										</p>
										<div class="sp-button">
											<div class="s-button">
												<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
											</div>
											<div class="s-button">
												<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
											</div>
											<div class="s-button last-b ">
												<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
											</div>
										</div>
									</div>
								</div>
								<!-- SP-SINGLE Product -->
								<div class="sp-single">
									<div class="sp-img-area">
										<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/3.jpg')}}" alt="" />
										<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/4.jpg')}}" alt="" />
										<div class="quick-view-detail">
											<a href="#">View Detail</a>
										</div>
									</div>
									<div class="sp-info-area">
										<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Et Ultrices Posuere</a></h2>
										<div class="product-rating">
											<div class="ratingbox" title=" Rating: 3/5">
												<div style="width:45px" class="stars-orange"></div>
											</div>
										</div>
										<p class="all-prices">
											<span class="sp-price price-lessprice">$250.00</span> 
											<span class="sp-price main-price">$189.00</span>
										</p>
										<div class="sp-button">
											<div class="s-button">
												<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
											</div>
											<div class="s-button">
												<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
											</div>
											<div class="s-button last-b ">
												<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
											</div>
										</div>
									</div>
								</div>
								<!-- SP-SINGLE Product -->
								<div class="sp-single">
									<div class="sp-img-area">
										<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/5.jpg')}}" alt="" />
										<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/6.jpg')}}" alt="" />
										<div class="quick-view-detail">
											<a href="#">View Detail</a>
										</div>
										<div class="sp-label-pro sp-label-pro-new">New!</div>
									</div>
									<div class="sp-info-area">
										<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dolor Dignissim Semper</a></h2>
										<div class="product-rating">
											<div class="ratingbox" title="">
												<div style="width:25px" class="stars-orange"></div>
											</div>
										</div>
										<p class="all-prices">
											<span class="sp-price main-price">$389.00</span>
										</p>
										<div class="sp-button">
											<div class="s-button">
												<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
											</div>
											<div class="s-button">
												<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
											</div>
											<div class="s-button last-b ">
												<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
											</div>
										</div>
									</div>
								</div>
								<!-- SP-SINGLE Product -->
								<div class="sp-single">
									<div class="sp-img-area">
										<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/1.jpg')}}" alt="" />
										<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/2.jpg')}}" alt="" />
										<div class="quick-view-detail">
											<a href="#">View Detail</a>
										</div>
										<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
										<div class="sp-label-percentage">
											<span class="sp-PricediscountAmount">-$5.00</span>
										 </div>
										
									</div>
									<div class="sp-info-area">
										<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dolor Dignissim Semper</a></h2>
										<div class="product-rating">
											<div class="ratingbox" title=" Rating: 3/5">
												<div style="width:45px" class="stars-orange"></div>
											</div>
										</div>
										<p class="all-prices">
											<span class="sp-price price-lessprice">$250.00</span> 
											<span class="sp-price main-price">$189.00</span>
										</p>
										<div class="sp-button">
											<div class="s-button">
												<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
											</div>
											<div class="s-button">
												<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
											</div>
											<div class="s-button last-b ">
												<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
											</div>
										</div>
									</div>
								</div>
								<!-- SP-SINGLE Product -->
								<div class="sp-single">
									<div class="sp-img-area">
										<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/6.jpg')}}" alt="" />
										<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/7.jpg')}}" alt="" />
										<div class="quick-view-detail">
											<a href="#">View Detail</a>
										</div>
										<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
										<div class="sp-label-percentage">
											<span class="sp-PricediscountAmount">-$9.00</span>
										 </div>
										
									</div>
									<div class="sp-info-area">
										<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Semper Dolor Dignissim </a></h2>
										<div class="product-rating">
											<div class="ratingbox" title=" Rating: 3/5">
												<div style="width:45px" class="stars-orange"></div>
											</div>
										</div>
										<p class="all-prices">
											<span class="sp-price price-lessprice">$350.00</span> 
											<span class="sp-price main-price">$289.00</span>
										</p>
										<div class="sp-button">
											<div class="s-button">
												<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
											</div>
											<div class="s-button">
												<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
											</div>
											<div class="s-button last-b ">
												<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
											</div>
										</div>
									</div>
								</div>
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
						<div class="best-sellers">
							<h3 class="left-p-title"><span>Bestsellers</span></h3>
							<div class="nav-scroll">
							  <span id="best-sellers-prev"></span>
							  <span id="best-sellers-next"></span>
							</div>
							<div class="all-b-p">
								<div class="single-f-p">
									<div class="f-img">
										<a href="#"><img src="{{asset('cdt76_admin/img/all-sp/new-p/11.jpg')}}" alt="" /> </a>
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
										<a href="#"><img src="{{asset('cdt76_admin/img/all-sp/new-p/7.jpg')}}" alt="" /> </a>
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
										<a href="#"><img src="{{asset('cdt76_admin/img/all-sp/new-p/8.jpg')}}" alt="" /> </a>
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
										<a href="#"><img src="{{asset('cdt76_admin/img/all-sp/new-p/9.jpg')}}" alt="" /> </a>
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
										<a href="#"><img src="{{asset('cdt76_admin/img/all-sp/new-p/10.jpg')}}" alt="" /> </a>
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
						<!-- Best sellers End -->
					</div>	
					<div class=" col-sm-12 col-md-9 col-lg-9">
						<div class="h-2_bannar">
							<!-- 1st bannar start -->
							<div class="h-1-banner-wapper">
								<div class="col-1 banner-home-inner">
									<a href="#">
										<img alt="" src="{{asset('cdt76_admin/img/all-adds/1.jpg')}}">
									</a>
								</div>
								<div class="col-2 banner-home-inner">
									<a href="#">
										<img alt="" src="{{asset('cdt76_admin/img/all-adds/2.jpg')}}">
									</a>
								</div>
								<div class="col-3 banner-home-inner">
									<a href="#">
										<img alt="" src="{{asset('cdt76_admin/img/all-adds/6.jpg')}}">
									</a>
								</div>
							</div>
							<!-- 1st bannar end --> 
						</div>
						<!-- home-2 new product  -->
						<div class="home-2-new-product">
							<div class="all-p-title">
								<h3>New Products</h3>
							</div>
							<div class="row">
								<div class="all-new-p">
									<div class="h2-new-single singal-p">
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/1.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/2.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dignissim Dolor </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:50px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/3.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/4.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Et Ultrices Posuere</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$250.00</span> 
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/5.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/6.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-new">New!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Nirob Dignissim Semper</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title="">
															<div style="width:25px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$389.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/7.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/8.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
													<div class="sp-label-percentage">
														<span class="sp-PricediscountAmount">-$5.00</span>
													 </div>
													
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dolor Dignissim Semper</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$250.00</span> 
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/9.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/10.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
													<div class="sp-label-percentage">
														<span class="sp-PricediscountAmount">-$9.00</span>
													 </div>
													
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Hasib Dolor Dignissim </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$350.00</span> 
														<span class="sp-price main-price">$289.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/11.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/12.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dignissim Dolor </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:50px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/13.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/14.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Et Ultrices Posuere</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$250.00</span> 
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							
							</div>	
						</div>


						<!-- home-2 tablet product  -->
						<div class="home-2-new-product tablet">
							<div class="all-p-title">
								<h3>Mobile &amp; tablet</h3>
							</div>
							<div class="row">
								<div class="all-new-p">
									<div class="h2-new-single singal-p">
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/17.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/1.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dignissim Dolor </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:50px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/18.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/4.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-new">New!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Et Ultrices Posuere</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/22.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/6.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Nirob Dignissim Semper</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title="">
															<div style="width:25px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$389.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/7.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/11.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
													<div class="sp-label-percentage">
														<span class="sp-PricediscountAmount">-$5.00</span>
													 </div>
													
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dolor Dignissim Semper</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$250.00</span> 
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/9.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/23.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
													<div class="sp-label-percentage">
														<span class="sp-PricediscountAmount">-$9.00</span>
													 </div>
													
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Hasib Dolor Dignissim </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$289.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/22.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/20.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dignissim Dolor </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:50px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/7.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/8.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-new">New!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Et Ultrices Posuere</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$250.00</span> 
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>	
							<div class="banner-home-inner ">
								<a href="#">
									<img alt="" src="{{asset('cdt76_admin/img/all-bannars/3.jpg')}}">
								</a>
							</div>
						</div>

						<!-- home-2 Gifts  product  -->
						<div class="home-2-new-product gifts-p">
							<div class="all-p-title">
								<h3>Toys &amp; Gifts</h3>
							</div>
							<div class="row">
								<div class="all-new-p">
									<div class="h2-new-single singal-p">
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/10.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/11.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-new">New!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dignissim Dolor </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:50px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/12.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/13.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Et Ultrices Posuere</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/14.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/15.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Nirob Dignissim Semper</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title="">
															<div style="width:25px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$389.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/16.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/17.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
													<div class="sp-label-percentage">
														<span class="sp-PricediscountAmount">-$5.00</span>
													 </div>
													
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dolor Dignissim Semper</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/18.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/19.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
													<div class="sp-label-percentage">
														<span class="sp-PricediscountAmount">-$9.00</span>
													 </div>
													
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Hasib Dolor Dignissim </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$350.00</span> 
														<span class="sp-price main-price">$289.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/20.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/21.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dignissim Dolor </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:50px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/22.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/23.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-new">New!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Et Ultrices Posuere</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$250.00</span> 
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>	
							<div class="banner-home-inner ">
								<a href="#">
									<img alt="" src="{{asset('cdt76_admin/img/all-bannars/2.jpg')}}">
								</a>
							</div>
						</div>
	
			           <!-- home-2 Health  product  -->
						<div class="home-2-new-product gifts-p">
							<div class="all-p-title">
								<h3>Health &amp;  Beauty</h3>
							</div>
							<div class="row">
								<div class="all-new-p">
									<div class="h2-new-single singal-p">
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/24.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/25.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dignissim Dolor </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:50px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/26.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/1.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Et Ultrices Posuere</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$250.00</span> 
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/2.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/3.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Nirob Dignissim Semper</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title="">
															<div style="width:25px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$389.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/4.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/5.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
													<div class="sp-label-percentage">
														<span class="sp-PricediscountAmount">-$5.00</span>
													 </div>
													
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dolor Dignissim Semper</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$250.00</span> 
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/6.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/7.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
													<div class="sp-label-percentage">
														<span class="sp-PricediscountAmount">-$9.00</span>
													 </div>
													
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Hasib Dolor Dignissim </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$350.00</span> 
														<span class="sp-price main-price">$289.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/8.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/9.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dignissim Dolor </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:50px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/10.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/11.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Et Ultrices Posuere</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$250.00</span> 
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>	
							<div class="banner-home-inner ">
								<a href="#">
									<img alt="" src="{{asset('cdt76_admin/img/all-bannars/4.jpg')}}">
								</a>
							</div>
						</div>

	                    
	
			           <!-- home-2 Health  product  -->
						<div class="home-2-new-product gifts-p">
							<div class="all-p-title">
								<h3>Fashion  &amp;  accessory</h3>
							</div>
							<div class="row">
								<div class="all-new-p">
									<div class="h2-new-single singal-p">
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/12.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/13.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dignissim Dolor </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:50px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/14.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/15.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Et Ultrices Posuere</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$250.00</span> 
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/16.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/17.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-new">New!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Nirob Dignissim Semper</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title="">
															<div style="width:25px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$389.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/18.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/19.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
													<div class="sp-label-percentage">
														<span class="sp-PricediscountAmount">-$5.00</span>
													 </div>
													
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dolor Dignissim Semper</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price price-lessprice">$250.00</span> 
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/20.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/21.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-percentage">
														<span class="sp-PricediscountAmount">-$9.00</span>
													 </div>
													
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Hasib Dolor Dignissim </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$289.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/22.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/23.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
													<div class="sp-label-pro sp-label-pro-hot">Hot!</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Dignissim Dolor </a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:50px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- SP-SINGLE Product -->
										<div class="col-sm-12 col-md-12 col-lg-12">
											<div class="sp-single">
												<div class="sp-img-area">
													<img class="first-img" src="{{asset('cdt76_admin/img/all-sp/new-p/25.jpg')}}" alt="" />
													<img class="hover-img" src="{{asset('cdt76_admin/img/all-sp/new-p/26.jpg')}}" alt="" />
													<div class="quick-view-detail">
														<a href="#">View Detail</a>
													</div>
												</div>
												<div class="sp-info-area">
													<h2 class="product-name"><a title="Dolor Dignissim Semper" href="#">Et Ultrices Posuere</a></h2>
													<div class="product-rating">
														<div class="ratingbox" title=" Rating: 3/5">
															<div style="width:45px" class="stars-orange"></div>
														</div>
													</div>
													<p class="all-prices">
														<span class="sp-price main-price">$189.00</span>
													</p>
													<div class="sp-button">
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add to cart" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-shopping-cart"></i> </a>
														</div>
														<div class="s-button">
															<a href="#" data-toggle="tooltip" data-placement="top" title="add favorite" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-heart-o"></i> </a>
														</div>
														<div class="s-button last-b ">
															<a href="#" data-toggle="tooltip" data-placement="top" title="view detail" class="black-tooltip add-to-cart all_src_icon"> <i class="fa fa-eye"></i> </a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>	
							<div class="banner-home-inner ">
								<a href="#">
									<img alt="" src="{{asset('cdt76_admin/img/all-bannars/1.jpg')}}">
								</a>
							</div>
						</div>


					</div>		
				</div>		
			</div>		
		</div>		
		<!-- home-2 main area end -->

		<!-- Brand area start -->
		<div class="brand-area">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="all-p-title">
							<h3>Brand &amp; Clients</h3>
						</div>
					</div>
					<div class="clear"></div>
					<div class="all-brand singal-p">
						<div class="singal_brand">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<a href="#"> <img src="{{asset('cdt76_admin/img/brand/1.png')}}" alt="" /> </a>
							</div>
						</div>
						<div class="singal_brand">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<a href="#"> <img src="{{asset('cdt76_admin/img/brand/2.png')}}" alt="" /> </a>
							</div>
						</div>
						<div class="singal_brand">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<a href="#"> <img src="{{asset('cdt76_admin/img/brand/3.png')}}" alt="" /> </a>
							</div>
						</div>
						<div class="singal_brand">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<a href="#"> <img src="{{asset('cdt76_admin/img/brand/4.png')}}" alt="" /> </a>
							</div>
						</div>
						<div class="singal_brand">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<a href="#"> <img src="{{asset('cdt76_admin/img/brand/5.png')}}" alt="" /> </a>
							</div>
						</div>
						<div class="singal_brand">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<a href="#"> <img src="{{asset('cdt76_admin/img/brand/2.png')}}" alt="" /> </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- footer top area start -->
		<section id="sp-bottom-1">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-4" id="sp-bottom1">
						<div class="sp-column ">
							<div class="sp-module ">
							  <h3 class="sp-module-title"><span>About Us</span></h3>
								<div class="sp-module-content">
									<div class="custom">
										<div class="footer-static-content">
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
											<div class="f-icon">
												<h3>STAY CONNECTED</h3>
												<ul>
													<li class="first">
														<a href="#"><i class="fa fa-facebook"></i></a>
													 </li>
													<li>
														<a href="#"><i class="fa fa-twitter"></i></a>
													</li>
													<li>
														<a href="#"><i class="fa fa-google-plus"></i></a>
													</li>
													<li class="last">
														<a href="#"><i class="fa fa-rss"></i></a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-md-8" id="sp-bottom2">
						<div class="sp-column ">
							<div class="sp-module ">
								<div class="sp-module-content">
									<div class="custom">
										<div class="row">
											<div class="col-xs-6  col-sm-3 col-md-3">
												<div class="moduletable">
													<h3>Information</h3>
													<ul class="nav menu">
														<li><a href="#">My Account</a></li>
														<li><a href="#">My Wishlist</a></li>
														<li><a href="#">My Cart</a></li>
														<li><a href="#">Login</a></li>
														<li><a href="#">Contact Us</a></li>
													</ul>
												</div>
											</div>
											<div class="col-xs-6  col-sm-3 col-md-3">	
												<div class="moduletable">
													<h3>Why buy from us</h3>
													<ul class="nav menu">
														<li><a href="#">About us</a></li>
														<li><a href="#">Register</a></li>
														<li><a href="#">My Cart</a></li>
														<li><a href="#">Coming Soon</a></li>
														<li><a href="#">404</a></li>
													</ul>
												</div>
											</div>
											<div class="col-xs-6  col-sm-3 col-md-3">	
												<div class="moduletable">
													<h3>My Account</h3>
													<ul class="nav menu">
														<li><a href="#">My Account</a></li>
														<li><a href="#">My Wishlist</a></li>
														<li><a href="#">My Cart</a></li>
														<li><a href="#">Login</a></li>
														<li><a href="#">Contact Us</a></li>
													</ul>
												</div>
											</div>
											<div class="col-xs-6  col-sm-3 col-md-3">	
												<div class="moduletable">
													<h3>Userful links</h3>
													<ul class="nav menu">
														<li><a href="#">About us</a></li>
														<li><a href="#">Register</a></li>
														<li><a href="#">My Cart</a></li>
														<li><a href="#">Coming Soon</a></li>
														<li><a href="#">404</a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="sp-bottom-2">
			<div class="container">
				<div class="row">
					<div class="col-sm-6 col-md-4 sp-bottomcontact">
					  <div class="sp-column ">
						  <div class="sp-module ">
							<h3 class="sp-module-title"><span>Contact us</span></h3>
							<div class="sp-module-content">
								<div class="custom">
									<div class="t-bottom-content">
										<p class="adress">
										<em class="fa fa-map-marker"></em>
										<span class="ft-content">34 Parer Place via Musk Avenue Kelvin Grove, QLD, 4059</span></p>
										<p class="phone"><em class="fa fa-phone"></em>
										<span class="ft-content">+880 1922262289</span></p>
										<p class="email"><em class="fa fa-envelope"></em>
										<span class="ft-content">info@demo.com</span></p>
									</div>
								</div>
							</div>
						 </div>
					   </div>
					</div>
					<div class="col-sm-6 col-md-4 sp-bottomcontact">
						<div class="sp-column ">
						   <div class="sp-module ">
									<h3 class="sp-module-title"><span>Latest Blog Post</span></h3>
										<div class="lattest-blog-bottom singal-p">
											<div class="single-botoom-post">
												<div class="text-block">
													<div class="info">
														<div class="info-day">
															<span>02</span>
														</div>
														<div class="info-month">
															<span>Feb</span>
														</div>
													</div>
													<div class="info-text">
														<h4 class="title">
															<a title="" href="#">5 Effective Email Unsubscribe Pages</a>
														</h4>
													</div>
												</div>
												<div class="text-block">
													<div class="info">
														<div class="info-day">
															<span>03</span>
														</div>
														<div class="info-month">
															<span>Feb</span>
														</div>
													</div>
													<div class="info-text">
														<h4 class="title">
															<a title="" href="#">Nirob is The lazi person </a>
														</h4>
													</div>
												</div>
											</div>
											<div class="single-botoom-post">
												<div class="text-block">
													<div class="info">
														<div class="info-day">
															<span>02</span>
														</div>
														<div class="info-month">
															<span>Feb</span>
														</div>
													</div>
													<div class="info-text">
														<h4 class="title">
															<a title="" href="#">Unsubscribe Effective Email  Pages</a>
														</h4>
													</div>
												</div>
												<div class="text-block">
													<div class="info">
														<div class="info-day">
															<span>03</span>
														</div>
														<div class="info-month">
															<span>Feb</span>
														</div>
													</div>
													<div class="info-text">
														<h4 class="title">
															<a title="" href="#">Nirob is The lazi person </a>
														</h4>
													</div>
												</div>
											</div>
											<div class="single-botoom-post">
												<div class="text-block">
													<div class="info">
														<div class="info-day">
															<span>02</span>
														</div>
														<div class="info-month">
															<span>Feb</span>
														</div>
													</div>
													<div class="info-text">
														<h4 class="title">
															<a title="" href="#">5 Effective Email Unsubscribe Pages</a>
														</h4>
													</div>
												</div>
												<div class="text-block">
													<div class="info">
														<div class="info-day">
															<span>03</span>
														</div>
														<div class="info-month">
															<span>Feb</span>
														</div>
													</div>
													<div class="info-text">
														<h4 class="title">
															<a title="" href="#">Nirob is The lazi person </a>
														</h4>
													</div>
												</div>
											</div>
									</div>
								</div>
							</div>
						 </div>
						 <div class="col-sm-12 col-md-4 sp-bottomcontact">
						  <div class="sp-column ">
							<div class="sp-module Subscribe-area">
								<h3 class="sp-module-title"><span>Newsletter</span></h3>
								<div class="sp-module-content">
									<p>Typi non habent claritatem insitam; est usus legentis in iis qui facit </p>
									<div class="newsletter-from">
										<form action="#">
											<input type="text" placeholder="E-mail" />
											<input type="submit" value="Subscribe" />
											
										</form>
									</div>
								</div>
							</div>
						   </div>
						</div>
					   </div>
					</div>
		</section>	
		<footer id="sp-footer">
			<div class="container">
				<div class="row">
				  <div class="col-sm-6 col-md-6">
                    <p>Copyright &copy; 2015 <a  href="http://bootexperts.com/" target="_blank">Bootexperts</a> All Rights Reserved</p>
                  </div>
				  <div class="col-sm-6 col-md-6">
						<div class="payment-logo">
							<img src="{{asset('cdt76_admin/img/payment.png')}}" alt="" />
						</div>
				  </div>
				</div>
			</div>
		</footer>
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

    </body>

<!-- Mirrored from bootexperts.com/html/lilama-preview/lilama/index-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 06 Sep 2018 13:06:38 GMT -->
</html>
