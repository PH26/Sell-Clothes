<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('admin', function() {
	return view('layouts.admin.admin');
});

/* ROUTE DASH BOARD*/
Route::get('/dashboard', function() {
	return view('admin.dashboard');
});


// Route::group(['middleware' => 'admin'], function () {
//    	Route::get('/loginAd','Admin\AdminLoginController@getAdLogin');
// 	Route::post('/loginAd','Admin\AdminLoginController@postAdLogin');
// 	Route::get('/logout', 'Admin\AdminLoginController@getLogout');
// });





