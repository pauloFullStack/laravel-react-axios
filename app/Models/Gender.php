<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{

    protected $fillable = [
        'name',
    ];


    protected $logAttributes = [
        'name',
    ];


    protected $hidden = [];


    protected $dates = [
        'created_at',
        'updated_at'
    ];
}
