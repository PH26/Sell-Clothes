<!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        {{$pageName}}
        <small>{{$description}}</small>
    </h1>
    <ol class="breadcrumb">
        <li><a href="{{route('content_list')}}"><i class="fa fa-dashboard"></i> {{trans('admin-common.Home')}}</a></li>
        @if(isset($links))
            @foreach($links as $value)
                @if(isset($value[1]))
                <li><a href="{{$value[1]}}">{{$value[0]}}</a></li>
                @else
                <li class="active">{{$value[0]}}</li>
                @endif
            @endforeach
        @endif
    </ol>
</section>