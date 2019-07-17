<?php

namespace App\Http\Controllers\Iszmxw;

use App\Models\Sms;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SmsController extends Controller
{
    public static function url($mobile)
    {
        $url = "https://gc.moscales.com/frontend/sms/send?phoneNumber={$mobile}&type=1";
        return $url;
    }

    //
    public function send(Request $request)
    {
        $list = Sms::getList();
        foreach ($list as $key => $val) {
            $url = self::url($val['mobile']);
            $client = new Client();
            $res = $client->get($url)->getBody()->getContents();
        }
    }
}
