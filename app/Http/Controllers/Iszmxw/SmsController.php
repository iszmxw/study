<?php

namespace App\Http\Controllers\Iszmxw;

use App\Models\Sms;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SmsController extends Controller
{
    //
    public function send(Request $request)
    {
        $data = Sms::getOne();
        dd($data);
    }
}
