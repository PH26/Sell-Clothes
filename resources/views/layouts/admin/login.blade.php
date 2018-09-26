<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="google-site-verification" content="rGQm6hkjVKSXx-HLpA_uIK7WVAC3lLvPnPg04QGtNEo" />
    <title>@yield('title')</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="{{ asset('template/plugins/bootstrap/css/bootstrap.min.css') }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('template/plugins/adminLTE/css/AdminLTE.min.css') }}">
    <link rel="stylesheet" href="{{ asset('template/plugins/adminLTE/css/skins/skin-purple.min.css') }}">

    <link rel="stylesheet" href="{{ asset('template/css/admin/blue.css') }}">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script>
        var ROOT_URL = "{{ url('/') }}";
    </script>
    <!-- Script Google Analytics -->
   

    @yield('style')
</head>
<body class="hold-transition login-page">

    <div class="login-box">
        <div class="login-logo">
            <a href=""><b>STORE</b>CHIDT</a>
        </div>

        <div class="login-box-body">
            <p class="login-box-msg">
            @if (Session::has('error_login'))
                <div class="btn btn-danger">
                    {{ Session::get('error_login') }} 
                </div>
            @endif
            </p>
            @if( isset($errors))
                {{-- {{dd($errors)}} --}}
            @endif

            <form action="{{url('/admin/login')}}" method="POST">
                <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
                <div class="form-group has-feedback">
                    <input type="text" name="email" value="{!!old('email')!!}" class="form-control" placeholder="Username">
                    @if ( isset($errors) && $errors->email )
                        <div class="error_name">{{ $errors->first('email')}}</div>
                    @endif

                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" name="password" class="form-control" placeholder="Password">
                      @if ( isset($errors) && $errors->password )
                        <div class="error_name">{{ $errors->first('password')}}</div>
                    @endif
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                    </div>
                    <!-- /.col -->
                    <div class="col-xs-4">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">Login</button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>

            <!-- /.social-auth-links -->

        </div>
        <!-- /.login-box-body -->
    </div>


</body>



</html>
