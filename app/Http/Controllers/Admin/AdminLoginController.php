<?php

namespace App\Http\Controllers\Admin;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use \App\Models\Admin;
use DB;
use Session;
class AdminLoginController extends \App\Http\Controllers\Controller
{
     public function getAdLogin () {
        // if (!Auth::check()) {
        //     return view('admin.login.login');
        // } else {
        //     return redirect()->route('admin')->with('error_login','username or pass is incorrect');
        // }

        return Auth::check() ?  redirect()->route('loginAd') : view('layouts.admin.login');
    	
    }



    public function postAdLogin (Request $request) {
    	$isLoginSuccess = Admin::where('UserName', '=',  $request->username)
    						->where(['Password' => sha1($request->password)])
    						->first();				                  
		if ($isLoginSuccess) {
            Session::put('admin',$request->username);
			return redirect(url('/admin/dashboard'));
		} 
		return redirect(url('/admin/loginAd'))->with('error_login','username or pass is incorrect')->withInput();	
    }

    public function getLogout () {
        \Session::flush();
        return redirect(url('/admin/loginAd'));
    }
}
