<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>@yield('title')</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.6 -->
  <link rel="stylesheet" href="{{ asset('template/plugins/bootstrap/css/bootstrap.min.css') }}">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ asset('template/plugins/adminLTE/css/AdminLTE.min.css') }}">
  <link rel="stylesheet" href="{{ asset('template/plugins/adminLTE/css/skins/skin-blue.min.css') }}">

  <!--<link rel="stylesheet" href="{{ asset('templete/css/admin/blue.css') }}">-->

  <link rel="stylesheet" href="{{ asset('template/css/common/custom-bootstrap.css') }}">
  <link rel="stylesheet" href="{{ asset('template/css/common/friday.css') }}">
  <link rel="stylesheet" href="{{ asset('template/css/admin/common/common.css') }}">
  <script>
      var ROOT_URL = "{{ url('/') }}";
  </script>
  @yield('style')
</head>
<body class="hold-transition skin-blue sidebar-mini">
    <div class="wrapper">
        <!-- Main Header -->
        <header class="main-header">
            @include('layouts.admin.admin-head-menu')
        </header>
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">
            @include('layouts.admin.admin-sidebar')
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            @yield('breadcrumb')

            <!-- Main content -->
            <section class="content">
                <!-- Flash session -->
                {{-- @include('elements.flash') --}}
                <!-- Your Page Content Here -->
                @yield('content')
               
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Main Footer -->
        <footer class="main-footer">
            <!-- To the right -->
<!--            <div class="pull-right hidden-xs">
                Anything you want
            </div>-->
            <!-- Default to the left -->
            <strong>© Desgin by ChiDT</strong>
        </footer>
    </div>
    {{-- @include('elements/option-dialog') --}}
    <!-- jQuery 2.2.3 -->
    <script src="{{ asset('template/plugins/jQuery/jquery-3.1.1.min.js') }}"></script>
    <!-- Bootstrap 3.3.6 -->
    <script src="{{ asset('template/plugins/bootstrap/js/bootstrap.min.js') }}"></script>
    <!-- AdminLTE App -->
    <script src="{{ asset('template/plugins/adminLTE/js/app.min.js') }}"></script>

    <script src="{{ asset('template/js/admin/fileinput.js') }}"></script>
    
    <script src="{{ asset('template/js/constants/msg.js') }}"></script>
    <script src="{{ asset('template/js/constants/url.js') }}"></script>
    
    <!--Custom js-->
    <script src="{{ asset('template/js/common/func.js') }}"></script>
    <script src="{{ asset('template/js/common/app.js') }}"></script>
    <script src="{{ asset('template/js/common/static.js') }}"></script>
    <script src="{{ asset('template/js/admin/custom.js') }}"></script>
    
    
    <script src="{{ asset('template/js/common/dialog.js') }}"></script>
    <script src="{{ asset('template/js/common/alert.js') }}"></script>
    @yield('javascript')
</body>
</html>
