<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="support" prefix="{{ request()->route()->getPrefix() }}">
    <meta name="google-site-verification" content="rGQm6hkjVKSXx-HLpA_uIK7WVAC3lLvPnPg04QGtNEo" />
    <title>@yield('title')</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="{{ asset('plugins/bootstrap/css/bootstrap.min.css') }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('plugins/adminLTE/css/AdminLTE.min.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/adminLTE/css/skins/skin-purple.min.css') }}">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="{{ asset('css/common/custom-bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('css/common/site-custom-bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('css/common/friday.css') }}">
    <link rel="stylesheet" href="{{ asset('css/admin/blue.css') }}">
    <script>
      var ROOT_URL = "{{ url('/') }}";
    </script>
    <!-- Script Google Analytics -->
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-27941707-1', 'auto');
        ga('send', 'pageview');
    </script>

    <!-- Facebook Pixel Code -->
    <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1584375218251336');
        fbq('track', 'PageView');
    </script>
    <noscript>
        <img height="1" width="1" style="display:none"
             src="https://www.facebook.com/tr?id=1584375218251336&ev=PageView&noscript=1"
        />
    </noscript>
    <!-- End Facebook Pixel Code -->

    <!-- Twitter universal website tag code -->
    <script>
        !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
                a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        // Insert Twitter Pixel ID and Standard Event data below
        twq('init','nyctr');
        twq('track','PageView');
    </script>
    <!-- End Twitter universal website tag code -->

    <!-- _GDN_RT tag code -->
    <script type="text/javascript">
        /* <![CDATA[ */
        var google_conversion_id = 855538449;
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        /* ]]> */
    </script>
    <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
    </script>
    <noscript>
        <div style="display:inline;">
            <img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/855538449/?guid=ON&amp;script=0"/>
        </div>
    </noscript>
    <!--End  _GDN_RT tag code -->

    <!-- Imobile tag code -->
    <script type="text/javascript">
        imobile_adv_sid = "21612";
        imobile_adv_cq = "top=1";
        document.write(unescape("%3Cscript src='" + ((document.location.protocol == "http:") ? "http" : "https") + "://spcnv.i-mobile.co.jp/script/adv.js?20120316'" + "%20type='text/javascript'%3E%3C/script%3E"));
    </script>
    <!-- Imobile tag code -->

    @yield('style')
</head>
<body class="hold-transition skin-purple layout-top-nav">
    @yield('content')
    <!-- jQuery 2.2.3 -->
    <script src="{{ asset('plugins/jQuery/jquery-3.1.1.min.js') }}"></script>
    <!-- Bootstrap 3.3.6 -->
    <script src="{{ asset('plugins/bootstrap/js/bootstrap.min.js') }}"></script>
    <!-- AdminLTE App -->
    <script src="{{ asset('plugins/adminLTE/js/app.min.js') }}"></script>

<!--Custom js-->
    <script src="{{ asset('js/common/func.js') }}"></script>
    <script src="{{ asset('js/common/app.js') }}"></script>
    <script src="{{ asset('js/common/static.js') }}"></script>
    
    <script src="{{ asset('js/common/site.js') }}"></script>
    <script src="{{ asset('js/constants/msg.js') }}"></script>
    <script src="{{ asset('js/constants/url.js') }}"></script>
    <script src="{{ asset('js/common/dialog.js') }}"></script>
    <script src="{{ asset('js/common/alert.js') }}"></script>
    @yield('javascript')
</body>
</html>
