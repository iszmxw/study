<?php

namespace App\Console\Commands;

use GuzzleHttp\Client;
use Illuminate\Console\Command;

class Sms extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:sms';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '短信发送';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    public static function url($mobile)
    {
        $url = "https://gc.moscales.com/frontend/sms/send?phoneNumber={$mobile}&type=1";
        return $url;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $list = \App\Models\Sms::getList();
        foreach ($list as $key => $val) {
            $url = self::url($val['mobile']);
            $client = new Client();
            try {
                $res = $client->get($url)->getBody()->getContents();
                $arr = json_decode($res, true);
                if ($arr['code'] != 500) {
                    \Log::notice($arr);
                }
            } catch (\Exception $e) {
                \Log::error($e);
            }
        }
    }
}
