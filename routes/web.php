<?php 

Auth::routes();
//admin
//
Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function () {
   	Route::get('/login','Auth\LoginController@showLoginForm');
	Route::post('/login','Auth\LoginController@login');
	Route::get('/logout', 'Auth\LoginController@logout');
});

Route::get('/home', 'HomeController@index')->name('home');

?>